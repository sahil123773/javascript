let movie = {
    title: "inception",
    director: "christopher nolan",
    year: 2010,
    genre: "sci-fi",
    image: "inception.jpg"
}




document.getElementById("cards").innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>${movie.director}</p>
    <p>${movie.year}</p>
    <p>${movie.genre}</p>`;