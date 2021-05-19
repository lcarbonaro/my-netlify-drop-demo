const btnSubmit = document.querySelector('#btnSubmit');
const contactForm = document.querySelector('form#frmContact');
btnSubmit.addEventListener('click', submitForm);

async function submitForm() {
    let formData = new FormData(contactForm);
    var fdObj = {};
    formData.forEach(function(value, key){
        fdObj[key] = value;
    });
    let resp = await fetch('/.netlify/functions/testFunc', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(fdObj)
    });
    //let resp = await fetch('/.netlify/functions/testFunc');
    let respJson = await resp.json();
}