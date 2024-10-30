import { config } from 'dotenv'

config();

const expressConfig = {
    port: process.env.PORT_EXPRESS,
    host: process.env.HOST_EXPRESS,
}

const configDB = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    server: process.env.SERVER_NAME,
    database: process.env.NAME_DB,
    port: process.env.PORT_DB,
    options: {
        trustServerCertificate: true
    }
}

const configMongoDB = {
    user: process.env.USER_DB_MONGO_DB,
    password: process.env.PASSWORD_DB_MONGO_DB,
    database: process.env.NAME_DB_MONGO_DB
}


export {expressConfig, configDB, configMongoDB }
