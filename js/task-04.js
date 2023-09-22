const btnElIncreamentEl = document.querySelector('[data-action="increment"]')
const spanValueEl = document.querySelector('#value')
const btnEldecrementtEl = document.querySelector('[data-action="decrement"]')
let number = 0;
btnElIncreamentEl.addEventListener('click', (event) => {
    number += 1;
    spanValueEl.innerHTML = number;
})
btnEldecrementtEl.addEventListener('click', () => {
    number -= 1;
    spanValueEl.innerHTML = number;
})