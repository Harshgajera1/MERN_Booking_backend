import HotelModel from "../models/HotelModel.js"

export const createHotel = async (req,res,next) =>{
    const newHotel = new HotelModel(req.body)
    try {
        const SavedHotel = await newHotel.save()
        res.status(200).json(SavedHotel)
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

export const updateHotel = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const updateHotel = await HotelModel.findByIdAndUpdate(
            req.params.id,
            {$set : req.body},
            {new : true}
            )
        res.status(200).json(updateHotel)
    } catch (error) {
        // res.status(500).json(error)
        next(error)
    }
}

export const deleteHotel = async (req,res,next) =>{
    try {
        // console.log(req.params)
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Data has been deleted')
    } catch (error) {
        // res.status(500).json(error)
        next(error)
    }
}

export const getHotel = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const hotel =  await HotelModel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        // res.status(500).json(error)
        next(error)
    }
}

export const getAllHotel = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const hotelsAll =  await HotelModel.find()
        res.status(200).json(hotelsAll)
    } catch (error) {
        // console.log(error)
        // res.status(500).json(error)
        next(error)
    }
}