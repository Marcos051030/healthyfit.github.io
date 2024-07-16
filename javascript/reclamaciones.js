document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const typeSelect = document.getElementById("type");
    const detailsTextarea = document.getElementById("details");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const type = typeSelect.value;
        const details = detailsTextarea.value.trim();

        if (!name) {
            alert("Por favor, ingresa tu nombre.");
            nameInput.focus();
            return;
        }

        if (!email) {
            alert("Por favor, ingresa tu correo electrónico.");
            emailInput.focus();
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            emailInput.focus();
            return;
        }

        if (!type) {
            alert("Por favor, selecciona un tipo de reclamación.");
            typeSelect.focus();
            return;
        }

        if (!details) {
            alert("Por favor, describe tu reclamación o sugerencia.");
            detailsTextarea.focus();
            return;
        }

        // Aquí puedes agregar la lógica para enviar los datos al servidor.
        console.log({
            name,
            email,
            type,
            details
        });

        alert("Reclamación enviada exitosamente.");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
