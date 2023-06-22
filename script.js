document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'flag{COOKIEMDP}') {
      // Authentification réussie
      window.location.href = 'dashboard.html'; // Rediriger vers la page du tableau de bord
    } else {
      // Authentification échouée
      var errorMessage = document.querySelector('.error-message');
      errorMessage.textContent = 'Identifiant ou mot de passe incorrect.';
    }
  });