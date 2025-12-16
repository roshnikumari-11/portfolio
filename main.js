const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
        // update aria-expanded for accessibility
        const expanded = menuIcon.getAttribute('aria-expanded') === 'true';
        menuIcon.setAttribute('aria-expanded', String(!expanded));
    });

    // close menu when any link is clicked
    document.querySelectorAll('#nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
            menuIcon.setAttribute('aria-expanded', 'false');
        });
    });
}

// Contact buttons are simple links (mailto / Gmail compose) — no JS required here.