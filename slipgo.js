// check.js ထဲမှာ ဒီ code ကို ထည့်ပါ
document.addEventListener('DOMContentLoaded', function() {
    const activeTimeDisplay = document.getElementById('activeTimeDisplay');
    
    if (activeTimeDisplay) {
        activeTimeDisplay.addEventListener('click', function() {
            navigateToSlipView();
        });
        
        // Make it look clickable
        activeTimeDisplay.style.cursor = 'pointer';
        activeTimeDisplay.style.textDecoration = 'underline';
        activeTimeDisplay.title = 'Slip View သို့သွားရန် နှိပ်ပါ';
    }
});
