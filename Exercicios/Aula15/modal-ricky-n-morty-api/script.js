let page = 1;

const modalImage = document.querySelector("#modal-image");
const modalName = document.querySelector("#modal-name");
const modalSpecies = document.querySelector("#modal-species");
const modalGender = document.querySelector("#modal-gender");
const modalOrigin = document.querySelector("#modal-origin");
const modalLocation = document.querySelector("#modal-location");
const modalStatus = document.querySelector("#modal-status");
const modalEpisode = document.querySelector("#modal-ep");

async function getCharacters () {
    const respostaPage = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

    const dataAll = await respostaPage.json();

    dataAll.results.forEach( function (character) {
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
    })

    const cards = document.querySelectorAll(".card");

    const modal = document.querySelector("#modal-detalhes");

    cards.forEach((card) => {
        card.addEventListener("click", async function (event) {
            const cardElement = event.path.filter((item) => item.className == "card");

            const idCard = cardElement[0].children[1].children[6].innerHTML;
            
            const respostaId = await fetch(`https://rickandmortyapi.com/api/character/${idCard}`);

            const dataCharacter = await respostaId.json();
    
            modal.style.display = "flex";
    
            modalImage.setAttribute("src", dataCharacter.image);
            modalName.innerText = dataCharacter.name;
            modalGender.innerText = dataCharacter.gender;
            modalSpecies.innerText = dataCharacter.species;
            modalOrigin.innerText = dataCharacter.origin.name;
            modalLocation.innerText = dataCharacter.location.name;
            modalStatus.innerText = dataCharacter.status;
            modalEpisode.innerText = dataCharacter.episode.length;
        });
        
    });

    window.addEventListener("click", function (event) {
        if (!event.target.classList.contains("modal-item")){
            modal.style.display = "none";
        }
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