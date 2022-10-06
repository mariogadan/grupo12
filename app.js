const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000
const mainRoutes = require("./src/routes/main.routes");
const usuarioRoutes = require("./src/routes/usuario.routes");
const methodOverride = require('method-override');
const error404 = require('./src/middlewares/error404Mid')




app.use(express.static(path.join(__dirname , './public')))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set("views", "./src/views");

app.listen(port, function(){
    console.log('Servidor activo')
});

app.use("/", mainRoutes);

app.use("/producto", mainRoutes);

app.use("/usuario", usuarioRoutes);

app.use("/homebeta", usuarioRoutes);

app.use(error404)


