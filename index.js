

const DOMSelectors = {
    header: document.querySelector("h1"),
    items: document.querySelectorAll("ol"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form:document.querySelector(".form"),
    container: document.querySelector(".container"),
    card: document.querySelector(".card")
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const titleInput = document.querySelector(".title");
    const imgLinkInput = document.querySelector(".imgLink");
    title = titleInput.value;
    imgLink = imgLinkInput.value;
    DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card">
    <h2 class="card-header">${title}</h2>
    <img src="${imgLink}" alt=""><button class = "removeBtn">Remove</button></div>`);
    titleInput.value = "";
    imgLinkInput.value = "";
    const removeButton = DOMSelectors.container.querySelector(".card:last-child .removeBtn");
    removeButton.addEventListener("click", function () {
        const card = removeButton.parentElement; // Get the card element
        DOMSelectors.container.removeChild(card); // Remove the card from the container
    });
});
