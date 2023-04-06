const bcrypt = require('bcrypt');
const Schema = require('../model/schema');

const register = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  //consulta al schema 
  Schema.findOne({ correo }).then((email) => {
    if (email) {
      return res.json({
        message: 'Ya existe un usuario con ese correo'
      });
    } else if (!nombre || !correo) {
      return res.json({
        message: 'Falta el nombre o el Correo o la Contraseña'
      })
    } else {
      //encriptar contraseña si todos los datos estan completos
      bcrypt.hash(contraseña, 10, (error, data) => {
        if (error) {
          res.json({ error })
        } else {
          //creamos un nuevo usuario
          const nuevoUsuario = new Schema({
            nombre,
            correo,
            contraseña: data
          });

          nuevoUsuario.save()
            .then((usuario) => {
              res.json({
                message: 'Usuario creado',
                usuario
              })
            })
            .catch(error => console.error(error))
        }
      });
    }
  })
}

module.exports = register;