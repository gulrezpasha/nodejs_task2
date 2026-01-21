const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    console.log("request recieved at root url");
})

app.get('/orders',(req,res)=>{
    res.send(`<h1>"Here is the list of all orders."</h1>`);
})
app.post('/orders',(req,res)=>{
    res.send(`<h1>"A new order has been created."</h1>`);
})
app.get('/users',(req,res)=>{
    res.send(`<h1>"Here is the list of all users."</h1>`);
})
app.post('/users',(req,res)=>{
    res.send(`<h1>"A new user has been added."</h1>`);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})