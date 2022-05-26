import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { Request, RequestHandler, Response } from "express";
import Prodotto from "../../../model/prodotto";
import { paramsIsNotAccettable } from "../api_prodotto";



async function __api__prodotto__post (req: Request, res: Response) {

    if(req.file == null) {
        res.status(404).json({ error: "img not found" });
    }

    var data = JSON.parse(req.body.data);
    var connector = new MySQLProdotto();
    if(paramsIsNotAccettable(data)) {
      res.status(400).json({ error: "parameters not valid" });
      return
    }

    var prodotto = data as Prodotto;
    prodotto.img = req.file!.filename;
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