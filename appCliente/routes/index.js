var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('estudiante/list');
});

router.get('/test', function(req, res, next) {

});

router.get('/form', function(req, res, next) {
  res.render('estudiante/form');
});

router.get('/find', function(req, res, next) {
  res.render('estudiante/find');
});

router.get('/delete', function(req, res, next) {
  res.render('estudiante/delete');
});

router.get('/edit', function(req, res, next) {
  res.render('estudiante/edit');
});

router.get('/list', function(req, res, next) {
  res.render('estudiante/list');
});

router.get('/listarMuni', function(req, res, next){
  res.render('estudiante/municipio');
});

router.get('/listarProm', function(req, res, next){
  res.render('estudiante/promedio');
});

router.get('/listarEsc', function(req, res, next){
  res.render('estudiante/escuela');
});

module.exports = router;
