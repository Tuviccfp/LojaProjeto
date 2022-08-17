const express = require('express');
const app = express();
 

//View engine EJS
app.set('view engine', 'ejs');

//Utilização de arquivos estáticos
app.use(express.static('public'));

/*Rotas de acesso*/

app.get('/cadastro', (req, res) =>{
    res.render()
})