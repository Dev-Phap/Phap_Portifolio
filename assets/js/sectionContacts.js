
/*  inicializar o emailsjs */
emailjs.init("F25S4rdKnSVkJYtzt");



const form = document.getElementById("talkToMe");

form.addEventListener("submit", function (email) {
  email.preventDefault();

  emailjs.sendForm("service_k2lpvla", "template_vskqn18", this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.reset(); // Limpa o formulário após envio
    }, (error) => {
      alert("Erro ao enviar: " + error.text);
    });
});