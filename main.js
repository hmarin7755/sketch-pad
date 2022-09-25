document.addEventListener("DOMContentLoaded", function () {
    createGrid(16);
});

function createGrid(size){
    let canvas = document.querySelector(".canvas");
    canvas.style.gridTemplateColumns = `repeat(${size},1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size*size;
    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        canvas.insertAdjacentElement("beforeend", div);
        
    }
}