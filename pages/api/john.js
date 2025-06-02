// Replace the addMessage function in your HTML with this updated version:

function addMessage(sender, text, isUser, data) {
    isUser = isUser || false;
    data = data || null;
    
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    
    const avatarClass = isUser ? 'user-avatar' : 'herald-message-avatar';
    const avatarText = isUser ? 'You' : 'J';
    const senderName = isUser ? 'You' : 'John';
    
    let imageHtml = '';
    if (data && data.easter_egg && data.image_url) {
        imageHtml = '<img src="' + data.image_url + '" alt="John\'s Hebrew Name" class="easter-egg-image">';
    }
    
    // Add verse text display if available
    let verseHtml = '';
    if (data && data.verse_text) {
        verseHtml = '<div style="background: var(--bg-glass); border: 1px solid var(--border-primary); border-radius: 12px; padding: 1rem; margin: 0.5rem 0; font-style: italic; color: var(--text-secondary);">' +
                   '<strong style="color: var(--accent-primary);">' + data.verse_text.reference + ' (' + data.verse_text.translation + '):</strong><br>' +
                   '"' + data.verse_text.text + '"' +
                   '</div>';
    }
        
    messageEl.innerHTML = 
        '<div class="message-avatar ' + avatarClass + '">' + avatarText + '</div>' +
        '<div class="message-content">' +
            '<div class="message-header">' + senderName + '</div>' +
            verseHtml +
            '<div class="message-text">' + text + '</div>' +
            imageHtml +
        '</div>';
    
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageEl;
}

// Also update the sendVerse function to pass the full data object:

async function sendVerse() {
    const verse = verseInput.value.trim();
    if (!verse) return;

    // Add user message
    addMessage('You', verse, true);
    
    // Clear input and disable button
    verseInput.value = '';
    sendButton.disabled = true;
    sendButton.textContent = 'Reflecting...';
    
    // Show typing indicator
    const typingEl = showTyping();
    
    try {
        const response = await fetch('/api/john', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ verse }),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Failed to get response');
        }
        
        // Remove typing indicator
        typingEl.remove();
        
        // Add John's response with typing effect, including verse text and easter egg data
        const johnMessage = addMessage('John', '', false, data);
        typeText(johnMessage, data.message);
        
    } catch (error) {
        // Remove typing indicator
        typingEl.remove();
        
        // Show error message
        addMessage('John', 'I apologize, beloved friend, but I am unable to respond at this moment. Please try again shortly.');
        console.error('Error:', error);
    } finally {
        // Re-enable button
        sendButton.disabled = false;
        sendButton.textContent = 'Ask John';
        verseInput.focus();
    }
}
