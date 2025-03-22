document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the form data to a server or an email service

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contact-form').reset(); // Reset the form
});