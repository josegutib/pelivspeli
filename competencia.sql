CREATE TABLE competencia(
  id INT(11) unsigned AUTO_INCREMENT,
  nombre VARCHAR(50),
  actor INT(11) unsigned,
  director INT(11) unsigned,
  genero INT(11) unsigned,
  PRIMARY KEY (id),
  FOREIGN KEY (actor) REFERENCES actor(id),
  FOREIGN KEY (director) REFERENCES director(id),
  FOREIGN KEY (genero) REFERENCES genero(id)
  );

insert into competencia(nombre,actor,director,genero)
  values ('Cual es la mejor pelicula de terror?', NULL, NULL, 10);

insert into competencia(nombre,actor,director,genero)
  values ('Cual es la mejor pelicula de DiCaprio?', '1203', NULL, NULL);
