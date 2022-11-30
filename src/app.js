const express = require("express"); 
const server = express();

const path = require("path");
const cors = require('cors')
const port = process.env.PORT || 3000     
const start = () => {console.log("ACTIVE http://localhost:3000/")};
const cookie = require ("cookie-parser") 
const session = require('express-session');
server.listen(port,start())


/*
const statics = require("./modules/static")
server.use(statics(join(__dirname,"../public")))
*/




// middleware
server.use(cors())
server.use (express.urlencoded({extended:true}));


// Routes

server.use (require("./routes/index"))//muestra el texto spluty
server.use (require("./routes/artistasRoutes")) //Por le momento muestra el LISTADO de usuarios y funciona bien //tendria que ver el ejs
server.use (require("./routes/cancionesRoutes"))


const artistasApiRoutes = require("./routes/artistasApiRoutes")
server.use("/api", artistasApiRoutes)


// view engines
server.set ("views", path.resolve(__dirname, "./views"));
server.set ("view engine","ejs");











/*const public = path.join(__dirname,"../public")
const static =  express.static(public)
server.use(static)*/


