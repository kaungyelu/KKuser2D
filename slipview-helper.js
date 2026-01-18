// slipview-helper.js
// Helper functions for slipview.html

// Function to show notification message
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        border-radius: 5px;
        background: ${type === 'error' ? '#e74c3c' : type === 'success' ? '#2ecc71' : '#3498db'};
        color: white;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        font-family: 'Pyidaungsu', sans-serif;
        animation: slideDown 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            document.body.removeChild(notification);
        }
    }, 3000);
}

// Function to format date in Burmese style
function formatBurmeseDate(dateString) {
    try {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    } catch (e) {
        return 'Invalid Date';
    }
}

// Function to validate number input
function validateNumberInput(input) {
    const value = input.value.trim();
    if (value === '') return true;
    
    const num = parseInt(value);
    if (isNaN(num) || num < 0 || num > 99) {
        showNotification('Please enter number between 00-99', 'error');
        input.value = '';
        input.focus();
        return false;
    }
    
    return true;
}

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('slipview-helper.js loaded successfully');
