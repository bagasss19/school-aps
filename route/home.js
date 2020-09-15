const route = require('express').Router()
const Controller = require('../controller/controller')

route.get('/', Controller.home)
  


module.exports = route