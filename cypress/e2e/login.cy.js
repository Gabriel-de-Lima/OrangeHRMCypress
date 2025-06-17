import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    loginErrorAlert: "[role='alert']"
  }
  
  it('Login - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('Login - Failure', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFailure.username)
    cy.get(selectorsList.passwordField).type(userData.userFailure.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.loginErrorAlert)
  })
})