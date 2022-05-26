import { FieldInfo, MysqlError } from "mysql";
import Prodotto from "../../../../model/prodotto";
import connection from "../../mysql";

function __prodotto__select__byRangeCosto__(min: number, max: number): Promise<Prodotto[]> {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM prodotto where costo >= ? and costo <= ?",
        [min, max],
        (
          error: MysqlError | null,
          results: Prodotto[],
          fields: FieldInfo[] | undefined
        ) => {
          if (error) {
            console.log(error);
            reject(error);
          }
          resolve(results);
        }
      );
    });
  }

  export default __prodotto__select__byRangeCosto__;