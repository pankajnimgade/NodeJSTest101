var movie = require('./shared_movie_module1')

var ryanMovies = movie()
ryanMovies.favoriteMovie = "Pacific Rim";

console.log("Rayn's favorite movie is : " + ryanMovies.favoriteMovie)