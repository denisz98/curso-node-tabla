const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;


//Handlebars
app. set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Contenido estatico
app.use(express.static('public'));




app.get('/',  (req, res)=> {
    res.render('home',{titulo:'Curso de Node '})
});

app.get('/generic',  (req, res)=> {
    res.render('generic')
});

app.get('/elements',  (req, res)=> {
    res.render('elements')
});




app.get('*', function (req, res) {
    res.send('Error 404')
});


app.listen(port,()=>{
    console.log(`ejemplo de aplicacion usando http://localhost:${port}`)
})