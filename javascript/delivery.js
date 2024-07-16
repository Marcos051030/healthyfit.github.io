document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const metodoPago = document.getElementsByName('metodo-pago');
    const direccion = document.getElementById('direccion');
    const dni = document.getElementById('dni');
    const telefono = document.getElementById('telefono');
    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Validar campos
      if (validarFormulario()) {
        // Crear objeto de pedido
        const pedido = {
          nombre: nombre.value,
          metodoPago: obtenerMetodoPago(),
          direccion: direccion.value,
          dni: dni.value,
          telefono: telefono.value,
          correo: correo.value,
          contrasena: contrasena.value,
        };
  
        // Mostrar objeto de pedido en la consola (para pruebas)
        console.log('Pedido:', pedido);
  
        // Aquí puedes agregar la lógica para enviar el pedido a tu servidor
        alert('Pedido enviado exitosamente!');
  
        // Limpiar el formulario después de enviar el pedido
        form.reset();
      }
    });
  
    function validarFormulario() {
      if (nombre.value.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        nombre.focus();
        return false;
      }
      if (!obtenerMetodoPago()) {
        alert('Por favor, selecciona un método de pago.');
        return false;
      }
      if (direccion.value.trim() === '') {
        alert('Por favor, ingresa la dirección de entrega.');
        direccion.focus();
        return false;
      }
      if (dni.value.trim() === '') {
        alert('Por favor, ingresa tu DNI.');
        dni.focus();
        return false;
      }
      if (telefono.value.trim() === '') {
        alert('Por favor, ingresa tu número de teléfono.');
        telefono.focus();
        return false;
      }
      if (correo.value.trim() === '' || !validarCorreo(correo.value)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        correo.focus();
        return false;
      }
      if (contrasena.value.trim() === '') {
        alert('Por favor, ingresa tu contraseña.');
        contrasena.focus();
        return false;
      }
      return true;
    }
  
    function obtenerMetodoPago() {
      for (let i = 0; i < metodoPago.length; i++) {
        if (metodoPago[i].checked) {
          return metodoPago[i].value;
        }
      }
      return null;
    }
  
    function validarCorreo(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  