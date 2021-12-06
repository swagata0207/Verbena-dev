const express = require('express');
const path = require('path');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded({extended: false}));

//EJS CONFIGURATION
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get("/", (req, res) => {
    res.status(200).render('index');
});

app.get("/ourstory", (req, res) => {
    res.status(200).render('ourstory');
});

app.get("/curricullam", (req, res) => {
    res.status(200).render('curricullam');
});

app.get("/gallery", (req,res) => {
    res.status(200).render('gallery');
});

app.get("/stories", (req,res) => {
    res.status(200).render('stories');
});

app.get("/newsandevents", (req,res) => {
    res.status(200).render('news&events');
});

app.get("/contacts", (req,res) => {
    res.status(200).render('contacts');
});

app.listen(port, hostname, () => {
    console.log(`The application started successfully on http://${hostname}:${port}`)
});