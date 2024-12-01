// script for creating divs
const container = document.getElementById("container");

function populateContainer(num = 4) {
  container.innerHTML = ''; 
  const flexBasis = 100 / num; 

  for (let i = 0; i < num * num; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid");
    newDiv.style.flex = `0 0 ${flexBasis}%`;
    container.appendChild(newDiv);
  }

  // hover
  const grids = document.querySelectorAll(".grid");
  grids.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      element.style.backgroundColor = `#${randomColor}`;
    });
  });
}

// script for button
const button = document.getElementById("button");
button.addEventListener("click", () => {
  let num = prompt("How many squares per side for the new grid?");
  if (num < 100) {
    populateContainer(num);
  } else return;
});

// execution
populateContainer();
