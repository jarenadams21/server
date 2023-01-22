// Host Static Files
// Save to Database
// Authentication

// Express server initialization
const { fork } = require('child_process');
const express = require('express')
const app = express();

// Database initalization
const db = require('nedb');

// Server is listening at localhost:3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));

// Statically provide everything in the public folder
app.use(express.static('public'));

// Incoming data is parsed as a JSON
app.use(express.json({limit: '1mb'}));

// Create the db
const database = new db('messages.db');
database.loadDatabase();

// API get request is made to the server
app.get('/api', (request, response) => {
    database.find({}, (error, data) => {
        if (error) {
            response.end();
            return;
        }
        response.json(data); 
    })
     
})

// API post request is made to the server
app.post('/api', (request, response) => {
    console.log('I got a request!');
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});