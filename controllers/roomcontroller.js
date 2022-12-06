import RoomModel from "../models/RoomModel.js";
import HotelModel from "../models/HotelModel.js";

export const createRoom =async (req,res,next) =>{
    // console.log(req.body,req.params)
    const newRoom = new RoomModel(req.body)

    try {
        const savedRoom = await newRoom.save()
        // console.log(savedRoom)
        try {
            await HotelModel.findByIdAndUpdate(req.params.hotelid,{
                $push : { rooms : savedRoom._id },
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

export const updateRoom = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const updateRoomDetails = await RoomModel.findByIdAndUpdate(
            req.params.id,
            {$set : req.body},
            {new : true}
            )
        res.status(200).json(updateRoomDetails)
    } catch (error) {
        // res.status(500).json(error)
        next(error)
    }
}

export const deleteRoom = async (req,res,next) =>{
    try {
        // console.log(req.params)
        await RoomModel.findByIdAndDelete(req.params.id)
        try {
            await HotelModel.findByIdAndUpdate(req.params.hotelid,{
                $pull : { rooms : req.params.id}
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json('Room has been deleted')
    } catch (error) {
        // res.status(500).json(error)
        next(error)
    }
}

export const getRoom = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const hotel =  await RoomModel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        // res.status(500).json(error)
        next(error)
    }
}

export const getAllRoom = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const roomsAll =  await RoomModel.find()
        res.status(200).json(roomsAll)
    } catch (error) {
        // console.log(error)
        // res.status(500).json(error)
        next(error)
    }
}