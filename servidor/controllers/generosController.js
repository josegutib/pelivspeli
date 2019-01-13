const { query } = require('../db/conexiondb')

function get(req, res){
  query('select * from genero')
  .then( resultados => {
    res.json(resultados)
  })
}

module.exports = {
  get
}
