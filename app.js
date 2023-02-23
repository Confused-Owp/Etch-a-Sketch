const cell  =  document.getElementsByClassName("grid-item");
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

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
makeRows(16, 16);