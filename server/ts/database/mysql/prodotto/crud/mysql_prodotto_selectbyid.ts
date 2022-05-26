import Prodotto from "../../../../model/prodotto";
import __prodotto__select__byValue__ from "./mysql_prodotto_selectby";

function __prodotto__select__ByID__(id: number): Promise<Prodotto[]> {
    if(isNaN(id)) throw new Error("id isn't a number!");
    return __prodotto__select__byValue__("id = ?", id) as Promise<Prodotto[]>;
}

export default __prodotto__select__ByID__;
