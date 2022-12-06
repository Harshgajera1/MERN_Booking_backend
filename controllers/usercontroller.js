import UserModel from "../models/UserModel.js"

export const createUser = async (req,res,next) =>{
    const newHotel = new UserModel(req.body)
    try {
        const SavedHotel = await newHotel.save()
        res.status(200).json(SavedHotel)
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

export const updateUser = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const updateHotel = await UserModel.findByIdAndUpdate(
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

export const deleteUser = async (req,res,next) =>{
    try {
        // console.log(req.params)
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Data has been deleted')
    } catch (error) {
        // res.status(500).json(error)
        next(error)
    }
}

export const getUser = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const hotel =  await UserModel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        // res.status(500).json(error)
        next(error)
    }
}

export const getAllUser = async (req,res,next) =>{
    try {
        // console.log(req.params)
        const hotelsAll =  await UserModel.find()
        res.status(200).json(hotelsAll)
    } catch (error) {
        // console.log(error)
        // res.status(500).json(error)
        next(error)
    }
}