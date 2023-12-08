'use strict';

let numberOfFilms = +prompt('How much films did u watch?');

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const lastWatchMovie = prompt("One of the last movies"),
     movieGrade = prompt("your grade"),
     secondWatchMovie = prompt("One of the last movies"),
     secondMovieGrade = prompt("your grade");

// personalMovieDb['movies'] = {
//     'lastWatchMovie': lastWatchMovie,
//     'movieGrade': movieGrade,
//     'secondWatchMovie':secondWatchMovie,
//     'secondMovieGrade': secondMovieGrade
// }

personalMovieDb.movies[lastWatchMovie] = movieGrade;
personalMovieDb.movies[secondWatchMovie] = secondMovieGrade;


console.log(personalMovieDb.movies);