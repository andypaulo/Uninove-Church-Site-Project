export function showError(message) {
    const errorBox = document.getElementById('errorBox');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = message;
     errorBox.style.display = 'flex';

    clearTimeout(window.errorTimeout);
    window.errorTimeout = setTimeout(() => hideError(), 5000);
}

export function hideError() {
     const errorBox = document.getElementById('errorBox');
     errorBox.style.display = 'none';
}    