document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form validation
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
        } else {
            alert("Thank you for your message!");
            // Here you can add AJAX to send the form data to the server
        }
    });

    // Add to cart functionality (dummy)
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            alert(this.previousElementSibling.textContent + " has been added to your cart.");
        });
    });
    
    // Animated text functionality
    const animatedText = document.querySelector('.animated-text');
    const container = document.querySelector('.animated-text-container');

    function resetAnimation() {
        animatedText.style.transform = 'translateX(100%)';
        animatedText.style.transition = 'none';
        requestAnimationFrame(() => {
            animatedText.style.transition = 'transform 10s linear';
            animatedText.style.transform = 'translateX(-100%)';
        });
    }

    animatedText.addEventListener('animationiteration', resetAnimation);
    resetAnimation();
});
