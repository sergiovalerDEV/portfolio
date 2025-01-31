document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContent = document.querySelector('.nav-content');
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        navContent.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navContent.contains(event.target) && !menuToggle.contains(event.target)) {
            navContent.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContent.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        html.classList.toggle('light');
        
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        html.classList.remove('light');
    } else {
        html.classList.add('light');
        html.classList.remove('dark');
    }

    feather.replace();
});