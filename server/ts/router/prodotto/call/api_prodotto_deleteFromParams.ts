import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { Request, Response } from "express";
import Prodotto from "../../../model/prodotto";
import { paramsCallback } from "../api_prodotto";

async function __api__prodotto_deleteFromParams (req: Request, res: Response) {
    var connector = new MySQLProdotto();
    paramsCallback(req, res, async (value: any) =>{
      var execute = await connector.delete(parseInt(value));
      if (execute) {
        res.json({ error: null });
        
      } else {
        res.json({ error: "Prodotto already deleted" });
      }
    });
  }

export default __api__prodotto_deleteFromParams;