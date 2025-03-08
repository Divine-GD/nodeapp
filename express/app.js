const express = require('express')
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000

const pubfile = (dir) => {
   return express.static(__dirname + dir);
}
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCoDate', () =>{
    return new Date().getFullYear() ;
});  


hbs.registerHelper('screamIt', (str) =>{
    return str.toUpperCase();
});

app.use(pubfile('/pubfile'));
app.set('view engine' , 'hbs');


app.get('/', (req, res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home Page - Express',
        pageName: 'Home Page',
        welcomeMsg: 'Welcome to the first page of my website, am happy to be here, honestly'
    });
})

app.get('/about', (req, res)=>{
    res.render('about.hbs', {
        pageName: 'About Us'
    });
})


app.get('/home', (req, res)=>{
    res.send('hello');
})


app.listen(port, ()=>{
   console.log(`Server running ${port}`)
})