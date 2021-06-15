let searchQuery = 'superman';

const API_KEY = 'd1b5362f897e3fdeed2158690283acdf';

const getMovies = () => {

  const MOVIE_ENDPOINT = 'https://api.themoviedb.org'
  const MOVIE_URL = `${MOVIE_ENDPOINT}/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`


  return fetch(MOVIE_URL)
    .then(res => res.json())
    .then(data => {
      const movies = [];

      data.results.forEach(movie => {

        let imagePath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        let obj = {
          title: movie.title,
          image: imagePath,
        }
        movies.push(obj);
      })

      return movies;
    })

}

const render = movies => {
  let markup = '';
  movies.forEach(movie => {

    markup += ` 
    <div class="movie__list">
        <img src="${movie.image}" alt="" class="movie__img">
        <p class="movie__title">${movie.title}</p>
      </div>`

  })

  document.querySelector('.movies').innerHTML = markup;

}

getMovies()
  .then(data => {
    render(data);
  })