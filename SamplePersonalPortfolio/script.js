const basketballText = document.getElementById('basketball-text');
const baseballText = document.getElementById('baseball-text');
const footballText = document.getElementById('football-text');

const basketballImg = document.getElementById('basketball');
const baseballImg = document.getElementById('baseball');
const footballImg = document.getElementById('football');

let isBasketballImgOpen = false;
let isBaseballImgOpen = false;
let isFootballImgOpen = false;

function openBasketball() {
    if (isBasketballImgOpen === false) {
    basketballText.innerHTML = '⌄ Basketball';
    basketballImg.style.display = 'block';
    isBasketballImgOpen = true;
    } else if (isBasketballImgOpen === true) {
        basketballText.innerHTML = '> Basketball';
        basketballImg.style.display = 'none';
        isBasketballImgOpen = false;
    }
}

basketballText.onclick = openBasketball;

function openBaseball() {
    if (isBaseballImgOpen === false) {
    baseballText.innerHTML = '⌄ Baseball';
    baseballImg.style.display = 'block';
    isBaseballImgOpen = true;
    } else if (isBaseballImgOpen === true) {
        baseballText.innerHTML = '> Baseball';
        baseballImg.style.display = 'none';
        isBaseballImgOpen = false;
    }
}

baseballText.onclick = openBaseball;

function openFootball() {
    if (isFootballImgOpen === false) {
    footballText.innerHTML = '⌄ Football';
    footballImg.style.display = 'block';
    isFootballImgOpen = true;
    } else if (isFootballImgOpen === true) {
        footballText.innerHTML = '> Football';
        footballImg.style.display = 'none';
        isFootballImgOpen = false;
    }
}

footballText.onclick = openFootball;