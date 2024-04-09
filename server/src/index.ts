import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import productsRoutes from './routes/productsRoutes';
import productController from './controllers/productsController';

class Server{

    public app: Application;

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }   

    routes(): void {
        //Aqui es donde se colocan las rutas para las peticiones REST
        //this.app.use(indexRoutes);
        this.app.use('/api/products',productsRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port', this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();
