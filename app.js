const cell  =  document.getElementsByClassName("grid-item");
const container = document.getElementById("container");
const tools = document.getElementById("tools");
const paintBrush = document.querySelector('#paint-brush')
const lighter= document.querySelector('#lighter')
const darker = document.querySelector('#darker')
const eraser = document.querySelector('#eraser')
const colorPalette = document.querySelector('#color-palette')
const rainbow = document.querySelector('#rainbow')

//function to make rows (!!needs editing)
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

// function for drawing
container.addEventListener("mousedown", function(event) {
  event.target.classList.add("my-class");
  container.addEventListener("mousemove", mousemoveHandler);
  container.addEventListener("mouseup", function(event) {
    container.removeEventListener("mousemove", mousemoveHandler);
  });
});

function mousemoveHandler(event) {
  event.target.classList.add("my-class");
}

tools.addEventListener('click', function(event){
  const button = event.target
  console.log(button)
  if (button == paintBrush){
    console.log('you painting?')
  }
  button.classList.add("blue")

  
})
makeRows(16, 16);