const messagesContainer = document.getElementById('messages');
const messageField = document.getElementById('messageField');
const sendButton = document.getElementById('sendButton');

// Load messages from localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messagesContainer.innerHTML = '';
    messages.forEach(msg => {
        const div = document.createElement('div');
        div.className = 'message ' + (msg.user ? 'user' : 'other');
        div.textContent = msg.text;
        messagesContainer.appendChild(div);
    });
}

// Save message to localStorage
function saveMessage(text, user) {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push({ text, user });
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Send button click handler
sendButton.addEventListener('click', () => {
    const messageText = messageField.value.trim();
    if (messageText) {
        saveMessage(messageText, true); // true indicates a user message
        loadMessages(); // Refresh message list
        messageField.value = ''; // Clear input field
    }
});

// Load messages when the page is loaded
window.onload = loadMessages;
