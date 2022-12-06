import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    distance : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    photos : {
        type : String,
    },
    description : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        min : 0,
        max : 5
    },
    phone : {
        type : Number,
        required : true
    },
    rooms : {
        type : [String],
    },
    cheapestprice : {
        type : Number,
        required : true
    },
    featured : {
        type : Boolean,
        required : false
    },
})

export default mongoose.model('hotel',HotelSchema)