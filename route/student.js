const route = require('express').Router()
const Controller = require('../controller/controller')


route.get('/', Controller.showStudents)
route.get('/add', Controller.addStudentForm)
route.post('/add', Controller.addStudent)
route.get('/:id/edit', Controller.editStudentForm)
route.post('/:id/edit', Controller.editStudent)
route.get('/:id/delete', Controller.deleteStudent)
route.get('/:email', Controller.showStudentsEmail)


module.exports = route