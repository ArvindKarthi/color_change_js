//Getting the elements which we need to change using DOM queries.
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

//Function changeColor() generates an random color and returns it.
const changeColor = () =>
  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;

//An event listener is added to get the click event this triggers changeColor() and sets the new color as background color for the above document objects.
button.addEventListener("click", () => {
  let newColor = changeColor();
  container.style.backgroundColor = newColor;
  button.style.color = newColor;
});
