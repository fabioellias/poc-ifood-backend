var express = require('express');
var app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create',function(req, res){

    // console.log(req.body);
    // console.log(req.body.NomeInformado);
    // res.send(null);
    // return;
    
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

    var command = `INSERT INTO usuarios(
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
        VALUES(
            '${req.body.NomeInformado}',
            '${req.body.Email}',
            '${req.body.Telefone}',
            '${req.body.TipoDoc}',
            '${req.body.NumeroRG}',
            '${req.body.NumeroCPF}',
            '${req.body.DataExp}',
            '${req.body.Nome}',
            '${req.body.DataNasc}',
            '${req.body.ImagemDoc}',
            '${req.body.ScoreFaceMatch}',
            '${req.body.ImagemSelf}'         
        )`;

    //     // query to the database and get the records
        request.query(command, function (err, recordset) {
        
        if (err)
        console.log(err);

        // send records as a response
        res.send(recordset);
            
        });
    });
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