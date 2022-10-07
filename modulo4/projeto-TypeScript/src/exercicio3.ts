

// Exercicio 3

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


type Film = {
    nome: string,
    ano: number,
    genero: GENERO,
    nota?: number
}

function buscaFilme(
    nome: string,
    ano: number,
    genero: GENERO,
    nota?:number
): Film {
    const Filme: Film = {
        nome,
        ano,
        genero
    }

    if (nota) {
        Filme.nota = nota
    }

    return Filme
}

console.table(buscaFilme("Matrix", 1999, GENERO.ACAO, 10))
console.table(buscaFilme("Matrix", 1999, GENERO.ACAO))