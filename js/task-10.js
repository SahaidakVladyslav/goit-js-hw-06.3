function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const generalDivEl = document.querySelector('#controls')

const inputEl = document.querySelector('input')
const btnCreateEl = document.querySelector('[data-create]')
const btnDestroyEl = document.querySelector('[data-destroy]')

const boxesEl = document.querySelector('#boxes')

const createBoxesFun = number => {
  let widthAndHeigth = 30;
  for (let i = 0; i < number; i += 1) {
    const element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = widthAndHeigth + 'px';
    element.style.height = widthAndHeigth + 'px';
    boxesEl.append(element)
    inputEl.value = '';
    widthAndHeigth += 10;
  }
}

const destroyBoxesFun = () => {
  boxesEl.innerHTML = ''
}


btnCreateEl.addEventListener('click', (event) => {
  createBoxesFun(inputEl.value)
  console.log(+inputEl.value)
})


btnDestroyEl.addEventListener('click', () => {
  destroyBoxesFun()
})