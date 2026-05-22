const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const cloudinary = require('../config/cloudinary');
const router = express.Router();

// GET tous les posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({ published: true })
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.error('Erreur GET posts:', error);
    res.status(500).json({ message: error.message });
  }
});

// GET un post par ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    post.views += 1;
    await post.save();
    res.json(post);
  } catch (error) {
    console.error('Erreur GET post:', error);
    res.status(500).json({ message: error.message });
  }
});

// POST créer un post
router.post('/', auth, async (req, res) => {
  try {
    console.log('Création d\'un post - Données reçues:', req.body);
    
    const post = new Post({
      title: req.body.title,
      category: req.body.category,
      excerpt: req.body.excerpt,
      content: req.body.content,
      imageUrl: req.body.imageUrl || '',
      imagePublicId: req.body.imagePublicId || '',
    });
    
    const savedPost = await post.save();
    console.log('Post créé avec succès:', savedPost._id);
    res.status(201).json(savedPost);
  } catch (error) {
    console.error('Erreur création post:', error);
    res.status(500).json({ message: error.message });
  }
});

// PUT modifier un post
router.put('/:id', auth, async (req, res) => {
  try {
    // Si l'image a changée et qu'il y avait une ancienne image, la supprimer de Cloudinary
    const existingPost = await Post.findById(req.params.id);
    
    if (existingPost && existingPost.imagePublicId && 
        existingPost.imagePublicId !== req.body.imagePublicId) {
      await cloudinary.uploader.destroy(`drinsud/annonces/${existingPost.imagePublicId}`);
    }
    
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    );
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    res.json(post);
  } catch (error) {
    console.error('Erreur modification post:', error);
    res.status(500).json({ message: error.message });
  }
});

// DELETE supprimer un post
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    // Supprimer l'image de Cloudinary si elle existe
    if (post.imagePublicId) {
      await cloudinary.uploader.destroy(`drinsud/annonces/${post.imagePublicId}`);
    }
    
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post supprimé avec succès' });
  } catch (error) {
    console.error('Erreur suppression post:', error);
    res.status(500).json({ message: error.message });
  }
});

// POST like sur un post
router.post('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    post.likes += 1;
    await post.save();
    res.json({ likes: post.likes });
  } catch (error) {
    console.error('Erreur like:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;