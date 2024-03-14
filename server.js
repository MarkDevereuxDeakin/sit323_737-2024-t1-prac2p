const express = require('express');
const app = express();
const port = 8080;

//Serves the index.html file as a simple webpage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Microservice listening at http://localhost:${port}`);    
});