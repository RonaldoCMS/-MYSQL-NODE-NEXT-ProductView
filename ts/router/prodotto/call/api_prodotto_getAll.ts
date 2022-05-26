import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { Request, Response } from "express";

async function __api__prodotto_getAll__(
    connector: MySQLProdotto,
    req: Request,
    res: Response
  ) {
    try {
      let prodotti = await connector.select();
      res.send(prodotti);
    } catch (error) {
      res.status(400).end("Errore");
    }
  }

  export default __api__prodotto_getAll__;