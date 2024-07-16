document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a elementos del DOM
    const numeroTarjetaInput = document.getElementById('numero-tarjeta');
    const mesExpiracionSelect = document.getElementById('mes-expiracion');
    const anoExpiracionSelect = document.getElementById('ano-expiracion');
    const cvcInput = document.getElementById('cvc');
    const direccionFacturacionTextarea = document.getElementById('direccion-facturacion');
    const terminosCheckbox = document.getElementById('terminos');
    const realizarPedidoButton = document.querySelector('.button');

    // Agregar eventos o funciones según sea necesario
    realizarPedidoButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir envío por defecto del formulario

        // Validar los campos antes de enviar el formulario
        if (!validarCampos()) {
            alert('Por favor complete todos los campos correctamente.');
            return;
        }

        // Aquí podrías enviar los datos del formulario a tu servidor, por ejemplo:
        enviarDatosAlServidor();
    });

    // Función para validar los campos del formulario
    function validarCampos() {
        // Ejemplo de validación básica
        if (numeroTarjetaInput.value.trim() === '') {
            return false;
        }
        if (mesExpiracionSelect.value === '' || anoExpiracionSelect.value === '' || cvcInput.value.trim() === '') {
            return false;
        }
        if (direccionFacturacionTextarea.value.trim() === '' || !terminosCheckbox.checked) {
            return false;
        }
        return true;
    }


    }
);
