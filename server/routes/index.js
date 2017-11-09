var express = require('express');
var router = express.Router();
var path = require('path')

router.get("/services", function(req, res, next){
  console.log('services')
  res.redirect("/")
})

router.get("*", function(req, res, next){
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
})

module.exports = router;
