// Créer un fichier conf.js, et y coller le contenu
// de ce fichier en complétant les champs vides.
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: '', // à compléter
  password: '', // à compléter
  database: 'wildcircus2',
});

module.exports = connection;
