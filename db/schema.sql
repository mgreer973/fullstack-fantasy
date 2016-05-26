### Schema
CREATE DATABASE fullstack_fantasy_db;
USE fullstack_fantasy_db;

CREATE TABLE players(
   player_id         INTEGER  NOT NULL  
  ,sport             VARCHAR(3) NOT NULL
  ,player_name       VARCHAR(50) NOT NULL
  ,player_team       VARCHAR(3) NOT NULL
  ,position          VARCHAR(2) NOT NULL
  ,fantasy_salary    INTEGER  NOT NULL,
  PRIMARY KEY (player_id)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	nick_name varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	role char(1) NOT NULL DEFAULT 'U',
	PRIMARY KEY (id)
);

CREATE TABLE users_players
(
	id int NOT NULL AUTO_INCREMENT,
	user_id int NOT NULL,
	player_id int NOT NULL,
	fantasy_points int NOT NULL default 0,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (player_id) REFERENCES players(player_id)
);

