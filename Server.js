var express = require('express');
var app = express();

app.get('/list', function(req, res){

    let pessoas = [];
    let person = {
    NomeInformado : 'Lula',
    Email : 'lula@lula.com',
    Telefone: '21976897865',
    TipoDoc: 'RG',
    NumeroRG: '12345',
    NumeroCPF : null,
    DataExp: '01/01/2000',
    Nome: 'Luis Inacio da Silva',
    DataNasc : '01/08/1940',
    ImagemDoc: null,
    ScoreFaceMatch : '40%',
    ImagemSelf: null};
    pessoas.push(person);

    let person2 = {
        NomeInformado : 'Lula2',
        Email : 'lula@lula.com',
        Telefone: '21976897865',
        TipoDoc: 'RG',
        NumeroRG: '12345',
        NumeroCPF : null,
        DataExp: '01/01/2000',
        Nome: 'Luis Inacio da Silva',
        DataNasc : '01/08/1940',
        ImagemDoc: null,
        ScoreFaceMatch : '40%',
        ImagemSelf: null};
        pessoas.push(person2);

    res.send(pessoas);

});
app.get('/', function (req, res) {
    

    res.sendFile(__dirname + '/src/index.html');
    
    
    // var sql = require("mssql");

    // // config for your database
    // var config = {
    //     user: 'sa',
    //     password: 'mypassword',
    //     server: 'localhost', 
    //     database: 'SchoolDB' 
    // };

    // // connect to your database
    // sql.connect(config, function (err) {
    
    //     if (err) console.log(err);

    //     // create Request object
    //     var request = new sql.Request();
           
    //     // query to the database and get the records
    //     request.query('select * from Student', function (err, recordset) {
            
    //         if (err) console.log(err)

    //         // send records as a response
    //         res.send(recordset);
            
    //     });
    // });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});