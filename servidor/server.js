const express = require('express')
const cors = require('cors')
const controllers = require('./controllers/controllers')
const bodyParser = require('body-parser')

const PORT = 8080

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/status', controllers.statusController.get)

app.get('/generos', controllers.generosController.get)

app.get('/directores', controllers.directoresController.get)

app.get('/actores', controllers.actoresController.get)

app.get('/competencias', controllers.competenciasController.get)

app.post('/competencias', controllers.competenciasController.post)

app.get('/competencias/:id/peliculas', controllers.competenciaPeliculasController.get)

app.post('/competencias/:id/voto', controllers.votosController.post)

app.get('/competencias/:id/resultados', controllers.resultadosController.get)

app.get('/competencias/:id', controllers.reiniciarVotosController.get)

app.delete('/competencias/:id', controllers.reiniciarVotosController.delete)


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
