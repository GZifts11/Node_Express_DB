export default {
    getAlumnos:`USE IFTS11 SELECT * FROM Alumnos`,
    agregarAlumnos:`USE IFTS11 INSERT INTO Alumnos
    (nombre,
    materia_id,
    turno_id,
    comision,
    debe_correlativa) 
    VALUES (
    @nombre,
    @materia_id,
    @turno_id,
    @comision,
    @debe_correlativa);`,
    getAlumnoById:``,
    eliminarAlumno:``,
    actualizarAlumno:``,
    getAlumnosJoin:``
}