function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color")
const body = document.querySelector("body")
const color = document.querySelector(".color")

// console.log(button)

const span = document.querySelector(".color")

// console.log(span)

button.addEventListener("click", onChangeStyle)


function onChangeStyle() {
  const changeColor = getRandomHexColor()

  color.textContent = `${changeColor}`
  body.style.backgroundColor = `${changeColor}`
}




