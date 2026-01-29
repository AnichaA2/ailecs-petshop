document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('successMsg').style.display = 'block';
    this.reset();
    setTimeout(function() {
        document.getElementById('successMsg').style.display = 'none';
    }, 3000);
});
