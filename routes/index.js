var express = require('express');
var router = express.Router();

var todoDB = require('../config/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'TODO List',
    todo: todoDB.getAll()
  });
});

router.post('/', function(req,res){
  todoDB.addOne(req.body.item)
  res.redirect('/')
})

router.delete('/:idx', function(req,res){
  todoDB.deleteOne(req.params.idx)
  res.redirect('/')
})


module.exports = router;
