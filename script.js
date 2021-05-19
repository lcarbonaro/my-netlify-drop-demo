const btnSubmit = document.querySelector('#btnSubmit');
const contactForm = document.querySelector('form#frmContact');
btnSubmit.addEventListener('click', submitForm);

async function submitForm() {
    let formData = new FormData(contactForm);
    let resp = await fetch('/.netlify/functions/testFunc', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });
    //let resp = await fetch('/.netlify/functions/testFunc');
    let respJson = await resp.json();
}