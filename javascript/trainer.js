document.addEventListener('DOMContentLoaded', () => {
  const hireButtons = document.querySelectorAll('.btn-contratar');

  hireButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const trainerName = event.target.parentElement.querySelector('h2').textContent;
      alert(`Has contratado a ${trainerName}. ¡Buena suerte con tus entrenamientos!`);
      event.stopPropagation(); // Detiene la propagación del evento para evitar que se propague al botón 'Regresar'
    });
  });

  const backButton = document.querySelector('.btn-back');
  backButton.addEventListener('click', () => {
    history.back(); // Regresa a la página anterior
  });
});
