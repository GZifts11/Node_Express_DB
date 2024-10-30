import { actualizarAlumnoService, agregarAlumnoService, eliminarAlumnoService, getAlumnoByIdService, getAlumnosJoinService, getAlumnosService } from "../services/alumnos.service.js"

const USE_SQL = false;

export const getAlumnosController = async (req, res) => {
    try {
        let alumnos = await getAlumnosService()

        if(USE_SQL){
            alumnos.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(alumnos.recordset)
        }else{
            alumnos.length === 0 ? res.send('La Base de datos está vacía') : res.send(alumnos)
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los alumnos' })
    }
}
export const agregarAlumnosController = async (req, res) => {
    const { nombre, materia_id, turno_id, comision, debe_correlativa } = req.body
    
    if (nombre == null || materia_id == null || turno_id == null || comision == null || debe_correlativa == null){
        res.status(400).send({ message: 'Error en la solicitud, por favor llene todos los campos' })
    }

    try {
        const alumnoNuevo = await agregarAlumnoService({nombre, materia_id, turno_id, comision, debe_correlativa})
        res.status(200).send({mensaje: 'Alumno agregado correctamente', Alumno: alumnoNuevo})
        
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al agregar el alumno' })
    }
}
export const getAlumnoByIdController = async (req, res) => {
    const {id}= req.params

    if(isNaN(id) && USE_SQL) {
        return res.status(404).send({mensaje: 'Error en la solicitud, el ID debe ser un número'})
    }

    try {
        const alumnoEncontrado = await getAlumnoByIdService(id)

        if(!alumnoEncontrado) {
            return res.status(404).send({mensaje: `No se encotró ningún alumno con ID ${id}`})
        }

        res.status(200).send(alumnoEncontrado)
    } catch (error) {
        console.error(error)
        res.status(500).send({mensaje: 'Error al obtener el alumno'})
    }
}
export const eliminarAlumnoController = async (req, res) => {
    const {id}= req.params

    if(isNaN(id) && USE_SQL) {
        return res.status(404).send({mensaje: 'Error en la solicitud, el ID debe ser un número'})
    }

    try {
        const alumnoEliminado = await eliminarAlumnoService(id)

        if(!alumnoEliminado) {
            return res.status(404).send({mensaje: `No se encotró ningún alumno con ID ${id}`})
        }

        res.status(200).send({mensaje: 'El alumno ha sido eliminado correctamente', Alumno: alumnoEliminado})
    } catch (error) {
        console.error(error)
        res.status(500).send({mensaje: 'Error al eliminar el alumno'})
    }
}
export const actualizarAlumnoController = async (req, res) => {
    const {id} = req.params
    const { nombre, materia_id, turno_id, comision, debe_correlativa } = req.body

    if (isNaN(id) && USE_SQL) {res.status(404).send({mensaje: 'Error en la solicitud, el Id debe ser un número'})}

    try {
        const alumnoActualizado = await actualizarAlumnoService(id, { nombre, materia_id, turno_id, comision, debe_correlativa });

        if(!alumnoActualizado) {
            return res.status(404).send({mensaje: `No se encontró el alumno con ID ${id}`})
        }

        res.status(200).send({
            mensaje: `El alumno con ID ${id} ha sido actualizado corerctamente`,
            alumnoActualizado
        })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Error al actualizar el alumno"})
    }
}
export const getAlumnosJoinController = async (req, res) => {
    try {
        let alumnos = await getAlumnosJoinService()
        USE_SQL ? res.send(alumnos) : res.status(404).send(alumnos)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Error al obtener el join de alumnos"})
    }
}