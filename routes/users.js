import express from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/usercontroller.js";
import UserModel from "../models/UserModel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/VerifyToken.js";

const router = express.Router()

// router.get('/checkauth',verifyToken , (req,res,next)=>{
//     res.send('hello user, you are logged in')
// })

// router.get('/checkauth/:id',verifyUser , (req,res,next)=>{
//     res.send('hello user, you are logged in and you cand delete your account!')
// })

// router.get('/checkauth1/:id',verifyAdmin , (req,res,next)=>{
//     res.send('hello user, you are logged in and you cand delete all account!')
// })

// router.get('/a',async (req,res) =>{
//     const hotelsAll =  await UserModel.find()
//         res.status(200).json(hotelsAll)
// })


// update
router.put('/:id',verifyUser, updateUser)

// delete
router.delete('/:id',verifyUser ,deleteUser)

// find one data
router.get('/:id',verifyUser, getUser)

// find all data
router.get('/',verifyAdmin , getAllUser)

export default router