document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validatePanCard();
});

function validatePanCard() {
    const panCard = document.getElementById('panCard').value;
    const errorMessage = document.getElementById('error-message');
    const panCardPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panCardPattern.test(panCard)) {
        errorMessage.style.display = 'none';
        alert('Valid PAN Number');
    } else {
        errorMessage.style.display = 'inline';
        errorMessage.textContent = 'Invalid PAN Number';
    }
}
