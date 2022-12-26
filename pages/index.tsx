import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/Porta";

export default function Home() {

  return (
    <div style={{display: "flex"}}>
      <h1>Formulário de início</h1>
    </div>
  )
}
