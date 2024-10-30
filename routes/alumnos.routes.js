import { Router } from "express";
import { actualizarAlumnoController, agregarAlumnosController, eliminarAlumnoController, getAlumnoByIdController, getAlumnosController, getAlumnosJoinController } from "../controller/alumnos.controller.js";

const router = Router()

router.get('/alumnos', getAlumnosController)
router.post('/alumnos', agregarAlumnosController)
router.get('/alumnos/:id', getAlumnoByIdController)
router.delete('/alumnos/:id', eliminarAlumnoController)
router.put('/alumnos/:id', actualizarAlumnoController)
router.get('/alumnosjoin', getAlumnosJoinController)

export default router