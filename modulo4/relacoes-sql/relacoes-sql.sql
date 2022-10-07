-- Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)
SET SQL_SAFE_UPDATES = 0;


CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    sinopse VARCHAR (255) NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT);

-- Criando filmes
INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
  "002",
  "Matrix",
  "Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos",
  "2021-12-09", 
  8
);

INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
  "003",
  "O Alto da Compadecida",
  "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens.",
  "2000-09-10", 
  10
);

INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
  "004",
  "Beleza Oculta",
  "Em Beleza Oculta, após uma tragédia pessoal, Howard (Will Smith) entra em depressão e passa a escrever cartas para a Morte, o Tempo e o Amor - algo que preocupa seus amigos.",
  "2017-01-26", 
  9
);

INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
  "005",
  "Os Oito Odiados",
  "Durante uma nevasca, o carrasco John Ruth (Kurt Russell) está transportando uma prisioneira, a famosa Daisy Domergue (Jennifer Jason Leigh), que ele espera trocar por grande quantia de dinheiro.",
  "2016-01-07", 
  6
);

-- Retorne o id, título e avaliação a partir de um id específico
SELECT id, titulo, avaliacao FROM Filmes WHERE id = "002";

-- Retorne um filme a partir de um nome específico;
SELECT id, titulo, sinopse, data_lancamento, avaliacao FROM Filmes WHERE titulo = "Os Oito Odiados";

--  Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, titulo, sinopse, avaliacao FROM Filmes WHERE avaliacao >= 7;

--  Retorna um filme cujo título contenha a palavra vida (Alterei a palavra para Beleza)
SELECT id, titulo, sinopse, data_lancamento, avaliacao FROM Filmes WHERE titulo LIKE "%Beleza%";

-- Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
SELECT id, titulo, sinopse, data_lancamento, avaliacao FROM Filmes WHERE titulo LIKE "%computador%" OR sinopse LIKE "%computador%";

-- Procure por todos os filmes que já tenham lançado
SELECT * FROM Filmes WHERE data_lancamento > "2016-01-02";

--  Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
SELECT * FROM Filmes WHERE data_lancamento > "2020-01-02" AND (titulo LIKE "%computador%" OR sinopse LIKE "%computador%") AND avaliacao > 7;


SELECT * from Filmes;

-- --------
-- Exercicio 1
-- a) Foreign Key (FK), ou ainda chave externa é a chave que permite a referência a registros oriundos de outras tabelas.
-- b)

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    Filmes_id VARCHAR(255),
    FOREIGN KEY (Filmes_id) REFERENCES Filmes(id)
);

SELECT * from Rating;


INSERT INTO Rating (id, comment, rate, Filmes_id)
VALUES(
  "MA",
  "Filme muito bom",
  8,
  "002"
);

INSERT INTO Rating (id, comment, rate, Filmes_id)
VALUES(
  "AC",
  "Classico do nordeste",
  10,
  "003"
);
INSERT INTO Rating (id, comment, rate, Filmes_id)
VALUES(
  "BO",
  "linda história",
  7,
  "004"
);

INSERT INTO Rating (id, comment, rate, Filmes_id)
VALUES(
  "OO",
  "Tarantino nunca erra",
  10,
  "005"
);


-- c) Não consegue inserir avaliação em um filme que não existe. Pois a Foreign Key não permite.
INSERT INTO Rating (id, comment, rate, Filmes_id)
VALUES(
  "qO",
  "aysaygsa",
  10,
  "007"
);



-- d)
ALTER TABLE Filmes
DROP COLUMN avaliacao;
-- e) 
DELETE FROM Filmes WHERE id = "002";
-- Não é possível deletar pois está vinculada a outra tabela.


-- Exercicio 2

-- a) É uma planilha que une as tabelas pelas chaves de filmes e atores.. Pelo id.
CREATE TABLE MovieCast (
		filmes_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (Filmes_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- b
INSERT INTO MovieCast(Filmes_id, actor_id)
VALUES(
		"005",
    "012"
);

-- c)

-- Dá falha. Pois não encontra referencia na id passada.

-- d) Não consegue deletar o ator, pois está relacionado à tabela do elenco.

-- Exercicio 3

SELECT * FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.Filmes_id;




-- a) Ele faz o comparativo entre as colunas para evitar repetição.

-- b) 

SELECT Filmes.id, Filmes.titulo, Rating.rate FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.Filmes_id;




