const Model = require('../model/model')

class Controller {
    static home(req,res) {
        res.render('home')
    }

    static showTeachers (req,res) {
        Model.showTeachers((err, data) => {
            res.render('teachers', {data})
        })
    }

    static showStudents(req,res) {
        Model.showStudents((err, data) => {
            res.render('students', {data})
        })
    }

    static showSubjects(req,res) {
        Model.showSubjects((err, data) => {
            res.render('subjects', {data})
        })
    }

    static showTeachersId(req,res) {
        Model.showTeachersId(req.params.id,(err, data) => {
            res.render('teachers', {data})
        })
    }

    static showStudentsEmail(req,res) {
        Model.showStudentsEmail(req.params.email,(err, data) => {
            res.render('students', {data})
        })
    }

    static showSubjectsId(req,res) {
        Model.showSubjectsId(req.params.id,(err, data) => {
            res.render('subjects', {data})
        })
    }


    static addStudentForm(req,res) {
        res.render('addstudent')
    }

    static addStudent(req,res) {
        Model.addStudent(req.body ,(err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')    
            }
        })
    }

    static deleteStudent(req,res) {
        let id = req.params.id
        Model.deleteStudent(id , (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')   
            }
            
        })
    }

    static editStudentForm(req,res) {
        Model.findStudentId(req.params.id,(err, data) => {
            if (err) {
                res.send(err)
            }
                res.render('editstudent', {data})
        })
    }

    static editStudent(req,res) {
        Model.editStudent(req.params.id, req.body,(err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')    
            }
        })
    }
}

module.exports = Controller