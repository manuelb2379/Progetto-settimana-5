# Progetto-settimana-5

# Bloom — Studio di design
 
Landing page one-page per un ipotetico studio di design, realizzata con HTML, CSS e JavaScript.
 
## Sezioni
 
- **Header**: logo, menu con link interni alle varie sezioni e pulsante tema chiaro/scuro
- **Hero**: titolo, sottotitolo e pulsante "Richiedi preventivo"
- **Lavori**: 6 card con immagini segnaposto
- **Servizi**: 3 card (Identità visiva, Web design, Motion graphic)
- **Team**: 3 card con le iniziali dentro un cerchio
- **Footer**: logo, descrizione, 3 icone social e copyright

## Cosa ho usato
 
- **Mobile-first**: si parte dal layout mobile e si adatta con due media query, a `768px` (tablet) e `992px` (desktop)
- **Flexbox** per tutti i layout. Le card sono in 1 colonna su mobile, 2 su tablet, 3 su desktop
- **Larghezza massima di 980px** per header, contenuto e footer
- **Tema chiaro/scuro**: il pulsante in JavaScript aggiunge o toglie la classe `dark-mode` sul `body`
- **Header sticky e modifica allo scroll**: tramite la funzione in Javascript e con le modifiche al css l'header si sposta e si modifica dopo aver scrollato più di 100px
- **Animazione di entrata** nella hero con `@keyframes` (fade-in e `translateY`), con elementi che entrano uno dopo l'altro
- **Effetto hover** sulle card, che si sollevano leggermente
- **Accessibilità**: media query `prefers-reduced-motion` per ridurre le animazioni

## Struttura
 
```
index.html
assets/
  css/style.css
  js/script.js
  img/works.png
```
 
## Da completare
 
- Modale "Richiedi preventivo"
- Carousel dei testimonial
 