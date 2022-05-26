import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { Request, Response } from "express";
import Prodotto from "../../../model/prodotto";
import { paramsIsNotAccettable } from "../api_prodotto";

async function __api__prodotto__post (req: Request, res: Response) {
    var connector = new MySQLProdotto();
    if(paramsIsNotAccettable(req.body)) {
      res.status(400).json({ error: "parameters not valid" });
      return
    }

    var prodotto = req.body as Prodotto;
    try {
      var execute = await connector.insert(prodotto);
      if (execute) {
        res.json({ error: null });
      } else {
        res.status(400).json({ error: "Generic Error" });
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

export default __api__prodotto__post;