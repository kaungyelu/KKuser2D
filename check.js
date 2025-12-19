// check.js ကို ဒီလိုပြင်ပါ
(async function() {
    const savedName = localStorage.getItem('name');
    const savedPassword = localStorage.getItem('pw');
    
    if (!savedName || !savedPassword) {
        window.location.href = 'index.html';
        return;
    }
    
    try {
        // Supabase client သုံးပါ
        const supabase = window.supabase.createClient(
            'https://ugfmzaxrbxvjecqpezdm.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZm16YXhyYnh2amVjcXBlemRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5OTc0NDMsImV4cCI6MjA4MDU3MzQ0M30.rEjWWdKVc_oikOFzQeBJ3I1j3Xke4Pla5DMbsQtugjU'
        );
        
        const { data: Login, error } = await supabase
            .from('Login')
            .select('*')
            .eq('name', savedName)
            .eq('pw', savedPassword);
        
        if (error || !Login || Login.length === 0) {
            window.location.href = 'index.html';
            return;
        }
        
        console.log('Authentication successful');
        
    } catch (error) {
        console.error('Error:', error);
        window.location.href = 'index.html';
    }
})();
