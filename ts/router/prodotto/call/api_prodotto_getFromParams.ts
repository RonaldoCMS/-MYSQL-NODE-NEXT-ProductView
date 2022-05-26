import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { Request, Response } from "express";
import Prodotto from "../../../model/prodotto";
import { paramsCallback } from "../api_prodotto";

async function __api__prodotto__getFromParams__ (req: Request, res: Response) {
    var prodotto_mysql = new MySQLProdotto();
    paramsCallback(req, res, async (value: any) =>{
      try {
        var prodotti = await prodotto_mysql.selectById(parseInt(value));
  
        var prodotto = prodotti[0];
        if(!prodotto) {
          res.status(404).json({ error: "prodotto not found" });
        }
        res.json(prodotto);
      } catch (error) {
        res.status(400).json({ error: (error as Error).message });
      }
    }); 
}

export default __api__prodotto__getFromParams__;