const express 			= require('express');
const router 			= express.Router();

router.get('/', function(req, res, next){
	res.render('index', {title: 'Friends'});
});

router.get('/about', function(req,res,next){
	res.render('about', {title: 'About'});
});

module.exports = router;