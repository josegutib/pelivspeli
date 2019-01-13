const { query } = require('../db/conexiondb')

function post(req, res){
  const idPelicula = req.body.idPelicula
  query(`insert into voto(competencia_id, pelicula_id, votos) values (${req.params.id}, ${idPelicula}, 1) on duplicate key update votos=votos+1`)
  .then(() => {
    res.json({
      resultado: "ok"
    })
  })
}

module.exports = {
  post
}
