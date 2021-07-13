import Cliente from '../models/Cliente';
import * as Yup from 'yup';

class ClienteController{
    
    async show(req, res){
        const clientes = await Cliente.findAll({
            where:{ user_id: req.userId}
        });

        return res.json(clientes);
    }
       
    async store(req, res){
        const schema = Yup.object().shape({
            clientenome: Yup.string().required(),
            cnpj: Yup.string().required(),
            endereço: Yup.string().required()
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'falha na validação'});
        }
        
        const {clientenome, cnpj, endereço} = req.body
        const cliente = await Cliente.create({
            user_id: req.userId,
            clientenome,
            cnpj,
            endereço

        });

        return res.status(200).json(cliente);
    }
}

export default new ClienteController();