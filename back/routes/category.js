const express = require('express');
const connection = require('../conf');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM category', (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).send('Erreur lors de la récupération des spectacles');
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
