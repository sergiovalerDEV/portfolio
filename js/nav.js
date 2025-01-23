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

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (event) => {
        if (!navContent.contains(event.target) && !menuToggle.contains(event.target)) {
            navContent.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Cerrar menú al hacer clic en un enlace de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navContent.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Manejar el cambio de tema
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        html.classList.toggle('light');
        
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Inicializar el tema
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        html.classList.remove('light');
    } else {
        html.classList.add('light');
        html.classList.remove('dark');
    }

    // Asegurarse de que los iconos se rendericen correctamente
    feather.replace();
});