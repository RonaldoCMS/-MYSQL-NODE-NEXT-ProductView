export default interface IProdotto {
    readonly id: number;
    nome: string;
    img: string;
    costo: number;
    sconto?: number;
}