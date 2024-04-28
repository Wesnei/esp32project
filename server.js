const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
app.use(bodyParser.json())

const api = require('./rotas')
app.use('/api', api)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))

    const path = require('path');
    app.get('*', (req, res) => {  // Se agregó la función de callback correctamente
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')); // Se corrigió la coma
    });
}

const PORT = process.env.PORT
app.listen(PORT)
