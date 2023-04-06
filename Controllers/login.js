const Schema = require("../model/schema");
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { correo, contraseña } = req.body;

  Schema.findOne({ correo }).then((usuario) => {
    if (!usuario) {
      return res.json({
        menssaje: "Usuarion no encontrado"
      });
    }
    //compara la contraseña
    bcrypt.compare(contraseña, usuario.contraseña)
      .then((data) => {
        if (data) {
          const { id, nombre } = usuario

          res.json({
            message: 'Usuario Logueado correctamente',
            usuario: {
              id,
              nombre
            }
          });
        } else {
          return res.json({
            message: 'Contraseña incorrecta'
          })
        }
      })
  })
}

module.exports = login;