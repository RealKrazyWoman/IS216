create database if not exists krazystars;

use krazystars;

CREATE TABLE if not exists `star` (
  `id` int(11) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `fullname` varchar(256) NOT NULL,
  `photo_background_url` varchar(1000) NOT NULL,
  `photo_profile_url` varchar(1000) NOT NULL,
  `quote` varchar(1000) NOT NULL,
  `wikipedia_url` varchar(1000) NOT NULL,
  `imdb_url` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into star values (1, 'M', "Denzel Washington", 'http://krazywoman.com/krazystars/images/sm_bg_denzel.jpg', 'https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY209_CR8,0,140,209_AL_.jpg', "You pray for rain, you gotta deal with the mud too. That's a part of it.", 'https://en.wikipedia.org/wiki/Denzel_Washington', 'https://www.imdb.com/name/nm0000243/');

insert into star values (2, 'M', "Johnny Depp", 'http://krazywoman.com/krazystars/images/sm_bg_johnny.jpg', 'https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY209_CR3,0,140,209_AL_.jpg', "Not all treasure is silver and gold, mate.", 'https://en.wikipedia.org/wiki/Johnny_Depp', 'https://www.imdb.com/name/nm0000136/');

insert into star values (3, 'M', "Tom Cruise", 'http://krazywoman.com/krazystars/images/sm_bg_tom.jpg', 'https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY209_CR9,0,140,209_AL_.jpg', "Nothing ends nicely, that's why it ends.", 'https://en.wikipedia.org/wiki/Tom_Cruise', 'https://www.imdb.com/name/nm0000129/');

insert into star values (4, 'M', "Christian Bale", 'http://krazywoman.com/krazystars/images/sm_bg_christian.jpg', 'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_UX140_CR0,0,140,209_AL_.jpg', "I have a fear of being boring.", 'https://en.wikipedia.org/wiki/Christian_Bale', 'https://www.imdb.com/name/nm0000288/');

insert into star values (5, 'M', "Matt Damon", 'http://krazywoman.com/krazystars/images/sm_bg_matt.jpg', 'https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwMDg2MTMyMw@@._V1_UY209_CR8,0,140,209_AL_.jpg', "If your movies don't perform, they just stop calling you.", 'https://en.wikipedia.org/wiki/Matt_Damon', 'https://www.imdb.com/name/nm0000354/');

insert into star values (6, 'M', "Will Smith", 'http://krazywoman.com/krazystars/images/sm_bg_will.jpg', 'https://m.media-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY209_CR2,0,140,209_AL_.jpg', "You can cry, ain't no shame in it.", 'https://en.wikipedia.org/wiki/Will_Smith', 'https://www.imdb.com/name/nm0000226/');

insert into star values (7, 'M', "Eric Bana", 'http://krazywoman.com/krazystars/images/sm_bg_eric.jpg', 'https://m.media-amazon.com/images/M/MV5BMjcxMzI4OWItN2Y4NS00NDZjLWE3MDEtNTIwYWQyZjdiYjE2L2ltYWdlXkEyXkFqcGdeQXVyNzAxOTAyMDc@._V1_UX140_CR0,0,140,209_AL_.jpg', "The darker the film, the more vital everyone's sense of humor is on set.", 'https://en.wikipedia.org/wiki/Eric_Bana', 'https://www.imdb.com/name/nm0051509/');

insert into star values (8, 'M', "Ryan Gosling", 'http://krazywoman.com/krazystars/images/sm_bg_ryan.jpg', 'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY209_CR12,0,140,209_AL_.jpg', "I feel there is something nice about not talking. Like you can say more by actually saying less.", 'https://en.wikipedia.org/wiki/Ryan_Gosling', 'https://www.imdb.com/name/nm0331516/');


insert into star values (9, 'M', "Henry Cavill", 'http://krazywoman.com/krazystars/images/sm_bg_henry.jpg', 'https://m.media-amazon.com/images/M/MV5BODI0MTYzNTIxNl5BMl5BanBnXkFtZTcwNjg2Nzc0NA@@._V1_UY209_CR18,0,140,209_AL_.jpg', "I'm from a family of six men, so I'm bound to be physical.", 'https://en.wikipedia.org/wiki/Henry_Cavill', 'https://www.imdb.com/name/nm0147147/');

insert into star values (10, 'M', "Zac Efron", 'http://krazywoman.com/krazystars/images/sm_bg_zac.jpg', 'https://m.media-amazon.com/images/M/MV5BMTUxNzY3NzYwOV5BMl5BanBnXkFtZTgwNzQ3Mzc4MTI@._V1_UX140_CR0,0,140,209_AL_.jpg', "I've been doing musical theater since I was a kid. And look for a CD from me in the future. I want to write all the songs!", 'https://en.wikipedia.org/wiki/Zac_Efron', 'https://www.imdb.com/name/nm1374980/');


insert into star values (11, 'F', "Cate Blanchett", 'http://krazywoman.com/krazystars/images/sm_bg_cate.jpg', 'https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY209_CR2,0,140,209_AL_.jpg', "If you know you are going to fail, then fail gloriously.", 'https://en.wikipedia.org/wiki/Cate_Blanchett', 'https://www.imdb.com/name/nm0000949/');

insert into star values (12, 'F', "Natalie Portman", 'http://krazywoman.com/krazystars/images/sm_bg_natalie.jpg', 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE3Mjg1NV5BMl5BanBnXkFtZTcwNzA4ODcxNA@@._V1_UY209_CR8,0,140,209_AL_.jpg', "I don't love studying. I hate studying. I like learning. Learning is beautiful.", 'https://en.wikipedia.org/wiki/Natalie_Portman', 'https://www.imdb.com/name/nm0000204/');

insert into star values (13, 'F', "Rachel McAdams", 'http://krazywoman.com/krazystars/images/sm_bg_rachel.jpg', 'https://m.media-amazon.com/images/M/MV5BMTY5ODcxMDU4NV5BMl5BanBnXkFtZTcwMjAzNjQyNQ@@._V1_UY209_CR2,0,140,209_AL_.jpg', "I'm not an amazing cook. But I can follow a recipe!", 'https://en.wikipedia.org/wiki/Rachel_McAdams', 'https://www.imdb.com/name/nm1046097/');

insert into star values (14, 'F', "Emma Stone", 'http://krazywoman.com/krazystars/images/sm_bg_emmastone.jpg', 'https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_UX140_CR0,0,140,209_AL_.jpg', "Flaws are my favorite part of people, usually.", 'https://en.wikipedia.org/wiki/Emma_Stone', 'https://www.imdb.com/name/nm1297015/');

insert into star values (15, 'F', "Jennifer Lawrence", 'http://krazywoman.com/krazystars/images/sm_bg_jennifer.jpg', 'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX140_CR0,0,140,209_AL_.jpg', "I had to learn how to chop wood actually - I don't think my dad would have let me go chop wood in the backyard growing up.", 'https://en.wikipedia.org/wiki/Jennifer_Lawrence', 'https://www.imdb.com/name/nm2225369/');

insert into star values (16, 'F', "Anne Hathaway", 'http://krazywoman.com/krazystars/images/sm_bg_anne.jpg', 'https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_UY209_CR14,0,140,209_AL_.jpg', "A man told me that for a woman, I was very opinionated. I said, 'for a man you're kind of ignorant'.", 'https://en.wikipedia.org/wiki/Anne_Hathaway', 'https://www.imdb.com/name/nm0004266/');

insert into star values (17, 'F', "Amy Adams", 'http://krazywoman.com/krazystars/images/sm_bg_amy.jpg', 'https://m.media-amazon.com/images/M/MV5BMTg2NTk2MTgxMV5BMl5BanBnXkFtZTgwNjcxMjAzMTI@._V1_UX140_CR0,0,140,209_AL_.jpg', "Life is 10% what happens to you and 90% how you react to it.", 'https://en.wikipedia.org/wiki/Amy_Adams', 'https://www.imdb.com/name/nm0010736/');

insert into star values (18, 'F', "Emma Watson", 'http://krazywoman.com/krazystars/images/sm_bg_emmawatson.jpg', 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_UY209_CR14,0,140,209_AL_.jpg', "The less you reveal, the more people can wonder.", 'https://en.wikipedia.org/wiki/Emma_Watson', 'https://www.imdb.com/name/nm0914612/');

insert into star values (19, 'F', "Scarlett Johansson", 'http://krazywoman.com/krazystars/images/sm_bg_scarlett.jpg', 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY209_CR16,0,140,209_AL_.jpg', "I am very independent. I can look after myself but I still need a lot of love and care.", 'https://en.wikipedia.org/wiki/Scarlett_Johansson', 'https://www.imdb.com/name/nm0424060/');

insert into star values (20, 'F', "Emily Blunt", 'http://krazywoman.com/krazystars/images/sm_bg_emily.jpg', 'https://m.media-amazon.com/images/M/MV5BMTUxNDY4MTMzM15BMl5BanBnXkFtZTcwMjg5NzM2Ng@@._V1_UX140_CR0,0,140,209_AL_.jpg', "It just proves good movies don't need 100 million dollars to be good.", 'https://en.wikipedia.org/wiki/Emily_Blunt', 'https://www.imdb.com/name/nm1289434/');