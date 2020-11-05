drop database if exists blog;
create database blog;
use blog;

create table post (
    id integer auto_increment primary key,
    create_timestamp datetime,
    update_timestamp datetime,
    subject varchar(100),
    entry text,
    mood varchar(30)
);

insert into post (create_timestamp, update_timestamp, subject, entry, mood) values 
    ('2019-01-23 22:00:00', '2019-01-23 22:00:00', "Term Starts Again", "Another term started omg i wanna die alrdy...", 'Sad');
insert into post (create_timestamp, update_timestamp, subject, entry, mood) values 
    ('2019-01-25 23:59:02', '2019-01-25 23:59:02', "I Suck", "I got F on my quiz I am terrible", 'Sad');
insert into post (create_timestamp, update_timestamp, subject, entry, mood) values 
    ('2019-01-29 09:15:00', '2019-01-29 09:15:00', "My Puppy", "Mummy says she will give away my dog because he pees everywhere", 'Angry');
insert into post (create_timestamp, update_timestamp, subject, entry, mood) values 
    ('2019-02-05 21:00:00', '2019-02-05 21:00:00', "CNY Homework", "This crazy woman gave us CNY homework omg can she pliz go enjoy CNY and leave us alone?", 'Angry');
insert into post (create_timestamp, update_timestamp, subject, entry, mood) values 
    ('2019-02-14 13:12:00', '2019-02-14 13:25:00', "My First Love", "A very handsome boy gave me roses for Vday and asked me out!", 'Happy');