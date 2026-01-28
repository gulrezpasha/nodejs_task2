const express=require('express');
const router=express.Router();
const {courses}=require('../mockdata');

router.get('/', (req, res) => {
    
    const courseList = courses.map(course => course.name).join(", ");
    res.status(200).send(`courses: ${courseList}`);
});

router.get('/:id',(req,res)=>{
    const courseId=req.params.id;
    const course=courses.find(course=>course.id==courseId);
    if(course){
        res.status(200).send(`course : ${course.name}`);
    }else{
        res.status(404).send('course not found');
    }
})
module.exports=router;