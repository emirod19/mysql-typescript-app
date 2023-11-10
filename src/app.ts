import express, {Application} from "express";
//const app = express();//aqui me equivoque al no poner el ()
//app.listen(3000, ()=> console.log('Server on port 3000'));

export class App{
    app: Application;

    constructor(){
        this.app = express();
    }

    async listen(){
         await this.app.listen(3000);
        console.log('Server on port',3000);
    }
}