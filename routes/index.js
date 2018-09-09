'use strict';
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('auth/register', { title: 'Register' });
});
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'login' });
});


router.get('/questions', function(req, res, next) {
  res.render('questions/index', { title: 'Questions' });
});
router.get('/questions/new', function(req, res, next) {
  res.render('questions/new', { title: 'QuestionNew' });
});
router.get('/questions/:id', function(req, res, next) {
  res.render('questions/show', { title: 'QuestionNew' });
});
router.get('/questions/:id/answers/new', function(req, res, next) {
  res.render('questions/answers/new', { title: 'QuestionNew' });
});


module.exports = router;
