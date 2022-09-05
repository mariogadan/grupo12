const express = require('express')
const app = express()
const path = require('path')

app.listen(process.env.PORT || 3030, function(){
    console.log('Servidor activo')
})

app.use(express.static(path.join(__dirname , './public')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname , './views/home.html'))
})

app.get('/producto', function(req, res){
    res.sendFile(path.join(__dirname , './views/producto.html'))
})

app.get('/carrito', function(req, res){
    res.sendFile(path.join(__dirname , './views/carrito.html'))
})

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname , './views/login.html'))
})

app.get('/registro', function(req, res){
    res.sendFile(path.join(__dirname , './views/registro.html'))
})