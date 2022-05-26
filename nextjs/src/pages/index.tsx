import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Ciao from "./ciao";
import Prodotto from "../models/model_prodotto";
import { Button, Container, Grid, TextField } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'nome', headerName: 'nome', width: 130 },
  { field: 'img', headerName: 'img', width: 130 },
  {
    field: 'costo',
    headerName: 'costo',
    type: 'number',
    width: 90,
  },
  {
    field: 'sconto',
    headerName: 'sconto',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.sconto}%`,
  },
];

const rows: Prodotto[] = [
  new Prodotto({id: 1, nome: 'Snow',       img: 'Jon',      costo: 35,  sconto: 35 }),
  new Prodotto({id: 2, nome: 'Lannister',  img: 'Cersei',   costo: 42,  sconto: 42 }),
  new Prodotto({id: 3, nome: 'Lannister',  img: 'Jaime',    costo: 45,  sconto: 45 }),
  new Prodotto({id: 4, nome: 'Stark',      img: 'Arya',     costo: 16,  sconto: 16 }),
  new Prodotto({id: 5, nome: 'Targaryen',  img: 'Daenerys', costo: 22,  sconto: 22 }),
  new Prodotto({id: 6, nome: 'Melisandre', img: 'Rosa',     costo: 15,  sconto: 15 }),
  new Prodotto({id: 7, nome: 'Clifford',   img: 'Ferrara',  costo: 44,  sconto: 44 }),
  new Prodotto({id: 8, nome: 'Frances',    img: 'Rossini',  costo: 36,  sconto: 36 }),
  new Prodotto({id: 9, nome: 'Roxie',      img: 'Harvey',   costo: 65,  sconto: 65 }),
];


const Home: NextPage = () => {

  const [rows, updateRow] = useState<Prodotto[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/prodotto")
    .then(response => response.json())
    .then(data => {
       updateRow(data as Prodotto[]);
    });
  }, [rows]);
  return (
    <div style={{  padding: "5%"}}>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <Button fullWidth={true} variant="contained">
              Aggiungi
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth={true} variant="contained">
              Elimina
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth={true} variant="contained">
              Modifica
            </Button>
          </Grid>
        </Grid>
     <div>
        <div style={{margin: '8px 0'}}>
          <TextField id="standard-basic" label="Cerca per nome" variant="standard" />
      </div>
      <div style={{ height: 400, width: '100%' }}>
       {(rows.length != 0) ?  <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        /> : <div       style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}> <CircularProgress/> </div>
      }
      </div>
     </div>
    </div>
  );
};

export default Home;
