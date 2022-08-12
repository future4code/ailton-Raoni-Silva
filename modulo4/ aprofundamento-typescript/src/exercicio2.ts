// Exercicio 2
// a)
type Amostra = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[] ) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Amostra = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b) Number [], any.

// c)


