import express from 'express'
import dotenv from 'dotenv'
import mongoose, { mongo } from 'mongoose'
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import hotelsRouter from './routes/hotels.js'
import roomsRouter from './routes/rooms.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.Mongo)
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () =>{
    console.log('mongoDB disconnected!')
})
mongoose.connection.on("connected", () =>{
    console.log('mongoDB connected!')
})

app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/api/auth',authRouter)
app.use('/api/users',usersRouter)
app.use('/api/hotels',hotelsRouter)
app.use('/api/rooms',roomsRouter)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.massage || 'Something went wrong!'
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    })
})


app.listen(8080, () => {
    connect()
    console.log('server start port no : 8080')
})



// import express from "express";
// import mongoose from "mongoose";
// const app = express();

// // Connect to DB
// const mongoURI = "mongodb+srv://harsh:gajera@cluster0.faknzna.mongodb.net/booking?retryWrites=true&w=majority";

// mongoose.connect(mongoURI, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// });

// // Route
// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
// res.render("index");
// });

// Endpoint
// app.post("/shortUrls", (req, res) => {});
// app.listen(process.env.PORT || 8000,()=>{
//     console.log('server start')
// });

