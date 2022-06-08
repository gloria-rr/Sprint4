const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(directors => directors.director);



  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {

  const moviesFromDirector = movies.filter(directors => directors.director === director);

  console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;
}



// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const peliculas = getMoviesFromDirector(movies, director);
  const puntos = peliculas.map(puntos => puntos.score);

  const averageOfDirector = puntos.reduce((valorActual, valorAcumulado) => valorActual + valorAcumulado, 0) / puntos.length;
  const result = Number(averageOfDirector.toFixed(2));
  console.log("EXERCICI 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let titol = movies.map(titols => titols.title);
  let orderAlphabetically = titol.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else if (a.toLowerCase() < b.toLocaleLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });

  let listaOrderAlphabetically = orderAlphabetically.slice(0, 20);

  console.log("EXERCICI 4 ->", listaOrderAlphabetically);
  return listaOrderAlphabetically;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const newMovies = movies.slice();
  let orderYear = newMovies.sort(((a, b) => a.year - b.year ||a.title.localeCompare(b.title))
);
  
  console.log("EXERCICI 5 ->",orderYear);
  return (orderYear);
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const arrayGenere = movies.filter(movies => movies.genre == genre);
  let scoreCategory = arrayGenere.filter(movies => movies.score);
  let moviesAverageCategory = moviesAverageOfDirector(scoreCategory);


  console.log("EXERCICI 6 ->", moviesAverageCategory);
  return (moviesAverageCategory);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
