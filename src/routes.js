import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ClienteController from './app/controllers/ClienteController';
import ChamadoController from './app/controllers/ChamadoController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/register' ,UserController.store );
routes.post('/login' , SessionController.store );

routes.use(authMiddleware);

routes.put('/userfoto' , upload.single('foto') , UserController.updateFoto ); //-> rota de editar
routes.put('/usernome' , upload.single('foto') , UserController.updateNome ); //-> rota de editar
routes.post('/novocliente', ClienteController.store);
routes.get('/todosclientes', ClienteController.show);


routes.post('/novochamado', ChamadoController.store);



routes.get('/todoschamados', ChamadoController.show);
routes.get('/edit/:id', ChamadoController.edit);
routes.put('/edit/:id', ChamadoController.update);




export default routes;