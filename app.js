// Conectamos a MongoDB usando Mongoose
const connectDB = require('./config/database.js')
connectDB()

// Traemos express
const express = require('express')
const app = express()

// Middleware para recibir JSON
app.use(express.json())

//importar rutas
const trailerRoutes = require('./routes/trailerRoutes.js');
app.use('/trailers', trailerRoutes)

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Trailers')
})


//configuracion del puerto
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})