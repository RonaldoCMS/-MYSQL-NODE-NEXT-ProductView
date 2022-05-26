import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { NextFunction, Request, Response } from "express";

async function __api__prodotto_getAll__(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    var connector = new MySQLProdotto();
    if (Object.keys(req.query).length != 0) {
      next();
      return;
    }

    try {
      let prodotti = await connector.select();
      res.send(prodotti);
    } catch (error) {
      res.status(400).end("Errore");
    }

  }

  export default __api__prodotto_getAll__;