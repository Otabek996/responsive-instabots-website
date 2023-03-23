/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navOpen = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        navOpen.classList.toggle('hidden-icon');
        navClose.classList.toggle('show-icon');
    });
}

/*===== MENU HIDDEN =====*/
// if (navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu');
//         navOpen.classList.remove('hidden-icon');
//         navClose.classList.remove('show-icon');
//     });
// }