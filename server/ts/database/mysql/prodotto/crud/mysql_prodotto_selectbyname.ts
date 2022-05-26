import Prodotto from "../../../../model/prodotto";
import __prodotto__select__byValue__ from "./mysql_prodotto_selectby";

function __prodotto__select__byName__(name: String): Promise<Prodotto[]> {
  return __prodotto__select__byValue__("nome = ?", name) as Promise<Prodotto[]>;
}

export default __prodotto__select__byName__;