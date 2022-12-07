const express = require("express"); 
const server = express();
const path = require("path");
const cors = require('cors')
const port = process.env.PORT || 3000     
const start = () => {console.log("ACTIVE http://localhost:3000/")};
const cookie = require ("cookie-parser") 
const session = require('express-session');
server.listen(port,start())



//URLencode({}) Para que me pueda llegar la información desde el formulario al req.body
server.use(cors())
server.use (express.urlencoded({extended:false}));


// RUTAS
const artistasRoutes = require('./routes/artistasRoutes');
const cancionesRoutes = require('./routes/cancionesRoutes');
const generosRoutes = require('./routes/generosRoutes');
const indexRouter = require('./routes/index');
const albumesRoutes = require('./routes/albumesRoutes');

server.use('/', indexRouter);
server.use(artistasRoutes);
server.use(cancionesRoutes);
server.use(generosRoutes);
server.use(albumesRoutes);


// view engines
server.set ("views", path.resolve(__dirname, "./views"));
server.set ("view engine","ejs");