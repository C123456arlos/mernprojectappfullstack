import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'
import { ENV_VARS } from '../config/envVars.js'
export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies['jwt']
        if (!token) {
           return res.status(201).json({success:false, message:'unauthorized no token provided'})
        }
        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET)
        if (!decoded) {
            return res.status(401).json({success:false, message:'unauthorized invalid token'})
        }
        const user = await User.findById(decoded.userId).select('-password')
        if (!user) {
            return res.status(400).json({success:false, message:'user not found'})
        }
        req.user=user
        next()
    } catch (error) {
        console.log('error in protectroute middleware', error.message)
     res.status(500).json({success:false, message:'internal server error'})   
    }
}