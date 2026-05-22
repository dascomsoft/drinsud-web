const express = require('express');
const Comment = require('../models/Comment');
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const router = express.Router();

// GET commentaires d'un post
router.get('/post/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ 
      postId: req.params.postId,
      isApproved: true 
    }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// POST créer un commentaire
router.post('/', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    
    // Mettre à jour le compteur de commentaires du post
    await Post.findByIdAndUpdate(req.body.postId, {
      $inc: { commentCount: 1 }
    });
    
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// POST like sur un commentaire
router.post('/:id/like', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    comment.likes += 1;
    await comment.save();
    res.json({ likes: comment.likes });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// DELETE supprimer un commentaire (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Commentaire supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;