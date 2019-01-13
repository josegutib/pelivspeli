const { query } = require('../db/conexiondb')

function get(req, res){
  query('select * from director')
  .then( resultados => {
    res.json(resultados)
  })
}

module.exports = {
  get
}
