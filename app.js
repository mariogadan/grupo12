const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;
const session = require('express-session');
const methodOverride = require('method-override');
const error404 = require('./src/middlewares/error404Mid');
const usuarioLogueadoMid = require("./src/middlewares/usuarioLogueadoMid")
const mainRoutes = require("./src/routes/main.routes");
const usuarioRoutes = require("./src/routes/usuario.routes");


app.use(express.static(path.join(__dirname , './public')))
app.use(express.urlencoded({ extended: false })); // nos permite capturar la info que se envia en un formulario a traves de POST
app.use(session( {secret: "Este es mi secreto",
resave: false,
saveUninitialized: false}));   // para definir que vas a utilizar información en sesión

app.use(usuarioLogueadoMid);
 
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set("views", "./src/views");

app.listen(port, function(){
    console.log('Servidor activo');
});

app.use("/", mainRoutes);

app.use("/producto", mainRoutes);

app.use("/usuario", usuarioRoutes);

//app.use("/cursos", usuarioRoutes);

app.use(error404); 
