const card = document.querySelector('#card');
const load = document.querySelector('#load');

const loadCard = () => {
    const SCRYFALL_URL = 'https://api.scryfall.com/cards/named?'
    let url = SCRYFALL_URL;

    console.log(url);
};

const init = () => {
    load.addEventListener('click', loadCard);
};

init();