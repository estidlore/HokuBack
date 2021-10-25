const express = require('express');
const firebase = require('../firebase');

const router = express.Router();

router.get('/', async (req, res) => {
  const description = await firebase.get('About', 'description');
  res.json({
    description: description
  });
});

module.exports = router;
