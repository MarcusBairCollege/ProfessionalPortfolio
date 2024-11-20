var images = ["image-1", "image-2", "image-3"], x = 0;

function displayNextImage() {
    var containerElement = document.querySelector(".container");
    containerElement.classList.add("fade-out");

    setTimeout(function() {
        x = (x + 1) % images.length;
        containerElement.className = `container ${images[x]}`;
        setTimeout(function() {
            containerElement.classList.remove("fade-out");
        }, );
    }, 600);
}

function startTimer() {
    setInterval(displayNextImage, 3500); // Change every 5 seconds
}

function redirectToSignUpPage() { 
    window.location.href = 'Signup2.html'; 
}

function redirectToLogInPage() { 
    window.location.href = 'Signup.html'; 
}

