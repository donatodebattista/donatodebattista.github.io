const btn = document.getElementById('send-email-button');
const email_input = document.getElementById('from_email');
const message = document.getElementById('message');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_d6utczb';

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