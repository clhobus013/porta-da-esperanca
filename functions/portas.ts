import PortaModel from "../model/Porta";

export function criarPortas(qtd: number, portaComPresente: number): PortaModel[] {
    return Array.from({length: qtd}, (_, i) => {
        const numero = i + 1;
        const temPresente = numero === portaComPresente;
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], modificada: PortaModel):PortaModel[] {
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === modificada.numero;

        if (igualModificada){
            return modificada;
        } else {
            return modificada.aberta ? portaAtual : portaAtual.desselecionar();
        }
    })
}