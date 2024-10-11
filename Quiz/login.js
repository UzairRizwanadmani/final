
const switchSignUpButton = document.getElementById('signUp'); 
const switchSignInButton = document.getElementById('signIn');  
const container = document.querySelector('.container');

switchSignUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

switchSignInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
t
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    const storedUser = JSON.parse(localStorage.getItem(email));

    if (!storedUser) {
        alert("User not found. Please sign up first.");
    } else if (storedUser.password === password) {
        alert("Sign In Successful!");
        
    } else {
        alert("Incorrect password.");
    }
});


document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
    } else {
        const user = { name, password };
        localStorage.setItem(email, JSON.stringify(user));
        alert("Sign Up Successful!");
    }
});
