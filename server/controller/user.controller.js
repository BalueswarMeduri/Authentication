import bcrypt from "bcryptjs";
import UserModel from "../model/usermode.js";
import jwt from "jsonwebtoken"


export const register = async(req, res)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            message : "All fields are not filled"
        });
    }
   
   const isuserexist = UserModel.findOne({email});
   if(isuserexist){
        return res.status(400).json({
            message : "User already exist"
        });
   } 
   const hashedPassword = await bcrypt.hash(password, 10);

   const newuser = new UserModel({
    name,
    email,
    password : hashedPassword
   })

   const token = jwt.sign({id:newuser._id}, process.env.JWT_SECRET , {expiresIn : '7d'})

   res.cookie("token", token,{
        httpOnly : true,
        secure : process.env.NODE_ENV === 'production',
        sameSite : process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge : 7 * 24 * 60 * 60 * 1000
   })

   await newuser.save();
   return res.status(200).json({
    message : "User is created successfully"
   })

} 