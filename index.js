// https://www.omdbapi.com/?i=tt3896198&apikey=895e4858
// https://www.omdbapi.com/?i=tt3896198&apikey=895e4858&s=fast

const movieListEl = document.querySelector('.movie__list');
const searchInput = document.querySelector('.movie__srch--input');
const searchBtn = document.querySelector('.srch__btn');

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      searchMovies(query);
    }
  });

async function searchMovies(query) {
    const res = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=895e4858`);
    const data = await res.json();

    if (data.Search) {
        movieListEl.innerHTML = data.Search.map((movie) => movieHTML(movie)).join("");
    } else {
        movieListEl.innerHTML = `<p>No movies found for "${query}".</p>`;
    }
}

function movieHTML(movie) {
    return `
    <div class="movie__wrapper">
        <div class="movie">
            <figure class="movie__poster">
                <img src="${movie.Poster}" class="movie__poster--img" alt="${movie.Title}">
            </figure>
            <div class="movie__title">${movie.Title}</div>
            <div class="movie__year">${movie.Year}</div>
        </div>
    </div>`;
}
