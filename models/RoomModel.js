import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    maxpeople : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    roomnumbers : [{number : Number, unavailabledatestype :{ type : [Date] } }],
},
{timestamps : true}
)

export default mongoose.model('room',RoomSchema)