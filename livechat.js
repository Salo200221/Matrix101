function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    
    if (password === "2000174786") {
        document.getElementById("chat-popup").style.display = "block";
    } else {
        alert("Incorrect code. Try again.");
    }
}

function sendMessage() {
    var message = document.getElementById("messageInput").value;
    document.getElementById("chatArea").innerHTML += "<p>You: " + message + "</p>";
    document.getElementById("messageInput").value = "";
}
