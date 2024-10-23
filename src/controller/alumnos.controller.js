import { agregarAlumnoService, getAlumnosService } from "../services/alumnos.service.js"


export const getAlumnosController = async (req, res) => {
    try {
        let alumnos = await getAlumnosService()

        alumnos.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(alumnos.recordset)

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
export const getAlumnoByIdController = async (req, res) => { }
export const eliminarAlumnoController = async (req, res) => { }
export const actualizarAlumnoController = async (req, res) => { }
export const getAlumnosJoinController = async (req, res) => { }