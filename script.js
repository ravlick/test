'use script';
//
// const numberofFilms = +prompt('Сколько фильмов вы уже просмотрели?' , '');
// const personalMovieDb = {
//     count : numberofFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false
// };
// function detectLevel(){
//
//     if(personalMovieDb.count < 10){
//         alert('Просмотрено мало фильмов');
//     }else if(personalMovieDb.count > 10 && personalMovieDb.count < 30){
//         alert('Вы классический зритель');
//     }else{
//         alert('Вы - киноман');
//     };
// }
//
// detectLevel();
//
//
// function myLastFilms(){
//     for (let i = 0; i<2; i++){
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = +prompt('На сколько оцените его?', '');
//         if(a!='' && b!='' && a!=null && b!=null && a.length<50){
//             personalMovieDb.movies[a] = b;
//             console.log(personalMovieDb);
//         }else{
//             i--;
//         }
//     };
// }
//
// myLastFilms();
//
// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDb);
//     }
// };
// showMyDB(personalMovieDb.privat);
//
// function writeYouGenres(){
//     for (let i = 1; i<=3 ; i++){
//         const genre = prompt(`Ваш любимый жанр под номером :${i}` , '');
//         personalMovieDb.genres[i-1] = genre;
//     }
// }
// writeYouGenres();
//
// console.log(personalMovieDb);
//
// function myDetect(){
//     document.getElementById('demo').innerHTML = `Количество просмотренных фильмов ${personalMovieDb.count}`;
// }

// Callback function


//
// function myFirstLang(lang , test){
//     console.log(`Я учу ${lang}`);
//     test();
// }
// function done(){
//     console.log('Это первый проект');
// }
// myFirstLang('Js' , done);

// Object