document.addEventListener('DOMContentLoaded', () => {
    // Handle "Get Started" form submission (index.html)
    const getStartedForm = document.getElementById('getStartedForm');
    const formMessage = document.getElementById('formMessage');

    if (getStartedForm) {
        getStartedForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // Basic client-side validation
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;

            if (fullName.trim() === '' || email.trim() === '') {
                displayMessage(formMessage, 'Please fill in all required fields.', 'error');
                return;
            }

            // In a real application, you would send this data to a server here.
            // Example: using fetch API
            /*
            fetch('/api/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    phone: document.getElementById('phone').value,
                    taxYear: document.getElementById('taxYear').value,
                    servicesNeeded: document.getElementById('servicesNeeded').value
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    displayMessage(formMessage, 'Thank you! We have received your information and will be in touch shortly.', 'success');
                    getStartedForm.reset();
                } else {
                    displayMessage(formMessage, 'There was an error submitting your information. Please try again later.', 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                displayMessage(formMessage, 'An unexpected error occurred. Please try again.', 'error');
            });
            */

            // For demonstration purposes:
            displayMessage(formMessage, 'Thank you! We have received your information and will be in touch shortly.', 'success');
            getStartedForm.reset(); // Clear the form after "submission"
            console.log('Get Started Form Submitted (Client-side):', {
                fullName: fullName,
                email: email,
                phone: document.getElementById('phone').value,
                taxYear: document.getElementById('taxYear').value,
                servicesNeeded: document.getElementById('servicesNeeded').value
            });
        });
    }

    // Handle Contact form submission (contact.html)
    const contactForm = document.getElementById('contactForm');
    const contactFormMessage = document.getElementById('contactFormMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // Basic client-side validation
            const contactName = document.getElementById('contactName').value;
            const contactEmail = document.getElementById('contactEmail').value;
            const contactMessage = document.getElementById('contactMessage').value;

            if (contactName.trim() === '' || contactEmail.trim() === '' || contactMessage.trim() === '') {
                displayMessage(contactFormMessage, 'Please fill in all required fields.', 'error');
                return;
            }

            // In a real application, you would send this data to a server.
            // For now, simulate success:
            displayMessage(contactFormMessage, 'Your message has been sent successfully. We will get back to you soon!', 'success');
            contactForm.reset(); // Clear the form
            console.log('Contact Form Submitted (Client-side):', {
                name: contactName,
                email: contactEmail,
                subject: document.getElementById('contactSubject').value,
                message: contactMessage
            });
        });
    }

    // Function to display form messages
    function displayMessage(element, message, type) {
        element.textContent = message;
        element.className = 'form-message ' + type; // Add type class (success/error)
        element.style.display = 'block'; // Show the message
        setTimeout(() => {
            element.style.display = 'none'; // Hide after a few seconds
            element.textContent = '';
        }, 7000); // Hide after 7 seconds
    }
});
