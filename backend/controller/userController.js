import userModel from "../models/userModel.js"; // Add .js if it's missing in your import

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//Login user
const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"User does not exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid Password"}) 
        }
        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"Error"})
    }
}
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user
const registerUser = async (req,res)=>{
    const {name,password,email} = req.body;
    try {
        //checking is user already
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"User Already exists"})
        }

        // valisating email format  & password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Pls enter a valid email"})
        }

        if(password.lenght<8){
            return res.json({success:false,message:"Pls enter a Strong password"})
        }

        // hashing user password
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Errord"})
    }
}

export {loginUser,registerUser}