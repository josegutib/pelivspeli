const { query } = require('../db/conexiondb')

function get(req, res){
  query('select * from actor')
  .then( resultados => {
    res.json(resultados)
  })
}

module.exports = {
  get
}
