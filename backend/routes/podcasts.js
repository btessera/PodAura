// backend/routes/podcasts.js
const express = require('express');
const router = express.Router();

// Sample route for getting podcasts
router.get('/', (req, res) => {
  res.send('List of podcasts');
});

module.exports = router;
