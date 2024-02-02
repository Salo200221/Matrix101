function checkPassword() {
    var enteredPassword = document.getElementById('password').value;
    if (enteredPassword === '2000174786') {
        // Hier könntest du die Logik für den Übergang zum Live-Chat hinzufügen
        alert('Correct password! You are now entering the Live Chat.');
    } else {
        alert('Incorrect password. Try again.');
    }
}
