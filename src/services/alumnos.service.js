import { agregarAlumnoRepository, getAlumnosRepository } from "../repository/alumnos.repository.js"

export const getAlumnosService = async () => {
    try {
        return getAlumnosRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los datos')
    }
}
export const agregarAlumnoService = async (nuevoAlumno) => {
    try {
        const alumnoNuevo = await agregarAlumnoRepository(nuevoAlumno)

        return alumnoNuevo
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al aregegar el alumno')

    }
}
export const getAlumnoByIdService = async (id) => { }
export const eliminarAlumnoService = async (id) => { }
export const actualizarAlumnoService = async (id, alumno) => { }
export const getAlumnosJoinService = async () => { }