const express=require('express');
const app=express();
const port=3000;
<<<<<<< HEAD
const addUser=(req,res,next)=>{
    req.user="Guest",
    next();
}
app.get('/welcome',addUser,(req,res)=>{
    res.send(`<h1>Welcome ${req.user}</h1>`);
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
=======
app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}! Ready to handle requests`);
>>>>>>> f4152ed049c635861aa3360044847ccca042fc67
})