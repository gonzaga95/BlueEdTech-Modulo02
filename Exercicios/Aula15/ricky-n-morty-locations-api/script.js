let page = 1;
const locationsList = document.querySelector("#locations-list");

async function getLocations() {
    const resp = await fetch(
        `https://rickandmortyapi.com/api/location?page=${page}`
    );

    const data = await resp.json();

    data.results.forEach((location) => {
        locationsList.insertAdjacentHTML(
            "beforeend",
            `
        <div class="card">
        <img class="planet" src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/06/Planeta-PNG.png">
        <h2>${location.name}</h2>
        
        <div class="details">
        
        <h4>ID</h4>
        <p>${location.id}</p>

        <h4>Tipo</h4>
        <p>${location.type}</p>
        
        <h4>Dimensão</h4>
        <p>${location.dimension}</p>

        <h4>População</h4>
        <p>${location.residents.length}</p>

        </div>
        
        </div>
        `
        );
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", function (event) {
            getCardElemento(event).style.display = "block";
        });

        card.addEventListener("mouseleave", function (event) {
            getCardElemento(event).style.display = "none";
        });
    });

    function getCardElemento(evento) {
        const cardElement = evento.path.filter(
            (item) => item.className === "card"
        );
        const details = cardElement[0].children[2];
        return details;
    }
}

getLocations();

function viewMore() {
    page++;
    getLocations();
}
