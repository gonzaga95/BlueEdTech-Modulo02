let page = 1;

const modalImage = document.querySelector("#modal-image");
const modalName = document.querySelector("#modal-name");
const modalSpecies = document.querySelector("#modal-species");
const modalGender = document.querySelector("#modal-gender");
const modalOrigin = document.querySelector("#modal-origin");
const modalLocation = document.querySelector("#modal-location");
const modalStatus = document.querySelector("#modal-status");

async function getCharacters () {
    const respostaPage = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

    const data = await respostaPage.json();

    data.results.forEach(character => {
        document.querySelector("#character-list").insertAdjacentHTML('beforeend', `
        <div class="card">
            <img class="character" src="${character.image}"
                alt="Avatar do ${character.name}">

            <div>
                <h2 class="name-character">${character.name}</h2>
                <p class="spec-character">${character.species}</p>
                
                <h4>Gender</h4>
                <p class="spec-character">${character.gender}</p>

                <h4>Origin</h4>
                <p class="spec-character">${character.origin.name}</p>

                <span class="id-character">${character.id}</span>

            </div>

        </div>
        `);
    });

    const cards = document.querySelectorAll(".card");

    const modal = document.querySelector("#modal-detalhes");

    cards.forEach((card) => {
        card.addEventListener("click", function (event) {
            const cardElement = event.path.filter((item) => item.className == "card");

            const idCard = cardElement[0].children[0].children[6].innerHTML;
            
            const respostaId = await fetch (`https://rickandmortyapi.com/api/character/${idCard}`);

            const data = await respostaId.json();
        });
    });

}

getCharacters();

function viewMore(){
    page++;
    getCharacters();
}

// //Paginação infinitda
// window.addEventListener('scroll', function () {
//     const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

//     if (scrollTop + clientHeight >= scrollHeight) {
//         viewMore();
//     }
// })