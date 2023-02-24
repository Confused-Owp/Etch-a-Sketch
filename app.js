const cell  =  document.getElementsByClassName("grid-item");
const container = document.getElementById("container");
const tools = document.getElementById("tools");
const paintBrush = document.querySelector('#paint-brush')
const lighter= document.querySelector('#lighter')
const darker = document.querySelector('#darker')
const eraser = document.querySelector('#eraser')
const colorPicker = document.querySelector('#color-picker')
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

var randomColor = '#000000'
function rainbowColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  console.log("#" + randomColor)
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
  }
  if (button == colorPicker){
    console.log('you picking?')
  }
  if (button == rainbow){
    rainbowColor()
    //event.target.style.setProperty('--paint', "#" + randomColor);
    
    console.log('you rainbowing?')
  }
  button.classList.add("blue")
})
makeRows(16, 16);