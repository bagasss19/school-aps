const route = require('express').Router()
const Controller = require('../controller/controller')


route.get('/', Controller.showSubjects)
route.get('/:id', Controller.showSubjectsId)

module.exports = route