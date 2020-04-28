const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Todos list',
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
  })
})

module.exports = router