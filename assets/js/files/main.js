import { createCardFilm } from "./films.js";

//récupération container film mieux noté
const bestFilm = document.getElementById("best-films")
const titanic = { "title": "Titanic", "image_url": "./assets/images/titanic-1.png" }
const cardTitanic = createCardFilm(titanic)

for (let i = 0; i < 6; i++) {
    bestFilm.appendChild(createCardFilm(titanic))
}
