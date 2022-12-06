import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/roomcontroller.js";
import { verifyAdmin,verifyUser } from "../utils/VerifyToken.js";

const router = express.Router()


// create
router.post('/:hotelid',verifyUser, createRoom)

// update
router.put('/:id',verifyUser, updateRoom)

// delete
router.delete('/:id/:hotelid',verifyUser, deleteRoom)

// find one data
router.get('/:id',verifyUser, getRoom)

// find all data
router.get('/',verifyAdmin, getAllRoom)

export default router