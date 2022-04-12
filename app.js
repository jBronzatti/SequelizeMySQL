const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require("sequelize");
const bodyparser = require('body-parser');
const Post=require('./models/Post');


app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
    
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.get('/', function(req,res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        console.log(posts)
        res.render('home', {posts: posts})
    })
});
app.get('/cad', function(req,res){
        res.render('formulario')
});
app.post('/add', function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.send("Post criado com sucesso!")
    }).catch(function(erro){
        res.send("Houve um erro: "+erro)
    });
});
app.listen(8081, function(){
    console.log("Servidor rodando!")
});