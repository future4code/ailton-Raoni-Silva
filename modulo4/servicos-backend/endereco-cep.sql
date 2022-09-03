CREATE TABLE endereco_user(
CEP varchar(255) not null,
logradouro varchar(255) not null,
numero int(255) not null,
complemento varchar(255),
bairro varchar(255) not null,
cidade varchar(255) not null,
estado varchar(255) not null
);
DROP TABLE endereco_user;
SELECT * FROM endereco_user;