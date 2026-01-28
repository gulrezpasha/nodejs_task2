const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
const homeroute=require('./routes/Home');
const courseroute=require('./routes/course');
const studentsroute=require('./routes/Students');
app.use('/',homeroute);
app.use('/courses',courseroute);
app.use('/course/:id',courseroute)
app.use('/students',studentsroute);

app.use((req,res,next)=>{
  res.status(404).send('page not found');
})
app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})
