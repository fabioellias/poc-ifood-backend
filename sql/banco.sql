USE ifood;


create table usuarios(
 NomeInformado nvarchar(150),
    Email nvarchar(150),
    Telefone nvarchar(15),
    TipoDoc nvarchar(15),
    NumeroRG nvarchar(20),
    NumeroCPF  nvarchar(11),
    DataExp nvarchar(20),
    Nome nvarchar(150),
    DataNasc nvarchar(20),
    ImagemDoc nvarchar(max),
    ScoreFaceMatch  nvarchar(5),
    ImagemSelf nvarchar(max)
	);

--drop table usuarios;

SELECT * FROM dbo.usuarios;

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