const mongoose = require('mongoose')

const TrailerSchema = new mongoose.Schema({
    titulo: String,
    categoria: String,
    genero: [String],
    reparto: [String],
    resumen: String,
    trailer: String
})

const trailer = mongoose.model('trailer', TrailerSchema)

module.exports = trailer

