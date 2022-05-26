import Prodotto from "../../model/prodotto";
import Dao from "./dao";

export abstract class ProdottoDao implements Dao<Prodotto> {
    abstract insert(e: Prodotto): Promise<boolean>;
    abstract update(e: Prodotto): Promise<boolean>;
    abstract delete(id: number):Promise< boolean>;
    abstract select(): Promise<Prodotto[]>;
    abstract selectById(id: number): Promise<Prodotto[]>;
    abstract selectByName(name: String): Promise<Prodotto[]>;
    abstract selectByCosto(costo: number): Promise<Prodotto[]>;
    abstract selectByRangeCosto(min: number, max:number) : Promise<Prodotto[]>
}