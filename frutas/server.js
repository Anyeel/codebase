const express = require("express");
const sqlite3 = require('sqlite3');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = 3000;

const table = "fruits";

const frutasdb = new sqlite3.Database('fruit-database.db', (err) => {
  if (err) {
      console.error('Error al conectar con la base de datos:', err.message);
  } else {
      console.log('Conectado a la base de datos SQLite.');
  }
});

app.get("/frutas", (req, res) => {
  
  const consulta = `SELECT * FROM ${table}`
  
  frutasdb.all(consulta, [], (err, rows) => {
    if (err) {
        console.error('Error al consultar la tabla:', err.message);
        res.status(500).json({ error: 'Error al obtener los datos de la tabla' });
    } else {
        console.log('Datos de la tabla frutas:', rows);
        res.json(rows);
    }
  });

});

app.post("/frutas", (req, res) => {
    const fruta = req.body.fruta;
    console.log("Esto ha llegado desde el cliente:", fruta);
    //frutas.push(fruta);
    res.json(frutas);
});

app.listen(port, () => console.log('Servidor funcionando en el puerto ' + port));
