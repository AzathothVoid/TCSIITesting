import { User } from "../model/userSchema.js";
import bycrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken";



export const regsiterUser = async(req, res, next)=> {
    const user = req.body
    
    user.password
    user.password = await bycrypt.hash(user.password, 10)

    try {
        await User.create(user)
        res.json({
            message : 'The user has been registered',
            user : user,
            status : "success",
        })
    } catch (error) {
        next(error)
    }
}

export const loginUser = async(req, res, next)=>{

    const {email , password} = req.body
    
    try {
        if (!email) {
           return next(new Error('Please enter your Email address'))
        }
    
        if (!password) {
            return next(new Error('Please Enter Your Password'))
        }
        const user = await User.findOne({email : req.body.email})
    
        if (!user) {
            return next(new Error('Your Email or Password is incorrect'))
        }
    
        const isPasswordMatched =  await bycrypt.compare(password, user.password)
    
        if (!isPasswordMatched) {
            return next(new Error('Your Email or Password is incorrect'))
        }
    
        const loginToken = jwt.sign({user : user}, 'OuJ_jm9MQB2oLSX3KBpCEszkh3TtbFGS57xFaAQhUGo')

    
        res.cookie('loginToken', loginToken, { expires : new Date(Date.now() + 60000000), httpOnly: true, secure : false }).json({
            user: user,
            message: 'You have been Logged in',
            status : "success",
            loginToken : loginToken

          })
    } catch (error) {
        next(error)
    }
    
    
    
}

export const logoutUser = async(req, res, next)=>{
    
    try {
        res.cookie("loginToken", "", { expires: new Date(0), httpOnly: true }).json({
            message : 'You have been Logged out'
        })
    } catch (error) {
        next(error)
    }
}
export const getAllUsers = async(req, res, next)=>{

    try {
        const users = await User.find();

        res.json(users)
    } catch (error) {
        next(error)
    }
}
export const deleteUserById = async(req, res, next)=>{
    const {id} = req.params

    try {
        await User.findByIdAndDelete(id)
        res.json({ message: "user has been Deleted" })

    } catch (error) {
        next(error)
    }
}