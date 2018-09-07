'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/questions', function(req, res, next) {
  res.render('questions/index', { title: 'Questions' });
});
router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'Register' });
});
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'login' });
});

module.exports = router;
