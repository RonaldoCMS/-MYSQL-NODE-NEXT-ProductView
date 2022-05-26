import { MysqlError, OkPacket, QueryOptions } from "mysql";
import connection from "../../mysql";

function __prodotto__queryBoolean__(
  sql: string | QueryOptions,
  column: any[]
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    connection.query(
      sql,
      column,
      (error: MysqlError | null, results: OkPacket) => {
        if (error) {
          reject(error.sqlMessage);
        } else {
            console.log(results);
          if (results.affectedRows == 0) resolve(false);
          else resolve(true);
        }
      }
    );
  });
}

export default __prodotto__queryBoolean__;
