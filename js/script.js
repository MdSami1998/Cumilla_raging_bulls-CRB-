document.getElementById('log-in').addEventListener('click', function () {
    const userMail = document.getElementById('email');
    const emailValue = userMail.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;
    if (emailValue == 'cumillaragingbulls@gmail.com' && passwordValue == 'crb12') {
        window.location.href = 'crbPage.html';
    }
    else {
        const errorMessage = document.getElementById('error-handle');
        errorMessage.style.display = 'block';
    }
}) 