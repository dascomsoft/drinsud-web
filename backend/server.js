// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Logger pour déboguer
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// // Connexion MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('✅ MongoDB Atlas connecté');
//     console.log('📁 Base de données:', mongoose.connection.name);
//   })
//   .catch(err => {
//     console.error('❌ Erreur MongoDB:', err.message);
//   });

// // Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));
// app.use('/api/comments', require('./routes/comments'));
// app.use('/api/upload', require('./routes/upload'));

// // Route de test
// app.get('/api/health', (req, res) => {
//   res.json({ 
//     status: 'OK', 
//     message: 'API DRINSUD fonctionne',
//     timestamp: new Date().toISOString(),
//     mongodb: mongoose.connection.readyState === 1 ? 'Connecté' : 'Déconnecté'
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
// });
































































const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logger pour déboguer (désactivé en production pour les performances)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// Cache de connexion MongoDB pour serverless
let cachedDb = null;

async function connectToDatabase() {
  // Si déjà connecté, réutiliser la connexion
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log('📦 Utilisation de la connexion MongoDB en cache');
    return cachedDb;
  }
  
  try {
    console.log('🔄 Nouvelle connexion à MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    cachedDb = mongoose.connection;
    console.log('✅ MongoDB Atlas connecté');
    console.log('📁 Base de données:', mongoose.connection.name);
    return cachedDb;
  } catch (err) {
    console.error('❌ Erreur MongoDB:', err.message);
    throw err;
  }
}

// Routes (ne pas attendre la connexion ici, elle se fera dans le handler)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/upload', require('./routes/upload'));

// Route de test
app.get('/api/health', async (req, res) => {
  try {
    await connectToDatabase();
    res.json({ 
      status: 'OK', 
      message: 'API DRINSUD fonctionne',
      timestamp: new Date().toISOString(),
      mongodb: mongoose.connection.readyState === 1 ? 'Connecté' : 'Déconnecté'
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'ERROR', 
      message: error.message 
    });
  }
});

// Handler pour Vercel (serverless)
module.exports = async (req, res) => {
  // Établir la connexion MongoDB avant de traiter la requête
  await connectToDatabase();
  return app(req, res);
};

// Pour développement local uniquement
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  });
}