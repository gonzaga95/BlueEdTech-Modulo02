let page = 1;
const locationsList = document.querySelector("#locations-list");

async function getLocations () { 
    const resp = await fetch (`https://rickandmortyapi.com/api/location?page=${page}`);
}