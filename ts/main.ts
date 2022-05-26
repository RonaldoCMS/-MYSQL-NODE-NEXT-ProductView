import bodyParser from "body-parser";
import methodOverride from "method-override";
import express from "express";
import prodottoAPI from "./router/prodotto/api_prodotto";
import 'dotenv/config'

const app = express()

app.use(bodyParser.json());
app.use(methodOverride());
app.use('/uploads', express.static(process.cwd() + '/uploads'))

app.use(function(err:any, req:any, res:any, next:any) {
  console.error(err.stack);
  res.status(500).json({error: "error body"});
});

app.use('/prodotto', prodottoAPI);
app.set('json spaces', 3)
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`))

export default app;