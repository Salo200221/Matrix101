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
    displayBinaryCode('The Matrix is a system, Neo.');
    displayMessage('Nothing is as it seems, Philipp... Look around, what do you see?');
}

function displayBinaryCode(text) {
    var binaryCodeElement = document.getElementById('binary-code');
    var binaryCode = text.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
    binaryCodeElement.textContent = binaryCode;
}

function displayMessage(message) {
    var messageElement = document.getElementById('message');
    var index = 0;

    function typeWriter() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}
