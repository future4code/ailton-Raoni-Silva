```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
    let contagem = 0
    for (const numero of arrayDeNumeros) {
       if (numero === numeroEscolhido) {
           contagem = contagem + 1
           
       }
      }
      if (contagem === 0) {
          return "Número não encontrado"
      } 
        return `O número ${numeroEscolhido} aparece ${contagem}x`
      }