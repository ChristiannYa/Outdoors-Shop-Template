document.getElementById('menu-button-wrapper').addEventListener('click', function () {
    const navContent = document.querySelector('.nav-content');
    navContent.classList.toggle('responsive');
});

// Optional: Close menu when clicking outside
document.addEventListener('click', function (event) {
    const navContent = document.querySelector('.nav-content');
    const menuButton = document.getElementById('menu-button-wrapper');

    if (!navContent.contains(event.target) && !menuButton.contains(event.target)) {
        navContent.classList.remove('responsive');
    }
});

