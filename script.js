function redirectToApp() {
    window.location.href = "app.html";
}

function startTransition() {
    const button = document.querySelector('.start-btn');
    const startImage = document.querySelector('.start-image'); // Assuming the image has this class

    // Add a class to animate the button and image moving down
    button.classList.add('move-down');
    startImage.classList.add('move-down');

    // Wait for the animation to complete before redirecting
    setTimeout(() => {
        redirectToApp();
    }, 1000); // Adjust the duration to match the CSS transition
}
