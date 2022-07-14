let page = 1;

async function getCharacters () {
    const resposta = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

    const data = await resposta.json();

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

            </div>

        </div>
        `)
    })
}

getCharacters();

function viewMore(){
    page++;
    getCharacters();
}

window.addEventListener('scroll', function () {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
        viewMore();
    }
})