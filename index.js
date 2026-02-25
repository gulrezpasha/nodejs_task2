const express=require('express');
const app=express();
const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Pasha1853@',
    database:'testdb'
})

connection.connect((err)=>{
    if(err){
        console.error('error connecting to db:',err);
        return;
    }
    console.log('connected to db');

    const creationQuery=`CREATE TABLE Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
    )`
    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('table created successfully');
    })
})
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})