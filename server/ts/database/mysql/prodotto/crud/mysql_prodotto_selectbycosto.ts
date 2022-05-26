import Prodotto from "../../../../model/prodotto";
import __prodotto__select__byValue__ from "./mysql_prodotto_selectby";

function __prodotto__select__byCosto__(costo: number): Promise<Prodotto[]> {
  return __prodotto__select__byValue__("costo = ?", costo) as Promise<Prodotto[]>;
}

export default __prodotto__select__byCosto__;
