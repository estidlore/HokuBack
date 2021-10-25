const express = require('express');
const firebase = require('../firebase');

const router = express.Router();

router.get('/all', async (req, res) => {
  const skills = await firebase.getAll('Skills');
  res.json({
    skills: skills,
  });
});

module.exports = router;
