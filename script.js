// Check and load saved theme from localStorage
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme); // Apply saved theme
        document.getElementById('themeSelect').value = savedTheme; // Set the dropdown to the saved theme
    }
};

// Change theme based on user's selection and save it in localStorage
document.getElementById('themeSelect').addEventListener('change', function(event) {
    const selectedTheme = event.target.value;

    // Remove previous theme class
    document.body.classList.remove('light', 'dark');

    // Add new theme class
    document.body.classList.add(selectedTheme);

    // Save the theme to localStorage
    localStorage.setItem('theme', selectedTheme);
});

// Trigger button animation
document.getElementById('animateButton').addEventListener('click', function() {
    const image = document.getElementById('animateImage');

    // Add animation class to trigger rotation
    image.classList.add('animated');

    // Remove animation class after animation completes (1s)
    setTimeout(() => {
        image.classList.remove('animated');
    }, 1000);
});
