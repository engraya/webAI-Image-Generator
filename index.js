const express = require('express');
const path = require('path');
const app = new express();
const expressEjsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
require('dotenv').config()

const generateImageRouter = require('./routes/imageGeneratorRoutes')


// MiddleWARES
app.set("views", path.join(__dirname, "views"));
app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended : false}));


// Routes
app.use('/imageAi', generateImageRouter);


const serverPort = process.env.PORT || 5000;

app.listen(serverPort, () => {
    console.log(`Server is Listening on Port ${serverPort}........`)
} )