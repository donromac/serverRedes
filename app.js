const express = require('express')
const app = express()

/* Lista de libros */
app.get('/', (req, res) => {
    //retorna un array de todos los libros dentro de la base de datos
    res.send('Funciona!')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})