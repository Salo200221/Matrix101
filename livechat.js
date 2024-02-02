function checkPassword() {
    var enteredPassword = document.getElementById('password').value;

    if (enteredPassword === '2000174786') {
        // If the password is correct, open the live chat
        openLiveChat();
    } else {
        alert('Incorrect password. Try again.');
    }
}

function openLiveChat() {
    // Implement the logic to open the live chat here
    alert('Live chat is now open!');
}
