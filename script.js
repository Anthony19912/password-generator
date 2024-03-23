document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-btn');
    const passwordField = document.getElementById('password');

    const generatePassword = () => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
        let password = '';

        for (let i = 0; i < 20; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        return password;
    };

    generateButton.addEventListener('click', () => {
        const newPassword = generatePassword();
        passwordField.value = newPassword;
    });
});

