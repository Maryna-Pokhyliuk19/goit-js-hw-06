const input = document.querySelector("#validation-input")

// console.log(input.dataset.length)

input.addEventListener("blur", onCheckInputLength)

function onCheckInputLength() {
    console.log(input.value.length)
    if (Number(input.dataset.length) === input.value.length) {
        input.classList.remove("invalid")
        input.classList.add("valid")
        return 
    }
    
    input.classList.remove("valid")
    input.classList.add("invalid")
    }


