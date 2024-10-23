import express from 'express'
import { expressConfig } from './src/config.js'
import alumnosRoutes from './src/routes/alumnos.routes.js'

// import './src/database/conexion.js'

const app = express()

app.set('port', expressConfig.port)
app.set('host', expressConfig.host);

app.use(express.json())
app.use(alumnosRoutes)

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Servidor corriendo en 'http://${app.get('host')}:${app.get('port')}`)
})