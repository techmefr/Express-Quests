DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int PRIMARY KEY,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  city varchar(255) DEFAULT NULL,
  language varchar(255) DEFAULT NULL
) 
/*ENGINE=InnoDB DEFAULT CHARSET=utf8;*/
;
INSERT INTO
  movies (title, director, year, color, duration)
VALUES
  (
    'Citizen Kane',
    'Orson Wells',
    '1941',
    '0',
    120
  ),
  (
    'The Godfather',
    'Francis Ford Coppola',
    '1972',
    '1',
    180
  ),
  (
    'Pulp Fiction',
    'Quentin Tarantino',
    '1994',
    '1',
    180
  ),
  (
    'Apocalypse Now',
    'Francis Ford Coppola',
    '1979',
    '1',
    150
  ),
  (
    '2001 a space odyssey',
    'Stanley Kubrick',
    '1968',
    '1',
    160
  ),
  (
    'The Dark Knight',
    'Christopher Nolan',
    '2008',
    '1',
    150
  );