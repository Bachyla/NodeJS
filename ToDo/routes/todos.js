const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo')

router.get('/', (req, res) => {
  const todos = Todo.find({})
  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})

module.exports = router