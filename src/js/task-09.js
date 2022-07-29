const button = document.querySelector(".change-color")

console.log(button)

const span = document.querySelector(".color")

console.log(span)

button.addEventListener("click", onChangeStyle)



function onChangeStyle(event, getRandomHexColor) {
  return span.style.color
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


