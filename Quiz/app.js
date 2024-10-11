const switchSignUpButton = document.getElementById('signUp');  // Button to switch panel
const switchSignInButton = document.getElementById('signIn');  // Button to switch panel
const container = document.querySelector('.container');

// Switch between Sign Up and Sign In panels
switchSignUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

switchSignInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Sign In form submission event
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    // Check if the user exists in localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (!storedUser) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "user not found first SignUp Please",
          });
    } else if (storedUser.password === password) {
        Swal.fire("Sign In Successfull");
        setInterval("9000");
        window.open("game.html","_self")

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect password.",
          });
    }
});

// Sign Up form submission event
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name === "" || email === "" || password === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all fields.",
          });
    } else {
        // Save user info to localStorage
        const user = { name, password };
        localStorage.setItem(email, JSON.stringify(user));
        Swal.fire("Sign Up Successfull");
        container.classList.remove('right-panel-active'); // Switch to Sign In panel
    }
});