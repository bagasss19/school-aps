const route = require('express').Router()
const Controller = require('../controller/controller')


route.get('/', Controller.showTeachers)
route.get('/:id', Controller.showTeachersId)

module.exports = route