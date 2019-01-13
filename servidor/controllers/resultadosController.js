const { query } = require('../db/conexiondb')

function get(req, res){
  const idCompetencia = req.params.id
  const nombreCompetenciaPromise = query(`select nombre from competencia where id =${idCompetencia}`)
  const resultadosPromise = query(`select pelicula.titulo, pelicula.poster, voto.pelicula_id, voto.votos from voto inner join pelicula on voto.pelicula_id = pelicula.id where competencia_id =${idCompetencia}`)
  Promise.all([
    nombreCompetenciaPromise,
    resultadosPromise
  ])
  .then( results => {
    const nombreCompetencia = results[0]
    const resultados = results[1]
    res.json({
      competencia: nombreCompetencia[0].nombre,
      resultados: resultados
    })
  })
}

module.exports = {
  get
}
