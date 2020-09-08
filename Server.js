var express = require('express');
var app = express();

app.put('/create',function(req, res){

    
    var sql = require("mssql");

    // // config for your database
    var config = {
        user: 'sa',
        password: '<SA@sa1234>',
        server: 'localhost', 
        database: 'ifood' 
    };

    // // connect to your database
sql.connect(config, function (err) {
    
    if (err) 
        console.log(err);

    //     // create Request object
    var request = new sql.Request();

/*
    insert into usuarios (
        NomeInformado,
        Email,
        Telefone,
        TipoDoc,
        NumeroRG,
        NumeroCPF,
        DataExp,
        Nome,
        DataNasc,
        ImagemDoc,
        ScoreFaceMatch,
        ImagemSelf
        )
        values(
        'Lula',
        'lula@lula.com',
        '21976897865',
        'RG',
        '12345',
        null,
        '01/01/2000',
        'Luis Inacio da Silva',
        '01/08/1940',
        null,
        '40%',
        null
        )
*/


    //     // query to the database and get the records
    request.query('insert ....', function (err, recordset) {
    
    if (err)
     console.log(err)

    // send records as a response
    res.send(recordset);

    

});

app.get('/list', function(req, res){

var sql = require("mssql");

    // // config for your database
var config = {
    user: 'sa',
    password: '<SA@sa1234>',
    server: 'localhost', 
    database: 'ifood' 
};

    // // connect to your database
sql.connect(config, function (err) {
    
    if (err) 
        console.log(err);
    //     // create Request object
    var request = new sql.Request();
    //     // query to the database and get the records
    request.query('select * from usuarios', function (err, recordset) {
    
    if (err)
     console.log(err)

    // send records as a response
    res.send(recordset);
            
    });
});

});
app.get('/', function (req, res) {
    

    res.sendFile(__dirname + '/src/index.html');
    
    
    
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});