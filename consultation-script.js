// Consultation Form Handler
const consultationForm = document.getElementById('consultationForm');

if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            interest: document.getElementById('interest').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your interest! We will contact you soon.');

        // Reset form
        consultationForm.reset();

        // Optional: Redirect back to home page after submission
        // setTimeout(() => {
        //     window.location.href = 'index.html';
        // }, 2000);
    });
}
