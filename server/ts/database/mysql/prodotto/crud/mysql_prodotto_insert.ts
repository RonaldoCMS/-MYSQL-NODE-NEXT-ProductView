import Prodotto from "../../../../model/prodotto";
import __prodotto__queryBoolean__ from "./mysql_prodotto_queryboolean";

function __prodotto__insert__(e: Prodotto): Promise<boolean> {
  return __prodotto__queryBoolean__(
    "INSERT INTO prodotto (nome, img, costo, sconto) VALUES (?,?,?,?)",
    [e.nome, e.img, e.costo, e.sconto]
  );
}

export default __prodotto__insert__;
