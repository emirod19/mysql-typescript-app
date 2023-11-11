import express, {Application} from "express";
//const app = express();//aqui me equivoque al no poner el ()
//app.listen(3000, ()=> console.log('Server on port 3000'));

export class App{
    app: Application;
    port:
    constructor(private port: number| string){
        this.app = express();
        this.settings();
    }
    settings(){
        this.app.set('port', this.port|| process.env.PORT || 3000);
    }

    async listen(port){
         await this.app.listen(this.app.get('port'));
        console.log('Server on port',his.app.get('port'));
    }
}