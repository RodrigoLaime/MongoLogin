const Schema = require("../model/schema");

const getUserById = async (req, res) => {
  const { id } = req.params;

  if (id.length === 24) {
    Schema.findById(id).then((usuario) => {
      if (!usuario) {
        return res.json({
          message: "Usuario no encontrado"
        })
      } else {
        //retornar el dato segun el id
        const { _id, contraseña, __v, ...resto } = usuario._doc
        res.json(resto);
      }
    });
  } else {
    //si el id es diferente de 24 caracteres
    res.json({ mensaje: 'Estas enviando una contraseña incorrecta' })
  }
}

module.exports = getUserById;