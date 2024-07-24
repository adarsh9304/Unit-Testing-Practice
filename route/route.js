import express from "express";
import userList from '../controller/user.js'
import studentList from '../controller/student.js'

const router=express.Router();

router.get('/userlist',userList)
router.get('/studentlist',studentList)

export default router;