import { actualizarAlumnoRepository, agregarAlumnoRepository, eliminarAlumnoRepository, getAlumnoByIdRepository, getAlumnosJoinRepository, getAlumnosRepository } from "../repository/alumnos.repository.js"

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
export const getAlumnoByIdService = async (id) => {
    try {
        const alumnoEncontrado = await getAlumnoByIdRepository(id)
        return alumnoEncontrado;
    } catch (error) {
        console.error('Error en el service', error)
        throw new Error('Error al obtener un alumno')
    }
}
export const eliminarAlumnoService = async (id) => {
    try {
        const alumnoEliminado = await eliminarAlumnoRepository(id)
    return alumnoEliminado

    } catch (error) {
        console.error('Error en el service', error)
        throw new Error('Error al eliminar el alumno')
    }
}
export const actualizarAlumnoService = async (id, alumno) => {
    try {
        const alumnoActualizado = await actualizarAlumnoRepository(id, alumno);
        return alumnoActualizado
    } catch (error) {
        console.error('Error en el service', error)
        throw new Error('Error al actualzar el alumno')
    }
}
export const getAlumnosJoinService = async () => {
    try {
        return getAlumnosJoinRepository()
    } catch {
        console.error('Error en el service ', error)
        throw new Error("Error al obtener el join de alumnos");
        
    }
}