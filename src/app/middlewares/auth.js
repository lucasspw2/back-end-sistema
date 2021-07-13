import jwt from "jsonwebtoken";
import {promisify} from 'util';




export default async(req, res, next) => {
    const authHeader = req.headers.authorization;


    if(!authHeader){
        return res.status(401).json({ error: 'token não existe'});
    }

    const [,token] = authHeader.split(' ');


    try{

        const decoded = await promisify(jwt.verify)(token, 'segredo');

        req.userId = decoded.id;

        return next();


    }catch(err){
        return res.status(401).json({ error: 'token invalido'});
    }

    

}