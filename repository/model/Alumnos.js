//const mongoose = require('mongoose')

import mongoose from 'mongoose';

const alumnoSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        materia_id: {
            type: String,
            required: true
        },
        turno_id: {
            type: Number,
            required: true
        },
        comision: {
            type: String,
            required: true
        },
        debe_correlativa: {
            type: Boolean,
            required: true
        }
    }
)

export const Alumnos = mongoose.model('Alumnos', alumnoSchema);

//export default User;

//module.exports = mongoose.model('Alumnos', alumnoSchema)