import { FieldInfo, MysqlError } from "mysql";
import Prodotto from "../../../../model/prodotto";
import connection from "../../mysql";

function __prodotto__select__(): Promise<Prodotto[]> {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM prodotto",
      (
        error: MysqlError | null,
        results: Prodotto[],
        fields: FieldInfo[] | undefined
      ) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
}

export default __prodotto__select__;
