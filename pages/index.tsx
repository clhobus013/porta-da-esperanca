import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {

  const [ qtdPortas, setQtdPortas] = useState<number>(3);
  const [ comPresente, setComPresente] = useState<number>(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtd portas" value={qtdPortas} onChange={novaQtd => setQtdPortas(novaQtd)}/>
        </Cartao>
      </div>
      <div>
      <Cartao>
          <EntradaNumerica text="Porta com presente" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link passHref href={`/jogo/${qtdPortas}/${comPresente}`} className={styles.link}>
            <h2 style={{margin: 0}}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
