document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'flag{COOKIEMDP}') {
      
      window.location.href = 'succes.html';
    } else {

      var errorMessage = document.querySelector('.error-message');
      errorMessage.textContent = 'Identifiant ou mot de passe incorrect.';
    }
  });