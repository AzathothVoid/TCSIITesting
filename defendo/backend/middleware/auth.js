import jwt from 'jsonwebtoken'

export const isAuthenticatedUser = (req, res, next ) =>{
    console.log(req);
    const token = req.cookies.loginToken;

    if(!token){
        return next(new Error("Please login to acceess this resource") )
    }

    const decode = jwt.verify(token , "OuJ_jm9MQB2oLSX3KBpCEszkh3TtbFGS57xFaAQhUGo")

    req.user = decode.user

    next()
}


export const isAuthorizedUser = (...roles) =>{
    return(req, res, next) => { 

            if(!roles.includes(req.user.role)){
                next(new Error("You are not Authorized to access this Resource"))
            }
            next()
    }
}