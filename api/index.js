const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Cache pour MongoDB (important pour serverless)
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log('📦 Utilisation du cache MongoDB');
    return cachedDb;
  }
  
  console.log('🔄 Nouvelle connexion MongoDB...');
  await mongoose.connect(process.env.MONGODB_URI);
  cachedDb = mongoose.connection;
  console.log('✅ MongoDB connecté');
  return cachedDb;
}

// Routes - utilise les routes de ton dossier backend
app.use('/api/auth', require('../backend/routes/auth'));
app.use('/api/posts', require('../backend/routes/posts'));
app.use('/api/comments', require('../backend/routes/comments'));
app.use('/api/upload', require('../backend/routes/upload'));

// Route de test
app.get('/api/health', async (req, res) => {
  await connectToDatabase();
  res.json({ 
    status: 'OK', 
    message: 'API DRINSUD fonctionne',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'Connecté' : 'Déconnecté'
  });
});

// Handler pour Vercel (serverless)
module.exports = async (req, res) => {
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