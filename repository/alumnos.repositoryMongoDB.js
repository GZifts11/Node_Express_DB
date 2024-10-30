import { Alumnos } from './model/Alumnos.js'
import { conectarMongoDB } from '../database/MongoDB/db.js';

conectarMongoDB();

export const getAlumnosRepository = async () => {
    try {
        const alumnos = await Alumnos.find();

        console.log(alumnos)

        return alumnos

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const agregarAlumnoRepository = async (nuevoAlumno) => {
    try {
        const alumnoNuevo = new Alumnos(nuevoAlumno)
        await alumnoNuevo.save();
        console.log(alumnoNuevo)

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error al agregar alumno')
    }
}


export const getAlumnoByIdRepository = async (id) => { 
    try {
        const alumnoEncontrado = await Alumnos.findById(id);
        if(alumnoEncontrado.length == 0) {
            console.log("Alumno no encontrado");
        }else {
            return alumnoEncontrado
        }
        
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error al obtener alumno')
    }
}
export const eliminarAlumnoRepository = async (id) => {

    try {
        const alumnoEliminado = await Alumnos.findByIdAndDelete(id)
        if(!alumnoEliminado) {
            console.log('Alumno no encontrado');
        }else {
            console.log('Se eliminó el siguiente alumno de la lista')
            return alumnoEliminado
        }
    } catch (error) {
        console.error('Error en el repositorio', error)
        throw new Error('Error al eliminar el alumno de la base de datos')
    }
}
export const actualizarAlumnoRepository = async (id, alumno) => {
    try {
        const alumnoActualizado = await Alumnos.findByIdAndUpdate(id, alumno, { new: true })

        if(!alumnoActualizado) {
            console.log('Alumno no encontrado');
            return null
        }else {
            return alumnoActualizado
        }
    } catch (error) {
        console.error('Error en el repositorio: ', error)
        throw new Error("Error al actualziar el alumno");
    }
}
export const getAlumnosJoinRepository = async () => {
    return "Este método se encuentra discontinuado en esta versión de la API"
}