const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const imageRouter = require('./routes/image');
const advertRouter = require('./routes/gallery');
const categoryRouter = require('./routes/category');
const showRouter = require('./routes/shows');

const app = express();
const port = 8000;

// permet à un utilisateur d'accéder à des ressources d'un
// serveur situé sur une autre origine que le site courant.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/image', imageRouter);
app.use('/gallery', advertRouter);
app.use('/category', categoryRouter);
app.use('/shows', showRouter);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened ...');
  }
  console.log(`Server is listening on ${port}`);
});
