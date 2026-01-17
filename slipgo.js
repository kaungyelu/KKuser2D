// check.js - Add this function
function initSlipViewNavigation() {
    // Make active time display clickable
    const activeTimeDisplay = document.getElementById('activeTimeDisplay');
    
    if (activeTimeDisplay) {
        activeTimeDisplay.addEventListener('click', function() {
            const activeTime = this.textContent.trim();
            
            if (activeTime && activeTime !== 'Loading...' && activeTime !== 'No Active Time Selected') {
                // Create URL parameters
                let url = 'slipview.html?';
                
                // Check format "DD/MM/YYYY HH:MM"
                if (activeTime.match(/\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}/)) {
                    const [datePart, timePart] = activeTime.split(' ');
                    url += `date=${encodeURIComponent(datePart)}&time=${encodeURIComponent(timePart)}`;
                } else {
                    url += `key=${encodeURIComponent(activeTime)}`;
                }
                
                window.location.href = url;
            } else {
                showAlert('ကျေးဇူးပြု၍ အချိန်တစ်ခုရွေးပါ။', 'warning');
            }
        });
        
        // Add clickable style
        activeTimeDisplay.style.cursor = 'pointer';
        activeTimeDisplay.style.transition = 'all 0.3s';
        activeTimeDisplay.addEventListener('mouseover', function() {
            this.style.color = '#3498db';
            this.style.textDecoration = 'underline';
        });
        activeTimeDisplay.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.textDecoration = '';
        });
        activeTimeDisplay.title = 'Slip View သို့သွားရန် နှိပ်ပါ';
    }
    
    // Also add a separate button if needed
    const slipViewBtn = document.createElement('button');
    slipViewBtn.id = 'slipViewBtn';
    slipViewBtn.innerHTML = '📋 Slip View';
    slipViewBtn.style.cssText = `
        background: linear-gradient(to right, #3498db, #2980b9);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;
        font-family: 'Pyidaungsu', sans-serif;
    `;
    slipViewBtn.addEventListener('click', function() {
        const activeTimeDisplay = document.getElementById('activeTimeDisplay');
        if (activeTimeDisplay) {
            activeTimeDisplay.click();
        }
    });
    
    // Add button near active time display
    const header = document.querySelector('header');
    if (header && activeTimeDisplay) {
        header.appendChild(slipViewBtn);
    }
}

// Call this function in your existing initialization
// Example: in your existing DOMContentLoaded or init function
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    initSlipViewNavigation();
    // ... rest of your code ...
});
