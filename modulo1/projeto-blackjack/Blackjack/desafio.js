/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */




    let inicioJogo = confirm(`Bem-vinde ao jogo de Blackjack! \n Quer iniciar uma nova rodada?`);
    if (inicioJogo === true) {

        

      let cartaUsuario1 = comprarCarta();
      let cartaUsuario2 = comprarCarta();
      let cartaComputador1 = comprarCarta();
      let cartaComputador2 = comprarCarta();

   }else if (cartaUsuario1 === 'A' && cartaUsuario2 === 'A') || (cartaComputador1 === 'A' && cartaComputador2 ==='A');
   f

 
         

      let impressoUsuario = cartaUsuario1.texto;
      let impressoUsuario2 = cartaUsuario2.texto;
      let impressoComputador = cartaComputador1.texto;
      let impressoComputador2 = cartaComputador2.texto;

      
      confirm(`Suas cartas são ${impressoUsuario} ${impressoUsuario2}. A carta do computador é ${impressoComputador}. \n Deseja comprar mais uma carta?`)
    //   let pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
    //   let pontosComputador = cartaComputador1.valor + cartaComputador2.valor;
    
   
    
    //   console.log(
    //     `Usuário - cartas: ${impressoUsuario} ${impressoUsuario2}  - pontuação ${pontosUsuario}`
    //   );
    //   console.log(
    //     `Computador - cartas: ${impressoComputador} ${impressoComputador2}  - pontuação ${pontosComputador}`
    //   );
    
    //   if (pontosUsuario > pontosComputador) {
    //     console.log("Você ganhou!");
    //   } else if (pontosUsuario < pontosComputador) {
    //     console.log("Você perdeu!");
    //   } else if (
    //     (pontosUsuario === pontosComputador) ===
    //     console.log("Você empatou!")
    //   );
    // } else {
    //   console.log("O jogo acabou!");
    