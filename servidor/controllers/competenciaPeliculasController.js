const { query } = require('../db/conexiondb')


function get(req, res){
  const competenciaId = req.params.id
  query(`select * from competencia where id=${competenciaId}`)
  .then( results => results[0])
  .then( competencia => {
    let statement = 'select * from pelicula'
    if(competencia.genero){
      statement = statement + ` where genero_id=${competencia.genero}`
    }
    return query(statement)
    .then( peliculas => {
      return {
        peliculas,
        competencia
      }
    })
  }).then( peliculasYCompetencia => {
    const peliculas = peliculasYCompetencia.peliculas
    const competencia = peliculasYCompetencia.competencia
    if(!competencia.actor){
      return peliculasYCompetencia
    }
    return getPeliculasFromActorId(competencia.actor)
    .then( listaPeliculasId => {
      const peliculasFiltradas = peliculas.filter( pelicula => listaPeliculasId.includes(pelicula.id))
      return {
        competencia,
        peliculas:peliculasFiltradas
      }
    })
  })
  .then( peliculasYCompetencia => {
    const peliculas = peliculasYCompetencia.peliculas
    const competencia = peliculasYCompetencia.competencia
    if(!competencia.director){
      return peliculasYCompetencia
    }
    return getPeliculasFromDirectorId(competencia.director)
    .then( listaPeliculasId => {
      const peliculasFiltradas = peliculas.filter( pelicula => listaPeliculasId.includes(pelicula.id))
      return {
        competencia,
        peliculas:peliculasFiltradas
      }
    })
  })
  .then(peliculasYCompetencia => {
    const peliculas = peliculasYCompetencia.peliculas
    const competencia = peliculasYCompetencia.competencia
    const peliculasShuffle = shuffle(peliculas)
    res.json({
      competencia:competencia.nombre,
      peliculas:[
        peliculasShuffle[0],
        peliculasShuffle[1]
      ]
    })
  })
  .catch( error => {
    res.status(404)
    res.json({
      error: 'No existe la competencia ' + competenciaId
    })
  })

}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getPeliculasFromActorId(id){
  return query(`select pelicula_id from actor_pelicula where actor_id =${id}`)
  .then( results => {
    return results.map(x => x.pelicula_id)
  })
}

function getPeliculasFromDirectorId(id){
  return query(`select pelicula_id from director_pelicula where director_id =${id}`)
  .then( results => {
    return results.map(x => x.pelicula_id)
  })
}

module.exports = {
  get
}
