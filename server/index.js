const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//configuration de la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jaolamasiny10',
    database: 'idluxe_db'
});
//Chemin pour recuperer le contenu par page
app.get('/api/content', (req, res) => {
    db.query("SELECT * FROM site_content", (err, results) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  });
//Chemin pour maj le contenu
app.post('/api/content/update', (req, res) => {
    const { id, newContent } = req.body;
    db.query("UPDATE site_content SET content = ? WHERE id = ?", [newContent, id], (err, result) => {
        if (err) res.status(500).send(err);
        else res.send("Contenu mis à jour avec succès !");
    });
});

app.listen(5000, () => {
    console.log("Serveur démarré sur le port 5000");
});