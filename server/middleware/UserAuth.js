import jwt from "jsonwebtoken";

const userAuth = async(req, res, next)=>{
    const {token} = req.cookies;

    if(!token){
        return res.status(400).json({
            message : "user is not authenticated"
        })
    }
    try {
        const tokendecoded = jwt.verify(token, process.env.JWT_SECRET);
        if(tokendecoded){
            req.body.userId = tokendecoded.id;
        }else{
            return res.status(400).json({
                message : "user is not authenticated"
            })
        }

        next();

    } catch (error) {
        return res.status(400).json({
            message : "invalid token"
        })
    }
}

export default userAuth;