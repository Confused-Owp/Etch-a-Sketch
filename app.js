const cell  =  document.getElementsByClassName("grid-item");
const container = document.getElementById("container");
const tools = document.getElementById("tools");

console.log(tools)


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
  console.log('you clicked it')
  event.target.classList.add("blue")
  
})
makeRows(16, 16);