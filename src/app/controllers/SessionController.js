import jwt from 'jsonwebtoken';


import User from "../models/User";


class SessionController{

    async store(req, res){
        const {email, password} = req.body

        console.log(req.body)
        const user = await User.findOne({ where:{
            email: email
        } });

        if(!user){
            return res.status(400).json({ error: 'usuario não existe'});
        }

        if(!(await user.checkpassword(password))){
            return res.status(400).json({ error: 'senha incorreta'})
        }

        const {id, nome, foto} = user;
        
        return res.json({
            user: user

            ,
            token: jwt.sign({id}, 'segredo', {
                expiresIn: '7d',

            })
        });

       
       
       
       
        
    }
}

export default new SessionController();