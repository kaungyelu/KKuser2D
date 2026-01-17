// slip.html ရဲ့ JavaScript ထဲမှာ
document.addEventListener('DOMContentLoaded', function() {
    // URL parameters ကို လက်ခံ
    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    
    if (date && time) {
        // Active time display ကို update
        document.getElementById('activeTimeDisplay').textContent = date + ' ' + time;
        
        // Link များကို parameters ပါအောင် update
        document.querySelector('header h1').onclick = function() {
            window.location.href = 'slipview.html?date=' + encodeURIComponent(date) + '&time=' + encodeURIComponent(time);
        };
        
        document.getElementById('activeTimeDisplay').onclick = function() {
            window.location.href = 'slipall.html?date=' + encodeURIComponent(date) + '&time=' + encodeURIComponent(time);
        };
    }
});
