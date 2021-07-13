import express from 'express';
import routes from './routes';
import './database';
import cors from 'cors';
import path from 'path';

class App{
    constructor(){
        this.server = express();
        
        this.middlewares();
        this.routes()
    }

    middlewares(){
        
        
        
        this.server.use(cors());
        this.server.use(express.json())
        
        this.server.use('/files/',
        express.static(path.resolve(__dirname, '..', 'uploads')))
        
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server