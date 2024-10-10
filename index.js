const heading = document.querySelector("h1")

const DOMSelectors = {
    header: document.querySelector("h1"),
    items: document.querySelectorAll("ol"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form:document.querySelector(".form"),
    container: document.querySelector(".container")
}

DOMSelectors.form.addEventListener("Submit", function(event){
    event.preventDefault();
    console.log(document.querySelector("input").value);
});

DOMSelectors.container.addEventListener("")