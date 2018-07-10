
let BGWrapper = document.querySelector('.bg-wrapper');

let lastColor = {
    red: 255 * Math.random(),
    green: 255 * Math.random(),
    blue: 255 * Math.random()
}

let score = 0;

function pageLength() {
    const BGDivs = document.querySelectorAll('.bg');
    return (BGDivs.length + 1);
}

function createBGDiv() {
    let newColor = {
        red: 255 * Math.random(),
        green: 255 * Math.random(),
        blue: 255 * Math.random()
    }
    const lastColorRGB = `rgb(${lastColor.red},${lastColor.green},${lastColor.blue})`;
    const newColorRGB = `rgb(${newColor.red},${newColor.green},${newColor.blue})`;
    let newBGHTML = `<div class="bg" style="background: linear-gradient(${lastColorRGB}, ${newColorRGB})"></div>
        <div class="bg" style="background-color: ${newColorRGB}"></div>`;
    BGWrapper.innerHTML += newBGHTML;
    lastColor = newColor;
}

function createScrollBG() {
    let corentLocation = window.scrollY / 500;
    while (corentLocation >= (pageLength() - 20)) {
        let addBGDiv = setTimeout(createBGDiv(), 0);
    }
}

function init() {
    createBGDiv();
    createScrollBG();
}

init();


