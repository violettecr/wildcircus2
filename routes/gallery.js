/* eslint-disable camelcase, no-unused-vars */
const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const connection = require('../conf');

//= ====================-_MULTER_-=========================
// Upload de fichiers
const storage = multer.diskStorage({
  destination(req, file, cb) {
    // si le dossier existe pas le créer
    cb(null, './public/uploads');
  },
  filename(req, file, cb) {
    cb(null, `picture${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });
//= ======================-_FS_-==========================
// Vérifie si dossiers Public et Uploads existent,
// sinon création des dossiers /public et /uploads

// Directory -public-
fs.access('./public', (error) => {
  if (error) {
    console.log('Directory /public not yet exists.');
    fs.mkdir('./public', (err) => {
      if (err) {
        console.log('Directory /public already exists');
      } else {
        console.log('Directory /public successfully created.');
      }
    });
  } else {
    console.log('Directory /public exists.');
  }
});
// Directory -uploads-
fs.access('./public/uploads', (error) => {
  if (error) {
    console.log('Directory /uploads not yet exists.');
    fs.mkdir('./public/uploads', (err) => {
      if (err) {
        console.log('Directory /uploads already exists');
      } else {
        console.log('Directory /uploads successfully created.');
      }
    });
  } else {
    console.log('Directory /public/uploads exists.');
  }
});

//= ====================-_ROUTES_-=======================
const router = express.Router();
router.get('/', (req, res) => {
  connection.query('SELECT * FROM gallery', (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(400).send('Erreur lors de la récupération des images');
      throw err;
    } else {
      res.send(results);
    }
  });
});
router.get('/:id', (req, res) => {
  connection.query(`SELECT * FROM gallery
  WHERE id = ${req.params.id}`, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(400).send("Erreur lors de la récupération de l'image");
      throw err;
    } else {
      res.send(results);
    }
  });
});

router.post('/', upload.single('picture'), (req, res) => {
  let file;
  if (req.file !== undefined) {
    file = req.file.filename;
  } else {
    file = '';
  }
  if (req.body) {
    const {
      category_id, title, date, picture_name
    } = req.body;
    if (!category_id || !title || !date || !picture_name) {
      res.sendStatus(400);
    } else {
      connection.query(`INSERT INTO gallery (category_id, title, date, picture_name)
        VALUES (?, ?, ?, ?)`,
      [category_id, title, date, picture_name],
      (err) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }
  } else {
    res.sendStatus(400);
  }
});
module.exports = router;
