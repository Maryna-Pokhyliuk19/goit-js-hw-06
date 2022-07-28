let counterValue = 0

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');



decrementButton.addEventListener("click", handleDecrementButtonClick);
incrementButton.addEventListener("click", handleInCrementButtonClick);



function handleDecrementButtonClick()  {
    counterValue -= 1
    counter.textContent = counterValue
}
    
function handleInCrementButtonClick() {
    counterValue += 1
    counter.textContent = counterValue
}




