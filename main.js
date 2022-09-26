let color = "black"


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
  clearCanvas();

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener('mouseover', colorDiv);
    canvas.insertAdjacentElement("beforeend", div);
  }
}

function colorDiv(){
  
  if(color == "random"){
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 65%)`
  }
  else if(color == "black"){
    this.style.backgroundColor = "black"
  }
  else if(color == 'white'){
    this.style.backgroundColor = "white"
  }
}

function setColor(colorChoice){
  color = colorChoice;
}

function clearCanvas(){
  let divs = document.querySelectorAll('.canvas > div')
  divs.forEach((div => div.style.backgroundColor = "white"));
}

function getSize() {
  let input = prompt("Enter size of grid (1 - 100)");
  let message = document.querySelector("#message");
  if (input === "") {
    // message.innerHTML = "Enter a number between 1 and 100";
    alert("Enter a number between 1 - 100 to change grid size");
  } else if (input <= 0 || input > 100) {
    alert("Enter a number between 1 - 100 to change grid size");
    // message.innerHTML = "Enter a number between 1 and 100";
  } else {
    message.innerHTML = `${input}x${input}`;
    return input;
  }
}
