// backend/scripts/create-admin.js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

const createAdmin = async () => {
  try {
    console.log('🔄 Tentative de connexion à MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connecté à MongoDB');
    
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('❌ Un admin existe déjà');
      console.log('Username:', existingAdmin.username);
      console.log('Email:', existingAdmin.email);
      process.exit(0);
    }
    
    const hashedPassword = await bcrypt.hash('Admin123!', 10);
    
    const admin = new User({
      username: 'drinsud_admin',
      email: 'admin@drinsud.com',
      password: hashedPassword,
      role: 'admin'
    });
    
    await admin.save();
    console.log('✅ Admin créé avec succès');
    console.log('📋 Identifiants:');
    console.log('   Username: drinsud_admin');
    console.log('   Password: Admin123!');
    console.log('   Email: admin@drinsud.com');
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    console.log('\n💡 Vérifiez:');
    console.log('1. Le mot de passe dans .env');
    console.log('2. La whitelist IP dans MongoDB Atlas');
    console.log('3. Que l\'utilisateur existe dans Database Access');
    process.exit(1);
  }
};

createAdmin();