// Exercicio 1

function formatText() {
    const data:string = "19/04/1989"
    const nome: string = "Raoni"
    const dia = data.slice(0, 2);
    const mes = data.slice(3, 5);
    const ano = data.slice(6, 10);
    
    return `Olá me chamo ${nome}, nasci no dia ${dia} do ${mes} do ano de ${ano}`;
    
  }
  
  console.log(formatText());
  





