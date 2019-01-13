const { query } = require('../db/conexiondb')

function get(req, res){
  query('select id, nombre from competencia')
  .then( results => {
    res.json(results)
  })
}

function post(req, res){
  console.log(req.body)
  let {nombre,genero,actor,director} = req.body
  if(parseInt(genero)===0){
    genero = 'NULL'
  }
  if(parseInt(actor)===0){
    actor = 'NULL'
  }
  if(parseInt(director)===0){
    director = 'NULL'
  }
  query(`insert into competencia(nombre,genero,actor,director) values ('${nombre}', ${genero}, ${actor}, ${director})`)
  .then( () => {
    res.json({

    })
  })
  .catch( error => {
    res.status(400)
    res.json({
      error: 'Error al insertar'
    })
  })
}

module.exports = {
  post,
  get
}
