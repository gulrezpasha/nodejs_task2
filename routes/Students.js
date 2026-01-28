const express=require('express');
const router=express.Router();
const { students } = require('../mockdata');
router.get('/', (req, res) => {
    
    const studentsList = students.map(student => student.name).join(", ");
    res.status(200).send(`students: ${studentsList}`);
});

router.get('/:id',(req,res)=>{
    const studentsId=req.params.id;
    const student=students.find(student=>student.id==studentsId);
    if(student){
        res.status(200).send(`student : ${student.name}`);
    }else{
        res.status(404).send('student not found');
    }
})

module.exports=router