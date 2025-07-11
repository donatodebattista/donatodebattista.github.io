const btn = document.getElementById('send-email-button');
const email_input = document.getElementById('from_email');
const message = document.getElementById('message');

const toggle = document.getElementById("bars-navbar-btn");
const dropdown = document.getElementById("dropdownMenu");


const texto = "Desarrollador Web";
let i = 0;
const velocidad = 200;


function escribir() {
    if (i < texto.length) {
        document.getElementById("escribir-texto").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, velocidad);
    }
}

escribir();

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_dy531ev';
   const templateID = 'template_t8adorc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar email';
      email_input.value = '';
      message.value = '';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar email';
      email_input.value = '';
      message.value = '';
      alert(JSON.stringify(err));
    });
});





toggle.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});