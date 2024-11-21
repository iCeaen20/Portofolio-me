document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Proses pengiriman form (ini hanya simulasi)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    
    // Tampilkan pesan sukses
    document.getElementById('success-message').textContent = "Thank you for reaching out! I'll get back to you soon.";
    
    // Kosongkan form
    document.getElementById('contact-form').reset();
});
