import styles from "../../../styles/Jogo.module.css"
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link";
import { useRouter } from "next/router"
import PortaModel from "../../../model/Porta";

export default function Jogo() {

    const router = useRouter()

    const [valido, setValido] = useState<boolean>(false);
    const [portas, setPortas] = useState<PortaModel[]>([]);

    useEffect(() => {

        if (!router.query.portas || !router.query.temPresente){
            return
        }

        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;

        const qtdPortasValidas = portas >= 3 && portas <= 100;
        const temPresenteValido = temPresente >= 1 && temPresente <= portas;

        setValido(qtdPortasValidas && temPresenteValido);
        
    }, [portas, router.query.portas, router.query.temPresente])

    useEffect(() => {

        if (!router.query.portas || !router.query.temPresente){
            return
        }

        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;
        setPortas(criarPortas(portas, temPresente))
    }, [router.query.portas, router.query.temPresente])

    // + converte a string para valor numerico
    // +router.query.portas;
    // +router.query.termPresente;

    function renderizarPortas() {
        return portas.map((porta:PortaModel) => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
        })
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                { valido ? 
                    renderizarPortas() :
                    <h2>Valores inválidos</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}