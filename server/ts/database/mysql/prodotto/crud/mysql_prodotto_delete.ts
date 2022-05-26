import __prodotto__queryBoolean__ from "./mysql_prodotto_queryboolean"

 function __prodotto__delete__(id: number): Promise<boolean> {
    return __prodotto__queryBoolean__("DELETE FROM prodotto where id = ?", [id]);
}

export default __prodotto__delete__;


