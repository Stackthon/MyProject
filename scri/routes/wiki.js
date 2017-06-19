const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User; 


router.get('/', function(req, res, next) {
  res.render('wikipage');
});



router.post('/', function(req, res, next) {

	 var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });
  //res.json(req.body);
  
  page.save().then(function(savedPage){
    res.redirect(savedPage.route); // route virtual FTW
    }).catch(next);
  //res.render('addpage');
  //res.json(page);
});

router.get('/add', function(req, res) {
  res.render('addpage');
});



router.get('/:urlTitle', function (req, res, next) {

  Page.findOne({ 
    where: { 
      urlTitle: req.params.urlTitle 
    } 
  })
  .then(function(foundPage){
    res.render('wikipage', {page: foundPage});
    //res.json(foundPage);
  })
  .catch(next);

});

router.get('/:urlTitle', function (req, res, next) {
  res.send('hit dynamic route at ' + req.params.urlTitle);
});





module.exports = router;
