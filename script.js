'use strict';

let numberOfFilms = +prompt('How much films did u watch?'); // Создаю переменную и ввожу в нее промтом значение

const personalMovieDb = {     // создаю обьект со свойствами, в каунт передал значение с перемеенной выше
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const lastWatchMovie = prompt("One of the last movies"),             // ввожу значения для свойства-обьекта movies
     movieGrade = prompt("your grade"),
     secondWatchMovie = prompt("One of the last movies"),
     secondMovieGrade = prompt("your grade");

// personalMovieDb['movies'] = {                          // первый вариант как пеередать
//     'lastWatchMovie': lastWatchMovie,
//     'movieGrade': movieGrade,
//     'secondWatchMovie':secondWatchMovie,
//     'secondMovieGrade': secondMovieGrade
// }

personalMovieDb.movies[lastWatchMovie] = movieGrade;    // второй
personalMovieDb.movies[secondWatchMovie] = secondMovieGrade;


console.log(personalMovieDb.movies);  // вывод в консоль