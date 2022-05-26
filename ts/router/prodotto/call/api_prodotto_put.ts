import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { Request, Response } from "express";
import Prodotto from "../../../model/prodotto";
import { paramsIsNotAccettable } from "../api_prodotto";

async function __api__prodotto__put (req: Request, res: Response) {
    try {
      if (req.body.id == null) {
        res.status(400).json({ error: "id not exists" });
        return;
      }
      if(paramsIsNotAccettable(req.body)) {
        console.log("Hello");
        res.status(400).json({ error: "parameters not valid" });
        return;
      }
      if (
        req.body.nome == null &&
        req.body.img == null &&
        req.body.costo == null
      ) {
        res.status(400).json({ error: "nome, img or costo aren't present." });
        return;
      }

      var connector = new MySQLProdotto();
      var prodotto = req.body as Prodotto;
      var execute = await connector.update(prodotto);
      if (execute) {
        res.json({ error: null });
      } else {
        res.status(400).json({ error: "generic error" });
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  export default __api__prodotto__put;