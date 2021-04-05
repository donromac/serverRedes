const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/ventas',{ useNewUrlParser: true}).then(() => {
    console.log('Conectado a la base de datos correctamente')
}).catch((e) =>{
    console.log('Ocurrio un error al intentar conectarse a la base de datos')
    console.log(e)
})

//para prevenir warnings
mongoose.set('useCreateIndex',true)
mongoose.set('useFindAndModify',false)

module.exports = {
    mongoose
}