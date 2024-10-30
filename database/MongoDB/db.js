import {mongoose} from 'mongoose';
import {configMongoDB } from '../../src/config.js'

const URI = `mongodb+srv://${configMongoDB.user}:${configMongoDB.password}@cluster0.3oyuh.mongodb.net/${configMongoDB.database}?retryWrites=true&w=majority&appName=Cluster0`

export async function conectarMongoDB() {
    try{
        await mongoose.connect(URI);
        console.log("DB MongoDB Conectada correctamente - ")
    }catch (error){
        console.log(error);
        process.exit(1);
    }
}

//conectarMongoDB()