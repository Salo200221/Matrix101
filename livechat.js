function checkPassword() {
    var enteredPassword = document.getElementById('password').value;
    if (enteredPassword === '2000174786') {
        showHiddenContent();
    } else {
        alert('Incorrect password. Try again.');
    }
}

function showHiddenContent() {
    document.getElementById('hidden-content').style.display = 'block';
}
