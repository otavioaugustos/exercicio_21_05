
const express = require('express');

const app = express()

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (request, response) => {
    let resultado = [0, 1];
    
    for(let cont = 2; cont <= 20; cont++){
        resultado.push(resultado[cont - 1] + resultado[cont - 2]);
        }
        response.render('home', {valor : resultado});
});
    app.listen(3000, () => {
        console.log('servidor na porta 3000');
    });





