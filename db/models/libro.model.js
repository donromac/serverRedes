const mongoose = require('mongoose')

const libroSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },    
    nombre: {
        type: String,
        required: true
    }
})
var libro = mongoose.model('libro', libroSchema)

module.exports = {
    libro
}