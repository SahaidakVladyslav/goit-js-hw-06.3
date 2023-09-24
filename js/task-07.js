const inputEl = document.querySelector('#font-size-control');
const outputEl = document.querySelector('#text');

outputEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', (event) => {
    outputEl.style.fontSize = inputEl.value + 'px';
})

