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

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction () {
    navMenu.classList.remove('show-menu');
    navOpen.classList.toggle('hidden-icon');
    navClose.classList.toggle('show-icon');
}
navLink.forEach(n => n.addEventListener('click', linkAction));




navLink.forEach(m => m.addEventListener('click', () => {
    navLink.forEach(b => b.classList.remove('active-link'));
    m.classList.toggle('active-link');
}));

/*==================== SHOW FAQ ====================*/
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});