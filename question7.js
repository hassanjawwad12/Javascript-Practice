const prompt = require('prompt-sync')();

const movies = [
    { name: "The Shawshank Redemption", director: "Frank Darabont", imdbRating: 9.3 },
    { name: "The Green Mile", director: "Frank Darabont", imdbRating: 8.6 },
    { name: "The Mist", director: "Frank Darabont", imdbRating: 7.1 },
    { name: "The Godfather", director: "Francis Ford Coppola", imdbRating: 9.2 },
    { name: "The Godfather Part II", director: "Francis Ford Coppola", imdbRating: 9.0 },
    { name: "Apocalypse Now", director: "Francis Ford Coppola", imdbRating: 8.4 },
    { name: "The Dark Knight", director: "Christopher Nolan", imdbRating: 9.0 },
    { name: "Inception", director: "Christopher Nolan", imdbRating: 8.8 },
    { name: "Interstellar", director: "Christopher Nolan", imdbRating: 8.6 },
    { name: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", imdbRating: 8.8 },
    { name: "The Lord of the Rings: The Two Towers", director: "Peter Jackson", imdbRating: 8.7 },
    { name: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", imdbRating: 8.9 },
   ];
   
   // Prompt the user to enter the director's name
   let directorName = prompt("Enter Director Name:");
   
   // Filter the movies by the director and calculate the average rating
   let directorMovies = movies.filter(movie => movie.director === directorName);
   
   if (directorMovies.length > 0) {
       let totalRating = directorMovies.reduce((sum, movie) => sum + movie.imdbRating, 0);
       let averageRating = (totalRating / directorMovies.length).toFixed(1);
       console.log(`The average rating of ${directorName} movies is ${averageRating}`);
   } else {
       console.log(`No movies found for director ${directorName}`);
   }