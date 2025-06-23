class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            loginErrorAlert: "[role='alert']",
        }
        return selectors;
    }

    accessLoginPage() {
        cy.visit('auth/login'); // Navigate to the login page
        cy.location('pathname').should('equal', '/web/index.php/auth/login'); // Ensure we are on the login page
        cy.get(this.selectorsList().usernameField).should('be.visible'); // Check if username field is visible
        cy.get(this.selectorsList().passwordField).should('be.visible'); // Check if password field is visible
        cy.get(this.selectorsList().loginButton).should('be.visible'); // Check if login button is visible
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username); // Type the username
        cy.get(this.selectorsList().passwordField).type(password); // Type the password
        cy.get(this.selectorsList().loginButton).click(); // Click the login button
    }

    checkLoginErrorAlert() {
        cy.get(this.selectorsList().loginErrorAlert).should('be.visible'); // Check if the login error alert is visible
        cy.get(this.selectorsList().loginErrorAlert).should('contain.text', 'Invalid credentials'); // Check if the alert contains the expected text
    }
}

export default LoginPage;