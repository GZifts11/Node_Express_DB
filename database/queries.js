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
    getAlumnoById:`USE IFTS11 SELECT * FROM Alumnos WHERE ID = @ID`,
    eliminarAlumno:`USE IFTS11 DELETE FROM Alumnos WHERE ID = @ID`,
    actualizarAlumno:``,
    getAlumnosJoin:`USE IFTS11 SELECT
    a.ID,
    a.NOMBRE,
    m.NOMBRE as MATERIA,
    t.NOMBRE as TURNO,
    a.COMISION,
    CASE
        WHEN DEBE_CORRELATIVA = 1 THEN 'SI'
        ELSE 'NO'
        END AS DEBE_CORRELATIVA
    FROM Alumnos a
    JOIN
    TURNOS t ON a.turno_id = t.id
    JOIN
    MATERIAS m ON a.materia_id = m.id`
}