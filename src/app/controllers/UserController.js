import * as Yup from 'yup';
import User from "../models/User";

class UserController{
    
    async show(req, res){
        const user = await User.findAll()
        return res.json(user);
    }
    
    
    
    async store(req, res){
        
       
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().min(8).required()
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'falha na validação'});
        }


        const userExist = await User.findOne({
            where: {email: req.body.email}
        });

        if(userExist){
            return res.status(400).json({error: 'usuario ja existe'});
        }

        const user = await User.create(req.body);
        return res.json(user);
    }



    async updateNome(req, res){
       
        const user = await User.findByPk(req.userId);
        const {nome} = req.body;
        
        const response = await user.update({
            nome:nome
        })
        
        return res.json(user);

        }
 
        
       async updateFoto(req, res){
       
        const user = await User.findByPk(req.userId);
        
        const { filename } = req.file;

        const response = await user.update({
            nome: req.body.nome,
            foto: filename,
            fotourl: `http://localhost:3333/files/${filename}`
            
        })
        
        return res.json(user);


       } 

       


       
       


    }




export default new UserController();