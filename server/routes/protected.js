const express = require('express')
const router = express.Router()
const config = require('config')
const conn = require('../lib/conn')
const sha512 = require('sha512')

router.get('/test', function(req, res, next){
  res.json({
    test: 'protected'
  })
})

module.exports = router
