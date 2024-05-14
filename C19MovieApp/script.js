//https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
const API_KEY = "api_key=e07a872631e2c7eae6c584ad455ce75b"
const API_URL = "https://api.themoviedb.org/3/movie";
const MOVIE_URL = `${API_URL}/popular?${API_KEY}`;
const imageUrl ="https://image.tmdb.org/t/p/w500"
//const SEARCH_URL = ${API_URL}/search/movie?${API_KEY}
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";
console.log(MOVIE_URL);

const getMovies = (url) => {
    fetch(url)
        .then((response)=> response.json())
        .then((data) => {
            console.log(data.results)
            showMovies(data.results);
        })
        .catch((error) =>console.log(error))
}

getMovies(MOVIE_URL);



const movieContainer = document.querySelector(".movieContainer");
const showMovies=(movies) => {
    movies.forEach(movie =>{
        const {title, overview, poster_path, vote_average} = movie;
        const divTag = document.createElement("div");
        divTag.classList.add("movieDetails");
        divTag.innerHTML = ` <img src="${imageUrl}${poster_path}" alt="">
                    <div class ="movieTitle">
                        <p>${title}</p>
                        <p>${vote_average}</p>
                    </div>
                    <h2>Overview</h2>
                    <p>${overview}</p>`
        movieContainer.appendChild(divTag)
    });
}

const searchMovie = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch(error => console.log(error));
};


const searching = document.forms["search"];
searching.addEventListener("keyup", (event) => {
    event.preventDefault();
    let inputText = event.target.value;
    const url = SEARCH_URL + inputText + "&" + API_KEY;
    movieContainer.innerHTML = "";
    searchMovie(url);

});

const form = document.querySelector(".search");
const search = document.querySelector("#searchInput");

form.addEventListener("(keyup", (event) => {
    event.preventDefault();
    const searchValue = search.value
    if(searchValue) {
        getMovies(SEARCH_URL + "&query=" + searchValue);
    }
    else {
        getMovies(API_URL);
    }
})