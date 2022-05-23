// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
let numeros = [3, 2, 1, 4, 7];
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
  return array.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}
retornaArrayOrdenado(numeros);

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const retornaPares = array.filter((numero) => {
    return numero % 2 === 0;
  });
  return retornaPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  for (let numero of array) {
    if (numero % 2 === 0) 
      return numero ** 2;
  }
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
  let maior = -Infinity;
  for (let numero of array) {
    if (numero > maior) {
      maior = numero;
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = Math.max(num1, num2)
  let divisaoMaiorMenor = Math.max(num1, num2) %  Math.min(num1,num2) === 0 
  let diferenca = Math.max(num1, num2) - Math.min(num1,num2)

  const objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: divisaoMaiorMenor,
    diferenca: diferenca

  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if( ladoA === ladoB && ladoB === ladoC) {
   return "Equilátero"
} else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
  return "Isósceles"
} else {
  return "Escaleno"
}}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let maior = -Infinity;
  for (let numero of array) {
    if (numero > maior) {
      maior = numero - 1;
    }
  }
  return maior;
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
