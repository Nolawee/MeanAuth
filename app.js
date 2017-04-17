const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Conected to database: ' + config.database)
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err)
});

const app = express();

const users = require('./routes/users');

const port = 3000;

// CORS allows us to make requests to api from different domain name
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

// Body Parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Users Routes
app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(3000, () => {
    console.log('server started on port: '+ port);
});
