import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelcontroller.js";
import { verifyAdmin,verifyUser } from "../utils/VerifyToken.js";

const router = express.Router()


// create
router.post('/',verifyUser, createHotel)

// update
router.put('/:id',verifyUser, updateHotel)

// delete
router.delete('/:id',verifyUser, deleteHotel)

// find one data
router.get('/:id',verifyUser, getHotel)

// find all data
router.get('/',verifyAdmin, getAllHotel)

export default router