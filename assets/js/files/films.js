//Créer la structure html d'une card film
export function createCardFilm(film) {
    const article = document.createElement('article')
    article.classList.add('card-film')
    
    const imgFilm = document.createElement('img')
    imgFilm.alt = "Image du film " + film.title
    imgFilm.src = film.image_url

    article.appendChild(imgFilm)

    const div = document.createElement("div")
    const titleFilm = document.createElement('h3')
    titleFilm.textContent = film.title

    const button = document.createElement('button')
    button.textContent = "Détails"

    div.appendChild(titleFilm)
    div.appendChild(button)
    article.appendChild(div)

    return article
}