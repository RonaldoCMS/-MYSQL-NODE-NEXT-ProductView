import IProdotto from "../interface/interface_prodotto";

class Prodotto {
    id: number;
    nome: string;
    img: string;
    costo: number;
    sconto?: number;

    constructor(e: IProdotto) {
        this.id = e.id;
        this.nome = e.nome;
        this.img = e.img;
        this.costo = e.costo;
        this.sconto = e.sconto;
    }
}

export default Prodotto;