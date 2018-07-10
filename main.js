
let BGWrapper = document.querySelector('.bg-wrapper');

let lastColor = {
    red: 255*Math.random(),
    green: 255*Math.random(),
    blue: 255*Math.random() 
}

function createScrollBG() {
    let newColor = {
        red: 255*Math.random(),
        green: 255*Math.random(),
        blue: 255*Math.random()
    }
    const lastColorRGB = `rgb(${lastColor.red},${lastColor.green},${lastColor.blue})`;
    const newColorRGB = `rgb(${newColor.red},${newColor.green},${newColor.blue})`;
    let newBGHTML = `<div class="bg" style="background: linear-gradient(${lastColorRGB}, ${newColorRGB})"></div>
        <div class="bg" style="background-color: ${newColorRGB}"></div>`;
    BGWrapper.innerHTML += newBGHTML;
    lastColor = newColor;
}

createScrollBG();



