// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.


// aggiungo il click al bottone tema scuro e chiaro

const themeToggleBtn = document.querySelector('#themeToggle');

themeToggleBtn.addEventListener('click', function () {
    // alterna la classe 'dark-mode' sul body
    document.body.classList.toggle('dark-mode');

    // cambia il testo e l'icona dentro il bottone
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});


//header che cambia allo scroll
const siteHeader = document.querySelector('#siteHeader');

window.addEventListener('scroll', (e) => {
    e.preventDefault();

    if (window.scrollY > 100) { //quanti px scorre l'utente
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
});
