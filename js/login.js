//auth init
const auth = new Auth();

//alert init
const alert = new AuthAlert();

//init user
const user = User.getInstance();

//init elements
const form = document.forms['login-form'];
const emailInput = form.elements['email'];
const passwordInput = form.elements['password'];

//Check auth
firebase.auth().onAuthStateChanged(function(user) {
    if (user) window.location = 'home.html';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(emailInput.value && passwordInput.value) {
        auth.login(emailInput.value, passwordInput.value)
            .then(() => {
                window.location = 'home.html';
            })
            .catch(({code, message}) => alert.showAlert(message));

    }
});

