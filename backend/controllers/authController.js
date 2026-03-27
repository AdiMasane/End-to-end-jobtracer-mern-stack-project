import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


// REGISTER
export const registerUser = async (req,res)=>{

const {name,email,password} = req.body

const userExists = await User.findOne({email})

if(userExists){
return res.status(400).json({message:"User already exists"})
}

const hashedPassword = await bcrypt.hash(password,10)

const user = await User.create({
name,
email,
password:hashedPassword
})

res.json({
_id:user._id,
name:user.name,
email:user.email
})

}


// LOGIN
export const loginUser = async (req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(user && await bcrypt.compare(password,user.password)){

const token = jwt.sign(
{id:user._id},
process.env.JWT_SECRET,
{expiresIn:"7d"}
)

res.json({
token,
user:{
name:user.name,
email:user.email
}
})

}else{

res.status(401).json({message:"Invalid credentials"})

}

}


// UPDATE USER
export const updateUser = async (req,res)=>{

try{

const user = await User.findById(req.user.id)

const {name,email,password} = req.body

if(name) user.name = name
if(email) user.email = email

if(password){
user.password = await bcrypt.hash(password,10)
}

await user.save()

res.json({
name:user.name,
email:user.email
})

}catch(error){

res.status(500).json({message:"Server error"})

}

}