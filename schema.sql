CREATE DATABASE paisa;


USE paisa;


CREATE TABLE user(
  ID int NOT NULL AUTO_INCREMENT,
  userName varchar(16) NOT NULL,
  PRIMARY KEY(ID)
);


INSERT INTO user(ID,userName) VALUES(1,'rainbowBrony');
INSERT INTO user(ID,userName) VALUES(2,'theBlackLobo');
INSERT INTO user(ID,userName) VALUES(3,'emperorCamilo');
INSERT INTO user(ID,userName) VALUES(4,'codingNerd45');
INSERT INTO user(ID,userName) VALUES(5,'vatoLoco1');
INSERT INTO user(ID,userName) VALUES(6,'cleverUser2');


CREATE TABLE comments(
  commentID int NOT NULL AUTO_INCREMENT,
  comment varchar(500) NOT NULL,
  PRIMARY KEY(commentID),
  userID int,
  FOREIGN KEY (userID) REFERENCES user(ID)
);


INSERT INTO comments(commentID, comment, userID) VALUES(1,'random questions',1);
INSERT INTO comments(commentID, comment, userID) VALUES(2,'random questions',2);
INSERT INTO comments(commentID, comment, userID) VALUES(3,'random questions',3);
INSERT INTO comments(commentID, comment, userID) VALUES(4,'random questions',6);
INSERT INTO comments(commentID, comment, userID) VALUES(5,'random questions',5);
INSERT INTO comments(commentID, comment, userID) VALUES(6,'random questions',4);



CREATE TABLE reply(
  replyID int NOT NULL AUTO_INCREMENT,
  reply varchar(500)NOT NULL,
  PRIMARY KEY(replyID),
  userID int,
  FOREIGN KEY(userID) REFERENCES user(ID),
  commentID int,
  FOREIGN KEY(commentID) REFERENCES comments(commentID)
);


INSERT INTO reply(replyID, reply, userID, commentID) VALUES(1,'random answer',1,1);
INSERT INTO reply(replyID, reply, userID, commentID) VALUES(2,'random answer',2,2);
INSERT INTO reply(replyID, reply, userID, commentID) VALUES(3,'random answer',3,3);
INSERT INTO reply(replyID, reply, userID, commentID) VALUES(4,'random answer',6,4);
INSERT INTO reply(replyID, reply, userID, commentID) VALUES(5,'random answer',5,5);
INSERT INTO reply(replyID, reply, userID, commentID) VALUES(6,'random answer',4,6);



CREATE TABLE rating(
  ratingID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(ratingID)replyID
  replyID int,
  FOREIGN KEY(replyID) REFERENCES reply(replyID),
  commentID int,
  FOREIGN KEY(commentID) REFERENCES comments(commentID)
);


INSERT INTO rating(ratingID, replyID, commentID) VALUES(1,1,1);
INSERT INTO rating(ratingID, replyID, commentID) VALUES(2,2,2);
INSERT INTO rating(ratingID, replyID, commentID) VALUES(3,3,3);
INSERT INTO rating(ratingID, replyID, commentID) VALUES(4,6,6);
INSERT INTO rating(ratingID, replyID, commentID) VALUES(5,5,5);
INSERT INTO rating(ratingID, replyID, commentID) VALUES(6,4,4);
