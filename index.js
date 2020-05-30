const express = require('express');

const hbs = require ('hbs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index',{
        autor: "Jesus Alberto Jacquez Fabela",
        year: new Date().getFullYear(),
        title: "Inicio"
    });
});
app.get('/diego', (req, res)=>{
    res.render('velazquez',{
        autor: "Jesus Alberto Jacquez Fabela",
        year: new Date().getFullYear(),
        title: "Diego Velázquez"
    });
});
app.get('/leonardo', (req, res)=>{
    res.render('daVinci',{
        autor: "Jesus Alberto Jacquez Fabela",
        year: new Date().getFullYear(),
        title: "Leonardo da Vinci"
    });
});
app.get('/vincent', (req, res)=>{
    res.render('vanGogh',{
        autor: "Jesus Alberto Jacquez Fabela",
        year: new Date().getFullYear(),
        title: "Vincent van Gogh"
    });
});
app.get('/pablo', (req, res)=>{
    res.render('picasso',{
        autor: "Jesus Alberto Jacquez Fabela",
        year: new Date().getFullYear(),
        title: "Pablo Picasso"
    });
});


app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});