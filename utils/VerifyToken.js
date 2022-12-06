import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token

    // console.log(token)
    if(!token){
        return next(createError(401, "You are not authenticated!"))
    }

    jwt.verify(token,process.env.JWT, (err,user) =>{
        if(err) return createError(403, "Token is not valid!")
        req.user = user
        // console.log(req.user)
        next()
    })
}


export const verifyUser = (req,res,next) =>{
    verifyToken(req,res,next, ()=>{
        // console.log(req.params.id===req.user.id,req.user.isadmin )
        if(req.user.id === req.params.id || req.user.isadmin){
            next()
        }
        else {
            return next(createError(403, "You are not authorized!"))
        }
    })
}

export const verifyAdmin = (req,res,next) =>{
    verifyToken(req,res,next, ()=>{
        // console.log(req.user)
        if(req.user.isadmin){
            next()
        }
        else {
            return next(createError(403, "You are not authorized!"))
        }
    })
}