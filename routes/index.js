var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/tsungTest',function(req,res,next){
  res.send("testSuccess");
})

module.exports = router;
