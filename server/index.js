require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const path = require('path');
const ac = require('./controllers/authController');
const pc = require('./controllers/postController');
const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

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
app.get('/auth/currentuser', ac.currentUser);

// Blog post endpoints
app.post('/post/create', pc.createNewPost);
app.get('/post/exercises', pc.getExercisePosts);
app.get(`/post/recipes`, pc.getRecipePosts);
app.delete('/post/:id/:page', pc.deletePost);
app.get('/post/blog', pc.getBlogPosts);
app.get('/post/motivation', pc.getMotivationPosts);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})