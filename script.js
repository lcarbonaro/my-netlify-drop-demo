const btnSubmit = document.querySelector('#btnSubmit');
const contactForm = document.querySelector('form#frmContact');
btnSubmit.addEventListener('click', submitForm);

async function submitForm() {
    let resp = await fetch('/.netlify/functions/testFunc');
    let respJson = await resp.json();
    console.log(respJson);

}