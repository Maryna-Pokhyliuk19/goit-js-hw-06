const input = document.querySelector("#font-size-control")
const span = document.querySelector("#text")


input.addEventListener("input",onChangeStyle)

function onChangeStyle(event) {
   
    span.style.fontSize = `${input.value}px`
}