import express, {Application} from "express";
////import morgan from 'morgan'
//const app = express();//aqui me equivoque al no poner el ()
//app.listen(3000, ()=> console.log('Server on port 3000'));

//routes
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'

export class App{
    app: Application;
    port:
    constructor(private port: number| string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes()
    }
    settings(){
        this.app.set('port', this.port|| process.env.PORT || 3000);
    }

    middlewares(){

    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/posts' PostRoutes);
    }

    async listen(port){
         await this.app.listen(this.app.get('port'));
        console.log('Server on port',his.app.get('port'));
    }
}