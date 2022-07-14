async function getCharacters () {
    const resposta = await fetch("https://rickandmortyapi.com/api/character");

    const data = await resposta.json();

    
}