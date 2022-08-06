
const textInput = document.querySelector('#name-input');
const spanInput = document.querySelector('#name-output')

textInput.addEventListener("input", handleTextInputClick)


function handleTextInputClick() {
    spanInput.textContent = textInput.value

    if (spanInput.value === '') {
        spanInput.textContent = 'Anonymous'
    }
    
    }