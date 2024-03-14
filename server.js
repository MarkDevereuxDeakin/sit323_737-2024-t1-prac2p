// Purpose: This is the main file for the microservice. It serves the index.html file as a simple webpage.

//Imports the express module
const express = require('express');
//Creates an express application
const app = express();
//Sets the port to 8080
const port = 8080;

//Serves the index.html file as a simple webpage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Starts the microservice listening on the assigned port (8080)
app.listen(port, () => {
    console.log(`Microservice listening at http://localhost:${port}`);    
});