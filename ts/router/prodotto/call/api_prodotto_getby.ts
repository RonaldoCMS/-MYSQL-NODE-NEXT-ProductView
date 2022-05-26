import MySQLProdotto from "../../../database/mysql/prodotto/mysql_prodotto";
import { Request, Response } from "express";


async function __api__prodotto_getBy__ (req: Request, res: Response) {
    var query = req.query;
    var connector = new MySQLProdotto()
    if (Object.keys(req.query).length == 1) {
      if (query.nome != null) { 
        let prodotti = await connector.selectByName(req.query.nome as String);
        res.send(prodotti[0]);
        return;
      } else if (query.costo != null) {
        let prodotti = await connector.selectByCosto(
          parseFloat(req.query.costo as string)
        );
        res.send(prodotti);
        return;
      }
    }
    if (Object.keys(req.query).length == 2) {
      if (query.costomin != null && req.query.costomax != null) {
        let min = parseFloat(req.query.costomin as string);
        let max = parseFloat(req.query.costomax as string);
        var prodotti = await connector.selectByRangeCosto(min, max);
        res.send(prodotti);
        return;
      }
    } 
    res.status(400).json({ error: "Query is not valid" });
  }

export default __api__prodotto_getBy__;