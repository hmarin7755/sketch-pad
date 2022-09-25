document.addEventListener("DOMContentLoaded", function () {
  createGrid(16);
  let btnPopup = document.querySelector("#popup");
  btnPopup.addEventListener("click", function () {
    let size = getSize();
    createGrid(size);
  
  });
});

function createGrid(size) {
  let canvas = document.querySelector(".canvas");
  canvas.style.gridTemplateColumns = `repeat(${size},1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size},1fr)`;

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    canvas.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("Enter Size (1 - 100)");
  let message = document.querySelector("#message");
  if (input === "") {
    message.innerHTML = "Please provide a number";
  } else if (input <= 0 || input > 100) {
    message.innerHTML = "Please Provide a number between 1 and 100";
  } else {
    message.innerHTML = `${input}x${input}`;
    return input;
  }
}
