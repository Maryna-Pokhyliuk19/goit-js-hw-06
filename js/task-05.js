
const textInput = document.querySelector('#name-input');
const spanInput = document.querySelector('#name-output')

textInput.addEventListener("input", handleTextInputClick)


function handleTextInputClick(event) {
    spanInput.textContent = textInput.value
    //  console.log(event.currentTarget.value)
    }