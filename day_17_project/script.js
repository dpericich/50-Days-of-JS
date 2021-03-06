const API_KEY = '936640cdee116b744d5fc3fa55139dbf'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const form = document.getElementById('form');
const field = document.getElementById('search');
const main = document.getElementById('main');

// Get initial movies
getMovieData(API_URL)

async function getMovieData(url) {
    const res = await fetch(url);
    const data = await res.json();
    
    
    showMovies(data.results);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = field.value;
    if (searchTerm && searchTerm !== "") {
        getMovieData(SEARCH_API + searchTerm)

        field.value = ""
    } else {
        // Reloads the page
        window.location.reload()
    }
})

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date } = movie;

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRating(vote_average)}">${vote_average}</span>
            </div>
            <div class="release-date">In Theaters ~ ${release_date}</div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieEl);
    })
}

function getClassByRating(vote) {
    if (vote >= 8) {
        return "green";
    } else if(vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}