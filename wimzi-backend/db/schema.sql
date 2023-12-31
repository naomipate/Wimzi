DROP DATABASE IF EXISTS wimzi_db;
CREATE DATABASE wimzi_db;
\c wimzi_db 

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL, 
    username TEXT NOT NULL, 
    email TEXT, 
    user_password TEXT
);

INSERT INTO users (username, email, user_password) VALUES
('SysGrlNaomi', 'sysgrlnaomi@email.com', 'postgreSQL'),
('BeardMan', 'cooldude@email.com', 'dollarshaveclub'),
('Lily Brown', 'lilybrown@email.com', 'artacorn'),
('TechNerd01', 'technerd01@email.com', 'binarycode'),
('FloralJade', 'floraljade@email.com', 'rosebush'),
('SkyWatcher', 'skywatcher@email.com', 'cloudysky'),
('MountainMover', 'mountainmover@email.com', 'rockypeak'),
('SeaExplorer', 'seaexplorer@email.com', 'blueocean'),
('PixelArtist', 'pixelartist@email.com', 'digitalbrush'),
('MusicMaven', 'musicmaven@email.com', 'headphones'),
('GreenThumbLucy', 'lucythegardener@email.com', 'pottedplant'),
('StarGazer', 'stargazer@email.com', 'telescope'),
('TravelBugAnna', 'travelbuganna@email.com', 'worldmap'),
('CoffeeLover', 'coffeelover@email.com', 'coffeebean'),
('BookWormBeth', 'bookwormbeth@email.com', 'stackofbooks'),
('NatureNutNina', 'naturenutnina@email.com', 'greenleaf'),
('GameGuruGary', 'gamegurugary@email.com', 'gamecontroller'),
('PhotoProPam', 'photopropam@email.com', 'camera'),
('GuitarGodGreg', 'guitargodgreg@email.com', 'electricguitar');

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks(
    id SERIAL PRIMARY KEY NOT NULL,
    task_date_time DATETIME,
    task_title TEXT NOT NULL,
    task_list_description TEXT
);
INSERT INTO tasks (task_date, task_title, task_list_description) VALUES
('2023-10-25 12:00:00', 'Art Class', 'watercolor brushes with a slanted end for additional painting purposes.'),
('2023-10-25 14:30:00', 'Art Practice', 'watercolor pencils to enhance shapes in the paint.'),
('2023-10-29 17:00:00', 'Moms Birthday', 'what does mom want?'),
('2023-10-27 11:15:00', 'Texture Studies', 'acrylic painting with a palette knife for textures.');

DROP TABLE IF EXISTS subtasks;
CREATE TABLE subtasks(
    id SERIAL PRIMARY KEY NOT NULL, 
    task_id INTEGER REFERENCES tasks(id), 
    subtask_title TEXT,
    subtask_description TEXT
);
INSERT INTO subtasks (task_id, subtask_title, subtask_description) VALUES
(1, 'Watercolor brushes', 'watercolor brushes with a slanted end for additional painting purposes.'),
(1, 'Watercolor pencils', 'watercolor pencils to enhance shapes in the paint.'),
(2, 'Acrylic paint', 'acrylic paint for college course.'),
(4, 'Palette knife', 'acrylic painting with a palette knife for textures.');