document.getElementById('registration').addEventListener('submit', function (e) {
    const form = e.target;

    /* Έλεγχοι (απαιτούνται τουλάχιστον 3)
    Έλεγχος για το όριο ηλικίας */
    const birthdate = new Date(form.birthdate.value);
    const age = new Date().getFullYear() - birthdate.getFullYear();
    if (age < 18) {
        alert('Πρέπει να είστε άνω των 18 ετών για να ολοκληρωθεί η εγγραφή.');
        e.preventDefault();
        return;
    }

    /* Έλεγχος για το αν οι κωδικοί που δόθηκαν είναι ίδιοι */
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;
    if (password !== confirmPassword) {
        alert('Οι κωδικοί δεν ταιριάζουν.');
        e.preventDefault();
        return;
    }

    /* Τουλάχιστον μία επιλογή επικοινωνίας */
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
        alert('Επιλέξτε τουλάχιστον μία επιλογή επικοινωνίας.');
        e.preventDefault();
    }
});
