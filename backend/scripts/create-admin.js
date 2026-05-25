
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model('User', userSchema);

async function updateAdmin() {
  try {
    console.log('🔄 Connexion à MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connecté\n');
    
    const newUsername = 'lepaneliste';
    const newEmail = 'lepaneliste@gmail.com';
    const newPassword = 'lepaneliste2025';
    
    console.log('📝 Nouveaux identifiants:');
    console.log(`   Username: ${newUsername}`);
    console.log(`   Email: ${newEmail}`);
    console.log(`   Password: ${newPassword}\n`);
    
    console.log('🔒 Hashage du mot de passe...');
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    console.log('💾 Mise à jour en base...');
    const result = await User.updateOne(
      { role: 'admin' },
      { 
        username: newUsername,
        email: newEmail,
        password: hashedPassword
      }
    );
    
    if (result.modifiedCount > 0) {
      console.log('✅ Admin modifié avec succès !\n');
      console.log('🔐 NOUVEAUX IDENTIFIANTS:');
      console.log('━'.repeat(50));
      console.log(`   👤 Username: ${newUsername}`);
      console.log(`   🔑 Password: ${newPassword}`);
      console.log(`   📧 Email: ${newEmail}`);
      console.log('━'.repeat(50));
    } else if (result.matchedCount > 0) {
      console.log('⚠️ Aucune modification (identifiants identiques)');
    } else {
      console.log('❌ Admin non trouvé. Création...');
      
      const newAdmin = new User({
        username: newUsername,
        email: newEmail,
        password: hashedPassword,
        role: 'admin'
      });
      
      await newAdmin.save();
      console.log('✅ Admin créé avec succès !');
    }
    
    await mongoose.disconnect();
    console.log('\n✨ Script terminé');
    
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

updateAdmin();
