const trailer = require('../models/trailer');

const gettrailer = (req, res) => {
    console.log ('gettrailer');
    const atributo = { ...req.query }
    const query = req.query || {};
    // Si no hay género especificado, obtendremos todas las películas
    trailer.find(query)
        .then(trailer => res.json(trailer))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}
// Función para filtrar trailers por género
const gettrailersByGen = (req, res) => {
    console.log('lalalala1')
    const genre = req.query.genero;
    trailer.find({ genero: genre })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}
const gettrailersByActor = (req, res) => {
    console.log('lalalala2')
    const actur = req.query.actor;
    trailer.find({ reparto: actur })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
    
}
const createtrailer = (req, res) => {
    const newTrailer = new trailer(req.body);
    newTrailer.save()
        .then(trailer => res.status(201).json(trailer))
        .catch(error => res.status(400).json({ message: 'Error al agregar el trailer', error }));
};
const gettrailersByxTemp = (req, res) => {
    console.log('lalalala3')
    const minSeasons = req.query.minTemporadas;
    trailer.find({ temporadas: { $gte: minSeasons } })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
};
const deletetrailer = (req, res) => {
    console.log('lalalala4')
    trailer.findByIdAndDelete(req.params.id)
        .then(trailer => {
            if (!trailer) return res.status(404).json({ message: 'Trailer no encontrado' });
            res.status(200).json({ message: 'Trailer eliminado correctamente' });
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
};
const gettrailerById = (req, res) => {
    console.log('lalalala5')
    const { id } = req.params;
    trailer.findById(id)
        .then(trailer => {
            if (!trailer) return res.status(404).json({ message: 'Trailer no encontrado' });
            res.json(trailer);
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
};
module.exports = { 
    gettrailer,
    gettrailersByGen,
    gettrailersByActor,
    createtrailer,
    gettrailersByxTemp,
    deletetrailer,
    gettrailerById
}