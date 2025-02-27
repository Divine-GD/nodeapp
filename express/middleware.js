const express = require('express');
const app = express();
const port = '3000';
const hbs = require('hbs');
app.set('view engine', 'hbs');
const fs = require('fs');

app.use(express.static(__dirname + '/pubfile'));
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('screamIt', (str) => {
    if (!str) return;
    return str.toUpperCase();
});
hbs.registerHelper('getCoDate', ()=> {
    return new Date().getFullYear();
});

 
app.use((req, res, next) => {
    var data = req.url + " | " + req.ip + " | " + req.method + "\n";
    console.log(data);
    fs.appendFileSync('data-obj/data.gaa', data, 'utf-8');
    next();
});
 


app.get('/', (req, res) => {
    res.render('home.hbs', {
        welcomeMsg : 'Hello and welcome to my website is goo to have you here',
        pageTitle: 'Welcome - Home Page',
        pageName: 'Home page'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        welcomeMsg : 'Hello and welcome to my website is goo to have you here',
        pageTitle: 'Welcome - Home Page',
        pageName: 'Home page'
    });
});


app.get('/home', (req, res) => {
    res.redirect('/');
});


app.use((req, res) => {
    res.status(404).render('404.hbs', {
        welcomeMsg : 'Hello and welcome to my website is goo to have you here',
        pageTitle: 'Welcome - Home Page',
        pageName: 'Home page'
    });
});



app.listen(port, ()=> {
    console.log('Server Have Started at Port ' + port);
})