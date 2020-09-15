const client = require('./setup')
const fs = require('fs')

let students = JSON.parse(fs.readFileSync('./students.json',"utf8"))
let subjects = JSON.parse(fs.readFileSync('./subjects.json',"utf8"))
let teachers = JSON.parse(fs.readFileSync('./teachers.json',"utf8"))


  // const query = `CREATE TABLE "Students" (
  //     id serial PRIMARY KEY,
  // 	first_name VARCHAR ( 50 ) NOT NULL,
  //     last_name VARCHAR ( 50 ) NOT NULL,
  //     email VARCHAR (25) NOT NULL,
  // 	gender VARCHAR ( 10 ) NOT NULL,
  // 	birth_date VARCHAR ( 20 ) NOT NULL 
  //  );`

//  const query = `CREATE TABLE "Teachers" (
//      id serial PRIMARY KEY,
//  	first_name VARCHAR ( 50 ) NOT NULL,
//      last_name VARCHAR ( 50 ) NOT NULL,
//      email VARCHAR (50) NOT NULL,
//  	gender VARCHAR ( 10 ) NOT NULL
//   );`

// const query = `CREATE TABLE "Subjects" (
//          id serial PRIMARY KEY,
//      	subject_name VARCHAR ( 50 ) NOT NULL
//       );`


let query = `INSERT INTO "Students"(first_name, last_name, email, gender, birth_date) VALUES`
let value = ``

for (let i = 0; i < students.length; i++) {
  if (i === students.length -1) {
    value += `('${students[i].first_name}','${students[i].last_name}','${students[i].email}','${students[i].gender}','${students[i].birth_date}');`
  } else {
    value += `('${students[i].first_name}','${students[i].last_name}','${students[i].email}','${students[i].gender}','${students[i].birth_date}'),`
  }
}

query += value
//console.log(value);

/*
INSERT INTO contacts(customer_id, contact_name, phone, email)
VALUES(1,'John Doe','(408)-111-1234','john.doe@bluebird.dev'),
      (2,'David Wright','(408)-222-1234','david.wright@dolphin.dev');
*/



client.query(query, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(`sukses`)
    }
    client.end()
  })