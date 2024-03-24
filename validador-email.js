document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const submitBtn = document.getElementById("submitBtn");
    const messageDiv = document.getElementById("message");

    emailInput.addEventListener("input", function() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailError.textContent = "Por favor, insira um endereço de e-mail válido.";
            emailError.style.color = "red";
        } else {
            emailError.textContent = "";
        }
    });

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailError.textContent = "Por favor, insira um endereço de e-mail válido.";
            emailError.style.color = "red";
            event.preventDefault();
        } else {
            // Impede o envio padrão do formulário
            event.preventDefault();
            // Exibe a mensagem de sucesso
            messageDiv.textContent = "Newsletter enviado com sucesso!";
            messageDiv.style.color = "green";
            // Limpa o formulário
            contactForm.reset();
        }
    });
});
