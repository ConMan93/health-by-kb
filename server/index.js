require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const ac = require('./controllers/authController');
const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
}));

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
    console.log('Database is connected');
})

// Authorization endpoints
app.post('/auth/login', ac.login);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})