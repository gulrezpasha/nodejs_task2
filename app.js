const express=require('express');
const app=express();
const port=4000;

app.use(express.json());
app.get('/',(req,res)=>{
    console.log("request recieved at root url");
     res.send('<h1>Welcome to Home Page</h1>');
})

app.get('/welcome/:username',(req,res)=>{
    const username=req.params.username;
    const queryparams=req.query;
    res.send(`Welcome ${username} Your role is ${queryparams.role}`);
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})