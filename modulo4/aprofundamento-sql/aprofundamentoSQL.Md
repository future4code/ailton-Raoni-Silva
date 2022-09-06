```

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

```