var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));

var porta = process.env.PORT || 8000;
app.listen(porta, function () {
    console.log("Doce e Festa rodando na porta " + porta);
});