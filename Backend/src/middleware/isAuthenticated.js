/* 


 */
import jwt from "jsonwebtoken";
import { secretKey } from "../config.js";


const isAuthenticated = async (req,res,next)=>{

    /* 
    get token
    if not token => throw error
    else
        extract token from bearer token
    verify token
    if not verify
        throw error
    if verify
        extract id from token, send id to next middleware
    call next midleware
     */
    

    let bearerToken=req.headers.authorization;
    if(!bearerToken){
        res.status(401).json({
            success:false,
            message:"token not valid",
        })

    }
    else{
        let token=bearerToken.split(" ")[1]
        let info=jwt.verify(token,secretKey)
        req.id=info.id;
        next();
    }
}

export default isAuthenticated;