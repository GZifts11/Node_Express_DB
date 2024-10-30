import sql from 'mssql'
import { configDB } from '../src/config.js'

const dbConfig = {
    user: configDB.user,
    password: configDB.password,
    server: configDB.server,
    database: configDB.database,
    port: parseInt(configDB.port),
    options: {
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbConfig);

         const resultado = await pool.request().query('SELECT 1');
         console.log(resultado)

        return pool
    } catch (error) {
        console.log(error)
    }
}

getConnection()

export { sql }