document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('dark');
        body.classList.remove('light');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    feather.replace();
});