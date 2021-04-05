const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose')

const {libro}   = require('./db/models/libro.model')

app.use(bodyParser.json())

/* Lista de libros */
app.get('/libro', (req, res) => {
    //retorna un array de todos los libros dentro de la base de datos
    //res.send('Funciona!')
    libro.find({}).then((libros) => {
        res.send(libros)
    }).catch((e) =>{
        res.send(e)
    })
})

app.post('/libro',(req, res) => {
    const _id = req.body._id
    const nombre = req.body.nombre
    const newLibro = new libro({
        _id,
        nombre
    })
    newLibro.save().then(result =>{
        res.send(result)
    })
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})