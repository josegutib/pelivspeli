CREATE TABLE voto(
  competencia_id INT(11) unsigned,
  pelicula_id INT(11) unsigned,
  votos INT(11) unsigned,
  PRIMARY KEY (competencia_id, pelicula_id),
  FOREIGN KEY (competencia_id) REFERENCES competencia(id),
  FOREIGN KEY (pelicula_id) REFERENCES pelicula(id)
  );
