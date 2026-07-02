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
/**
 * =========================================================================
 * GESTION DU CONTENU DU SITE (DASHBOARD & FRONTEND)
 * =========================================================================
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
// 2. Route pour récupérer le contenu d'une page spécifique (pour les pages)
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
*/
// pour le formulaire de contact
const nodemailer = require('nodemailer');

// Configuration du transporteur SMTP (à adapter avec vos infos réelles)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  transporter.verify((err, success) => {
    if (err) {
      console.error('Erreur SMTP :', err);
    } else {
      console.log('Serveur SMTP connecté.');
    }
  });
// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
    // 1. Récupération du nouveau champ 'phone'
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Champs requis manquants.' });
    }
    try {
      const { name, email, phone, company, position, sector, subject, message } = req.body;
      // 2. Mise à jour de la requête SQL
      const query = 'INSERT INTO contact_messages (name, email, phone, company, position, sector, subject, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
      await db.promise().query(query, [
        name, 
        email, 
        phone || '', 
        company || '', 
        position || '', 
        sector || '', 
        subject || '', 
        message
      ]);
      // 3. Ajout du téléphone dans l'email reçu
      await transporter.sendMail({
        from: `"IDLUXE Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Nouvelle demande : ${subject || 'Sans sujet'}`,
        text: `
        Nouvelle demande de contact reçue :

        Nom : ${name}
        Email : ${email}
        Téléphone : ${phone || 'Non renseigné'}
        Société : ${company || 'Non renseigné'}
        Fonction : ${position || 'Non renseigné'}
        Secteur : ${sector || 'Non renseigné'}
        Sujet : ${subject || 'Sans sujet'}
        
        Message :
        ${message}
      `
    });
    res.status(200).json({ success: true, message: 'Message enregistré.' });
  } catch (err) {
    console.error('Erreur :', err);
    res.status(500).json({ error: "Erreur lors de l'envoi." });
  }
});

// Route pour le formulaire de DONATION
app.post('/api/donation', async (req, res) => {
  console.log("Données reçues dans le serveur :", req.body);
  // Récupération des données envoyées par le formulaire React
  const { name, email, profil, phone, expedition, paiement, contributions, message } = req.body;
  // Validation côté serveur
  if (!name || !email || contributions.length === 0) {
    return res.status(400).json({ error: 'Veuillez remplir le nom, email et choisir au moins une contribution.' });
  }
  try {
    // 1. Enregistrement dans la base de données
    //convertir le tableau de contributions en une chaîne de caractères séparée par des virgules
    const contributionsString = contributions.join(', ');
    const query = 'INSERT INTO donations (nom_prenom, email, profil, telephone, expedition, paiement, contributions, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    await db.promise().query(query, [
      name,
      email,
      profil || 'Non renseigné',
      phone || 'Non renseigné',
      expedition || 'Non renseigné',
      paiement || 'Non renseigné',
      contributionsString,
      message || ''
    ]);
    // Réponse immédiate au client (le chargement s'arrête)
  res.status(200).json({ success: true });
    // 2. Envoi de l'email à l'ASSOCIATION (pour information)
    await transporter.sendMail({
      from: `"IDLUXE Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Email de l'association
      replyTo: email, // Permet de répondre directement au donateur
      subject: `Nouvelle intention de don de : ${name}`,
      text: `
        Une nouvelle intention de don vient d'être enregistrée.
        Informations du donateur :
        - Nom : ${name}
        - Email : ${email}
        - Profil : ${profil || 'Non renseigné'}
        - Téléphone : ${phone || 'Non renseigné'}

        Détails du don :
        - Mode d'expédition : ${expedition || 'Non renseigné'}
        - Mode de paiement : ${paiement || 'Non renseigné'}
        - Contributions : ${contributionsString}
        - Message : ${message || 'Aucun message'}

        L'équipe technique.
      `
    });
    // 3. Envoi de l'email de CONFIRMATION au DONATEUR
    await transporter.sendMail({
      from: `"Brand New Madagascar" <${process.env.EMAIL_USER}>`,
      to: email, // Email du donateur
      subject: "Confirmation de votre intention de don",
      text: `Bonjour ${name},

        Un grand merci pour votre générosité. Nous avons bien reçu votre intention de don pour : ${contributionsString}.

        Un membre de notre équipe prendra contact avec vous très prochainement pour organiser la récupération de vos dons ou finaliser le paiement.

        Ensemble, construisons un avenir meilleur.

      Cordialement,
      L'équipe Brand New Madagascar`
    });

    res.status(200).json({ success: true, message: 'Don enregistré et emails envoyés avec succès.' });

  } catch (err) {
    console.error('Erreur lors du traitement du don :', err);
    res.status(500).json({ error: "Une erreur est survenue lors de l'enregistrement de votre don." });
  }
});
// Lancement du serveur (ceci était déjà dans votre code)
app.listen(5000, () => {
    console.log("Serveur démarré sur le port 5000");
});