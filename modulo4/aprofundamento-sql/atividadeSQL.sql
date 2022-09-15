CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- mostra informações do servidor que estou usando
SHOW DATABASES;

-- Mostra quantas tabelas tenho criadas, no caso só 1
SHOW TABLES;

-- Mostra todos os campos criados na tabela Actor
DESCRIBE Actor;




INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- Não consigo inserir pois dá erro com ID duplicado
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Patricia Pilar",
  100000,
  "1960-03-12", 
  "female"
);

-- A contagem de colunas não são compatíveis. NOT Null não permite inserir dados incompletos do parâmetro.
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);


-- O campo nome está sem valor e é uma informação obrigatória
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- A data de aniversário tem que ser passada como varchar e está sendo passada como número.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  700000,
  "1978-09-10", 
  "female"
);

-- Escreva uma query que retorne todas as informações das atrizes
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

--  Escreva uma query que retorne o salário do ator com o nome Tony Ramos
SELECT id, name, salary, birth_date, gender from Actor WHERE name = "Tony Ramos";

-- Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
-- Retorna a tabela vazia, pois todos têm gênero definido.
SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "invalid";

-- Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
SELECT id, name, salary from Actor WHERE salary < 500000; 

-- a query não funciona pois o parâmetro é NAME e não NOME.
SELECT id, nome from Actor WHERE id = "002";
-- query corrigida.
SELECT id, name from Actor WHERE id = "002";

-- A query faz a busca na tabela dos itens que correspondem à todas as condicionais.
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- Atores que não começão com A e tem salário maior que R$ 350.000
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

-- Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

-- Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND (salary BETWEEN 350000 AND 900000);



SELECT * from Actor;






-- Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)
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




-- --------------------------------
-- Aprofundamento SQL

SET SQL_SAFE_UPDATES = 0;

-- Exercicio 01 
-- a) Altera tabela, deletando a coluna de salário dos atores.
-- b) Altera o nome da coluna na tabela de GENDER para SEX e aceita até 6 caracters.
-- c) altera a coluna GENDER para aceitar até 255 caracters
-- d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


-- Exercicio 02
-- a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
UPDATE Actor SET name = "Moacyr Franco", birth_date =" 1935-01-28" WHERE id = "003";
-- b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor SET name = UPPER(name) WHERE id = "005";
-- c) Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor SET name = "Lima Duarte", birth_date = "1939-02-10", salary = 900000, gender = "male" WHERE id = "005";
-- d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 
UPDATE Actor SET name = "Lima Duarte", birth_date = "1939-02-10", salary = 900000, gender = "male" WHERE id = "009";
-- atualiza mas não modifica a tabela.

-- Exercicio 03
-- a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro (Moacyr Franco)
DELETE FROM Actor WHERE name = "Moacyr Franco";
-- b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- Exercicio 04
SELECT COUNT(*) as quantidade FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes
SELECT MAX(salary) FROM Actor;

-- b) Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c) Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) as quantidade_atrizes FROM Actor WHERE gender = "female";

-- d) Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;

-- Exercicio 05
-- a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
-- Separa as quantidades nos grupos listados

-- b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor ORDER BY name DESC;

-- c) Faça uma query que retorne todos os atores ordenados pelo salário
SELECT * FROM Actor ORDER BY salary;

-- d) Faça uma query que retorne os atores com os três maiores salarios
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

-- e) Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

-- Exercicio 06
SELECT * from Filmes;
-- a) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.
ALTER TABLE Filmes ADD playing_limit_date DATE;

-- b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.

ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT NOT NULL;

-- c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
UPDATE Filmes SET playing_limit_date = "2021-03-02" WHERE id=001;
UPDATE Filmes SET playing_limit_date = "2022-10-02" WHERE id=005;

-- d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

DELETE FROM Filmes WHERE id = "001";
UPDATE Filmes SET sinopse = "Troca de lugar com esposa" WHERE id = "001";
-- Ele atualiza, mas não renderiza na tabela.




