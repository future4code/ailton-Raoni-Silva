import React, { Component } from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import FotoUsuario from "./img/raoni.jpeg";
import CardPequeno from "./components/CardPequeno/CardPequeno";




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={FotoUsuario}
          nome="Raoni Lôbo"
          descricao="Oi, eu sou o Raoni. Sou aluno da Labenu. Estudo de maneira integral o curso de Full Stack, vou formar no mês de Outubro e estou curtindo muito a programação. Venho da 
          área de Marketing e Design."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/7709/7709967.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1654630074~hmac=01bc580d461a0847029ac0af1da725cf"
          campo="Email: "
          descricao="raonilobo@hotmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
          campo="Endereço: "
          descricao="Avenida Sossego - 1000"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
