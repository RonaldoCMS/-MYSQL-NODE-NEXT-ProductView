import express, { NextFunction, Request, Response } from "express";
import multer from "multer";
var router = express.Router();
import __api__prodotto_deleteFromParams from "./call/api_prodotto_deleteFromParams";
import __api__prodotto_getAll__ from "./call/api_prodotto_getAll";
import __api__prodotto_getBy__ from "./call/api_prodotto_getby";
import __api__prodotto__getFromParams__ from "./call/api_prodotto_getFromParams";
import __api__prodotto__post from "./call/api_prodotto_post";
import __api__prodotto__put from "./call/api_prodotto_put";
var bodyParser = require("body-parser");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'./uploads')
  },
  filename: function (req, file, cb) {
    console.log(req);
    var spliter = file.originalname.split(".");
    var last = spliter.length - 1;
    cb(null, `${Date.now()}.${spliter[last]}`);
  }
})

const upload = multer({ storage: storage, dest: 'uploads/' })

router.delete("/:id",  async (req: Request, res: Response) => __api__prodotto_deleteFromParams(req, res));
router.get("/:id", (req: Request, res: Response) => __api__prodotto__getFromParams__(req, res));
router.put("/", bodyParser.json(), upload.single('img'), async (req: Request, res: Response) => __api__prodotto__put(req, res));
router.post("/", bodyParser.json(), upload.single('img'), async (req: Request, res: Response) => __api__prodotto__post(req, res));
router.get("/", async (req: Request, res: Response, next: NextFunction) => __api__prodotto_getAll__(req, res, next));
router.get("/", async (req : Request, res : Response) => __api__prodotto_getBy__(req, res));


export function paramsIsNotAccettable(query: any): boolean {
  console.log(typeof query);
  for (const property in query) {
    if(property != "nome" && property != 'costo' && property != 'sconto' && property != 'id') {
      console.log(property);
      return true;
    }
  }
  return false;
}

export const idIsUndefined = (prodotto: any, res: Response) => {
  console.log(prodotto)
  if(!prodotto?.id) {
    return true;
  }
  return false;
}

export async function paramsCallback(req: Request, res: Response, callback:any) {
  let id = req.params.id;
  if(idIsUndefined(req.params, res)) {
    res.status(404).json({ error: "id not valid" });
    return;
  }
  callback(parseInt(id));
}

export function imgToUrl(img: String) {
  return `${process.env.HOST}:${process.env.PORT}/uploads/${img}`
}

export default router;
