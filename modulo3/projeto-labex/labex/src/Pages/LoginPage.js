import React from "react";
import { Inputs } from "../Style/Style";

export default function LoginPage() {
  return (
    <div>
      <hr />
      <h2>Login</h2>
      <input placeholder="E-mail"></input>
      <input placeholder="Senha"></input>
      <button>Voltar</button> <button>Entrar</button>
    </div>
  );
}
