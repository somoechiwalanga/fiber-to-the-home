function openLoginPopup() {
    // Create a div element for the login pop-up
    var loginPopup = document.createElement('div');
    loginPopup.className = 'login-popup';

    // Create the content for the login pop-up
    loginPopup.innerHTML = `
        <div class="login-content">
            <h2>Login</h2>
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="#" onclick="openSignupPopup()">Sign up</a></p>
        </div>
    `;

    // Append the login pop-up to the body
    document.body.appendChild(loginPopup);

    // Prevent the default link behavior
    event.preventDefault();
}

function openSignupPopup() {
    // Close the login pop-up
    closeLoginPopup();

    // Create a div element for the sign-up pop-up
    var signupPopup = document.createElement('div');
    signupPopup.className = 'signup-popup';

    // Create the content for the sign-up pop-up
    signupPopup.innerHTML = `
        <div class="signup-content">
            <h2>Sign Up</h2>
            <form id="signupForm">
                <label for="username">Username:</label>
                <input type="text" id="signupUsername" name="username" required><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>
                <label for="password">Password:</label>
                <input type="password" id="signupPassword" name="password" required><br>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    `;

    // Append the sign-up pop-up to the body
    document.body.appendChild(signupPopup);

    // Prevent the default link behavior
    event.preventDefault();
}

function closeLoginPopup() {
    // Remove the login pop-up from the DOM
    var loginPopup = document.querySelector('.login-popup');
    if (loginPopup) {
        loginPopup.parentNode.removeChild(loginPopup);
    }
}
