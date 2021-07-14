import * as Yup from 'yup';
import Chamado from "../models/Chamado";
import Cliente from "../models/Cliente";



class ChamadoController{


    async update(req, res){
         const schema = Yup.object().shape({
           assunto: Yup.string().required(),
           status: Yup.string().required(),
       });
     
       if(!(await schema.isValid(req.body))){
           return res.status(400).json({ error: 'falha na validação'});
       }


        const { id } = req.params;
        const chamado = await Chamado.findByPk(id);
        
        if(!chamado){
          return res.status(400).json({error: 'chamado não existe'})
        }
        
        chamado.update(req.body);
       
        return res.json(chamado);
    }


    async edit(req, res){
        const {id} = req.params;
        const chamado = await Chamado.findByPk(id, {
            include: [{
                model: Cliente,
               
              }]
           });

           return res.json(chamado);
    }


    async show(req, res){
      const chamado = await Chamado.findAll({
        include: [{
          model: Cliente,
         
        }]
      });
    
    return res.json(chamado);
}


    async store(req, res){
    
      const schema = Yup.object().shape({
        assunto: Yup.string().required(),
        status: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
        return res.status(400).json({ error: 'falha na validação'});
    }

    const {cliente_id , assunto, status, complemento} = req.body;   
    const chamado = await Chamado.create({
     cliente_id,
     assunto,
     status,
     complemento

 })
    return res.json(chamado);
    
}

}

export default new ChamadoController();