import { FieldInfo, MysqlError } from "mysql";
import Prodotto from "../../../../model/prodotto";
import connection from "../../mysql";

function __prodotto__select__byValue__(key: String, value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM prodotto where " + key,
        value,
        (
          error: MysqlError | null,
          results: Prodotto[],
          fields: FieldInfo[] | undefined
        ) => {
          if (error) {
            console.log(error);
            reject(error);
          }
          console.log(results);
          resolve(results);
        }
      );
    });
}

    export default __prodotto__select__byValue__;