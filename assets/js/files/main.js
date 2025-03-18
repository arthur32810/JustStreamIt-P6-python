import { createCardBestFilm, createCardFilm } from "./films.js";

const topfilmContainer = document.getElementById("film-top")
const topFilm = { "title": "The Big Lebowski", "image_url": "./assets/images/film-top.png", "description": 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.' }
const cardTopFilm = createCardBestFilm(topFilm)

topfilmContainer.parentNode.replaceChild(cardTopFilm, topfilmContainer)

//récupération container film mieux noté
const bestFilmContainer = document.getElementById("best-films")
const titanic = { "title": "Titanic", "image_url": "./assets/images/titanic-1.png" }
const cardTitanic = createCardFilm(titanic)

for (let i = 0; i < 6; i++) {
    bestFilmContainer.appendChild(createCardFilm(titanic))
}
