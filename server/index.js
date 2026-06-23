const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuration de la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jaolamasiny10',
    database: 'idluxe_db'
});

// Connexion à la BDD
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

// 1. Route pour récupérer TOUT le contenu (pour le menu du dashboard)
app.get('/api/content', (req, res) => {
    const query = "SELECT * FROM site_content";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Erreur SELECT ALL:", err);
            return res.status(500).json({ error: "Erreur serveur lors de la récupération" });
        }
        res.json(results);
    });
});

// 2. Route pour récupérer le contenu d'une page spécifique (pour tes pages React)
app.get('/api/content/page/:pageName', (req, res) => {
    const pageName = req.params.pageName;
    const query = "SELECT * FROM site_content WHERE page_name = ?";
    
    db.query(query, [pageName], (err, results) => {
        if (err) {
            console.error("Erreur SELECT PAGE:", err);
            return res.status(500).json({ error: "Erreur serveur lors de la récupération de la page" });
        }
        res.json(results);
    });
});

// 3. Route pour mettre à jour un contenu spécifique
app.post('/api/content/update', (req, res) => {
    const { id, newContent } = req.body;
    
    if (!id || newContent === undefined) {
        return res.status(400).json({ error: "Données manquantes (id ou newContent)" });
    }

    const query = "UPDATE site_content SET content = ? WHERE id = ?";
    db.query(query, [newContent, id], (err, result) => {
        if (err) {
            console.error("Erreur UPDATE:", err);
            return res.status(500).json({ error: "Erreur lors de la mise à jour" });
        }
        console.log(`Contenu ${id} mis à jour avec succès.`);
        res.send("Succès");
    });
});

// Lancement du serveur
app.listen(5000, () => {
    console.log("Serveur démarré sur le port 5000");
});