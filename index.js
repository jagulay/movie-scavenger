// https://www.omdbapi.com/?i=tt3896198&apikey=895e4858
// https://www.omdbapi.com/?i=tt3896198&apikey=895e4858&s=fast

const movieListEl = document.querySelector('.movie__list');

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?s=fast&apikey=895e4858");
    const moviesData = await movies.json();
    console.log(moviesData);

    if (moviesData.Search) {
        movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
    } else {
        movieListEl.innerHTML = "<p>No movies found.</p>";
    }
}

main();

function showResults(movie) {

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
