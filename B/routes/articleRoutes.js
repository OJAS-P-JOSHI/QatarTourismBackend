const express = require('express');
const { createArticle, getArticles, getArticle, updateArticle, deleteArticle } = require('../controllers/articleController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, adminOnly, createArticle)
  .get(getArticles);

router.route('/:id')
  .get(getArticle)
  .put(protect, adminOnly, updateArticle)
  .delete(protect, adminOnly, deleteArticle);

module.exports = router;
