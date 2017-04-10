const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.listen(3000, () => {
    console.log('server started on port: '+ port);
});
