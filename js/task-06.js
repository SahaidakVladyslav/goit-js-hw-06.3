const inputEl = document.querySelector('[data-length="6"]');

inputEl.addEventListener('input', (event) => {
    event.currentTarget.value.length === 6 ? inputEl.classList.replace('invalid', 'valid') : inputEl.classList.add('invalid');
})

console.log(`asdf`)