const express = require('express')
const app = express()
const port = 3000
const route = require('./route/home')
const teacher = require('./route/teacher')
const subject = require('./route/subject')
const student = require('./route/student')

app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

app.use('/',route)

app.use('/teachers',teacher)
app.use('/subjects', subject)
app.use('/students', student)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})