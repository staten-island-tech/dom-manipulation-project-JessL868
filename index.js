

const DOMSelectors = {
    header: document.querySelector("h1"),
    items: document.querySelectorAll("ol"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form:document.querySelector(".form"),
    container: document.querySelector(".container")
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const title = document.querySelector(".title").value;
    const imgLink = document.querySelector(".imgLink").value;
    DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card">
    <h2 class="card-header">${title}</h2>
    <img src="${imgLink}" alt=""></div>`);
});

DOMSelectors.button.addEventListener("click", function(event){
    event.
});