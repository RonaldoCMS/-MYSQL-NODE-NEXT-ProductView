import Prodotto from "../../../../model/prodotto";
import __prodotto__queryBoolean__ from "./mysql_prodotto_queryboolean";

function __prodotto__update__(e: Prodotto): Promise<boolean> {
    var options = [];
    var sql = "UPDATE prodotto SET ";

    if (e.nome != null) {
      sql += "nome = ?, ";
      options.push(e.nome);
    }
    if (e.img != null) {
      sql += "img = ?, ";
      options.push(e.img);
    }
    if (e.costo != null) {
      sql += "costo = ?, ";
      options.push(e.costo);
    }
    if (e.sconto != null) {
      sql += "sconto = ?, ";
      options.push(e.sconto);
    }
    sql = sql.slice(0, -2);
    sql += " WHERE id = ?";
    options.push(e.id);

    return __prodotto__queryBoolean__(sql, options);
  }

  export default __prodotto__update__;