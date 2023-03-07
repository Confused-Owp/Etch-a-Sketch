const cell  =  document.getElementsByClassName("grid-item");
const container = document.getElementById("container");
const tools = document.getElementById("tools");
const paintBrush = document.querySelector('#paint-brush')
const lighter= document.querySelector('#lighter')
const darker = document.querySelector('#darker')
const eraser = document.querySelector('#eraser')
const colorPicker = document.querySelector('#color-picker')
const rainbow = document.querySelector('#rainbow')
const range = document.querySelector('#input')
var rows = 16
var cols = 16
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

var randomColor = '#000000'
function rainbowColor(){
  randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  container.style.setProperty('--paint', randomColor);
};
function erasing(){
  randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  container.style.setProperty('--paint', "white");
};

//function for toolsbar
tools.addEventListener('click', function(event){
  const button = event.target
  
  if (button == paintBrush){
    console.log('you painting?')
  }
  if (button == lighter){
    console.log('you lighting?')
  }
  if (button == darker){
    console.log('you darking?')
  }
  if (button == eraser){
    console.log('you erasing?')
    erasing()
  }
  if (button == colorPicker){
    console.log('you picking?')
  }
  if (button == rainbow){
    rainbowColor()
    
    
    console.log('you rainbowing?')
  }
  button.classList.add("blue")
})

input.addEventListener("input", (event) => {
  rows = event.target.value
  cols = event.target.value
  container.innerHTML = ""
  makeRows(rows,cols);
})
makeRows(rows,cols);
