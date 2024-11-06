// textArea.js

// Selecciona el botón y el textarea
const button = document.getElementById('toggle-button');
// Añade un evento de clic al botón
button.addEventListener('click', () => {
    // Alterna la clase 'hidden' en el textarea
    textarea.classList.toggle('hidden');
});

// Si ya tienes algún otro código que se encargue de los eventos del textarea, puedes dejarlo tal como está.
textarea.addEventListener('input', () => {
    textarea.style = `height: 65px`;
    const height = textarea.scrollHeight;
    textarea.style = `height: ${height}px`;
});
