

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
    console.log(document.querySelector("input").value);
    const title = document.querySelector('input[type="text"]').value;
    const link = document.querySelectorAll('input[type="text"]')[1].value;
    console.log('Title:', title);
    console.log('Link:', link);
    const text = document.querySelector("input").value;
    const img = document.querySelector("input")[1].value;
    DOMSelectors.container.insertAdjacentHTML("beforeend", `<div class="card"><h2 class="card-header">${text}</h2></div>`);
    DOMSelectors.container.insertAdjacentHTML("beforeend", `<div class="card"><h2 class="">${img}</h2></div>`);
});
