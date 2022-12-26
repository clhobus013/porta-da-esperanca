import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link";
import { useRouter } from "next/router"
import PortaModel from "../../../model/Porta";

export default function jogo() {

    const router = useRouter()

    const [portas, setPortas] = useState<PortaModel[]>([]);

    useEffect(()=> {
        const portas = +router?.query.portas;
        const temPresente = +router?.query.temPresente;
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    // + converte a string para valor numerico
    // +router.query.portas;
    // +router.query.termPresente;

    function renderizarPortas() {
        return portas.map(porta => {
        return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
        })
    }

    console.log(criarPortas(3,2));

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}