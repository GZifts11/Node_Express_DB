import { getConnection, sql, queries } from '../database/export.js'

export const getAlumnosRepository = async () => {
    const pool = await getConnection();

    try {
        const resultado = await pool.request().query(queries.getAlumnos);

        console.table(resultado.recordset)

        return resultado

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}
export const agregarAlumnoRepository = async (nuevoAlumno) => {
    const { nombre, materia_id, turno_id, comision, debe_correlativa } = nuevoAlumno;
    const pool = await getConnection();

    try {

        const resultado = await pool.request()
            .input('nombre', sql.NVarChar, nombre)
            .input('materia_id', sql.Int, materia_id)
            .input('turno_id', sql.Int, turno_id)
            .input('comision', sql.Char, comision)
            .input('debe_correlativa', sql.Bit, debe_correlativa)
            .query(queries.agregarAlumnos);

        const alumnoNuevo = { nombre, materia_id, turno_id, comision, debe_correlativa }

        console.table(alumnoNuevo)

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error al agregar alumno')
    } finally {
        pool.close()
    }

}
export const getAlumnoByIdRepository = async (id) => { }
export const eliminarAlumnoRepository = async (id) => { }
export const actualizarAlumnoRepository = async (id, alumno) => { }
export const getAlumnosJoinRepository = async () => { }