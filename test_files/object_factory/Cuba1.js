var movie = require('./shared_movie_module1')

var chuba = movie();
chuba.favoriteMovie = "Dreamer"
console.log("Cuba's favorite movie is : " + chuba.favoriteMovie)