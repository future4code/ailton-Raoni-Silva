// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Qual a altura um retângulo ?");
  const largura = prompt("Qual a largura de um retângulo ?");
  const areaDoRetangulo = altura * largura;
  console.log(areaDoRetangulo);
  return areaDoRetangulo;
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"));
  const AnoNascimento = Number(prompt("Qual ano você nasceu?"));
  const idade = anoAtual - AnoNascimento;
  console.log(idade);
  return idade;
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome?");
  const idade = prompt("Qual sua idade?");
  const email = prompt("Qual o seu Email?");
  const textoMensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`;

  console.log(textoMensagem);
  return textoMensagem;
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita?");
  const cor2 = prompt("Qual a sua segunda cor favorita?");
  const cor3 = prompt("Qual a sua terceira cor favorita?");

  const array = [];
  array.push(cor1);
  array.push(cor2);
  array.push(cor3);
  console.log(array);

  return array;
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const stringMaiuscula = string.toUpperCase();
  console.log(stringMaiuscula);
  return stringMaiuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosVendas = custo / valorIngresso;
  return ingressosVendas;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoString = string1.length === string2.length;

  return tamanhoString;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const elemento = array[0];
  return elemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const ultimoElemento = array[array.length - 1];

  return ultimoElemento;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  // let a = 10
  // let b = 25
  // let c;
  // c = a
  // a = b
  // b = c

  // console.log("O novo valor de a é", a) // O novo valor de a é 25
  // console.log("O novo valor de b é", b) // O novo valor de b é 10

  let inicio = array[0];
  let fim = array[array.length - 1];
  array[0] = fim;
  array[array.length - 1] = inicio;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const stringIguais = string1.toUpperCase() === string2.toUpperCase();

  return stringIguais;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
