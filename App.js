const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./routes/index')
/* const db = require('./database/db') */
/* const controllers = require('./routes/index'); */

const app = express();

app.use(cors());
app.use(express.json());

/* app.get('/user/:id', controllers.getUserById);
app.get('/register', controllers.register);
app.get('/login', controllers.login);
 */
app.use(route)
const PORT = 4000;

const MONGO_URL = 'mongodb+srv://hp-envy:q1kMHqGtFxS57YUI@cluster0.kpp1aja.mongodb.net/Correo';

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('Coneccion exito a la basde de datos mongoDB');
    app.listen(PORT, () => {
      console.log('corriendo en el puerto ' + PORT);
    })
  })
/* app.listen(PORT, () => {
  console.log('corriendo en el puerto ', PORT);
  db();
});
 */