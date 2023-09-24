
const formEl = document.querySelector('.login-form');
const emailEl = Array.from(formEl)[0];
const passwordEl = Array.from(formEl)[1];
const btnEl = Array.from(formEl)[2];

const dataCustomers = {};

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailEl.value === '' || passwordEl.value === '') {
        alert("mammmaba");
    } else {
        dataCustomers.email = emailEl.value;
        dataCustomers.password = passwordEl.value;
        console.log(dataCustomers);
        formEl.reset();
    }

})

