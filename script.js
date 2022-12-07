const API_KEY = 'cb5e6795a4189a9c3e638f375f9d1a7e';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';

const movieInfo = document.getElementById("movies-info");
const movieTitle = document.getElementById("movie-title");
const movieImg = document.getElementById("movie-poster");
const movieSinopse = document.getElementById("movie-sinopse");
const movieBtn = document.getElementById("btn")

movieBtn.addEventListener('click', async () => {
    const randomId = randomNumber()
    const movie = await getMovie(randomId)
    renderMovie(movie)
})
  
function randomNumber() {
    return Math.floor(Math.random() * 500);
}
  
async function getMovie(id) {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    const movieData = await movie.json()
    return movieData
}
  
function renderMovie(movie) {
   movieImg.style.display = "block"
   movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
   movieTitle.textContent = movie.title;
   movieSinopse.textContent = movie.overview;

   if(movie.poster_path === undefined){
    movieTitle.textContent = "Filme indisponível";
    movieSinopse.textContent = "Tente novamente";
   }
}