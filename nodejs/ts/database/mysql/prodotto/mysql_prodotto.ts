
import prodotto from "../../../model/prodotto";
import { ProdottoDao } from "../../dao/prodotto_dao";
import __prodotto__delete__ from "./crud/mysql_prodotto_delete";
import __prodotto__insert__ from "./crud/mysql_prodotto_insert";
import __prodotto__select__ from "./crud/mysql_prodotto_select";
import __prodotto__select__byCosto__ from "./crud/mysql_prodotto_selectbycosto";
import __prodotto__select__ByID__ from "./crud/mysql_prodotto_selectbyid";
import __prodotto__select__byName__ from "./crud/mysql_prodotto_selectbyname";
import __prodotto__select__byRangeCosto__ from "./crud/mysql_prodotto_selectByRangeCosto";
import __prodotto__update__ from "./crud/mysql_prodotto_update";

export default class MySQLProdotto implements ProdottoDao {

  insert(e: prodotto): Promise<boolean> {
    return __prodotto__insert__(e);
  }
  update(e: prodotto): Promise<boolean> {
    return __prodotto__update__(e);
  }
  delete(id: number): Promise<boolean> {
   return __prodotto__delete__(id);
  }
  select(): Promise<prodotto[]> {
    return __prodotto__select__();
  }
  selectById(id: number): Promise<prodotto[]> {
    return __prodotto__select__ByID__(id);
  }
  selectByName(name: String): Promise<prodotto[]> {
   return __prodotto__select__byName__(name);
  }
  selectByCosto(costo: number): Promise<prodotto[]> {
    return __prodotto__select__byCosto__(costo);
  }
  selectByRangeCosto(min: number, max: number): Promise<prodotto[]> {
   return __prodotto__select__byRangeCosto__(min, max);
  }

}
