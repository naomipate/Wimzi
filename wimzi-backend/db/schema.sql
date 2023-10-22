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

INSERT INTO users (username, email, profile_img) VALUES
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
    subtask TEXT NOT NULL, 
    subtask_description TEXT
);
INSERT INTO tasks (subtask, subtask_description) VALUES
('Watercolor brushes', 'watercolor brushes with a slanted end for additional painting purposes.'),
('Watercolor pencils', 'watercolor pencils to enhance shapes in the paint.'),
('Acrylic paint', 'acrylic paint for college course.'),
('Palette knife', 'acrylic painting with a palette knife for textures.');

DROP TABLE IF EXISTS subtasks;
CREATE TABLE subtasks(
    id SERIAL PRIMARY KEY NOT NULL, 
    subtask TEXT NOT NULL, 
    subtask_description TEXT
);
INSERT INTO tasks (subtask, subtask_description) VALUES
('Watercolor brushes', 'watercolor brushes with a slanted end for additional painting purposes.'),
('Watercolor pencils', 'watercolor pencils to enhance shapes in the paint.'),
('Acrylic paint', 'acrylic paint for college course.'),
('Palette knife', 'acrylic painting with a palette knife for textures.');