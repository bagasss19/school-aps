const client = require('../db/setup')

class Model {
    static showTeachers(cb) {
        client.query(`SELECT * from "Teachers"`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static showStudents(cb) {
        client.query(`SELECT * from "Students"`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static showSubjects(cb) {
        client.query(`SELECT * from "Subjects"`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static showTeachersId(id,cb) {
        client.query(`SELECT * from "Teachers" Where id = ${id}`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static showStudentsEmail(email,cb) {
        client.query(`SELECT * from "Students" Where email = '${email}'`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static showSubjectsId(id,cb) {
        client.query(`SELECT * from "Subjects" Where id = ${id}`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static addStudent(obj,cb) {
        client.query(`INSERT INTO "Students"(first_name, last_name, email, gender, birth_date) VALUES('${obj.first_name}','${obj.last_name}','${obj.email}','${obj.gender}','${obj.birth_date}');`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static deleteStudent(id,cb) {
        client.query(`DELETE from "Students" WHERE id = ${id}`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static findStudentId(id, cb) {
        client.query(`SELECT * from "Students" Where id = ${id}`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }

    static editStudent(id, obj,cb) {
        client.query(`UPDATE "Students" SET first_name = '${obj.first_name}' , last_name = '${obj.last_name}', email = '${obj.email}', gender = '${obj.gender}', birth_date = '${obj.birth_date}' WHERE id = ${id};`, (err, res) => {
            if (err) {
                cb (err, null)
            } else {
                cb (null, res.rows)
            }
        })
    }
}

module.exports = Model