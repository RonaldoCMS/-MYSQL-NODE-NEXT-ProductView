import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { Request, Response } from "express";
import Prodotto from "../../../model/prodotto";
import { imgToUrl, paramsIsNotAccettable } from "../api_prodotto";

async function __api__prodotto__put (req: Request, res: Response) {
  var data = JSON.parse(req.body.data);
  console.log("IMG ->" +  req.file?.originalname);
    try {
      if (data.id == null) {
        res.status(400).json({ error: "id not exists" });
        return;
      }
      if(paramsIsNotAccettable(data)) {
        res.status(400).json({ error: "parameters not valid" });
        return;
      }
      if (
        req.body.nome == null &&
        req.file == null &&
        req.body.costo == null
      ) {
        res.status(400).json({ error: "nome, img or costo aren't present." });
        return;
      }

      var connector = new MySQLProdotto();
      var prodotto = data as Prodotto;
      if(req.file != null) {
        prodotto.img = req.file!.originalname;
        prodotto.img = imgToUrl(prodotto.img!);
      }
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