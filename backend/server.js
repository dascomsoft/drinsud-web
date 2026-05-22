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

// Logger pour déboguer
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// Connexion MongoDB
async function connectToDatabase() {
  try {
    console.log('🔄 Connexion à MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Atlas connecté');
    console.log('📁 Base de données:', mongoose.connection.name);
  } catch (err) {
    console.error('❌ Erreur MongoDB:', err.message);
    throw err;
  }
}

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/upload', require('./routes/upload'));

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'API DRINSUD fonctionne',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'Connecté' : 'Déconnecté'
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', async () => {
  await connectToDatabase();
  console.log(`🚀 Serveur démarré sur http://0.0.0.0:${PORT}`);
});