import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    loginErrorAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericCombobox: ".oxd-select-wrapper",
    comboboxDropdown: ".oxd-select-dropdown.--positon-bottom",
    genderField: ".oxd-radio-wrapper"
  }
  
  it.only('User Info Update - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Test First Name')
    cy.get(selectorsList.middleNameField).clear().type('Test Middle Name')
    cy.get(selectorsList.lastNameField).clear().type('Test Last Name')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId') // Employee Id
    cy.get(selectorsList.genericField).eq(4).clear().type('Test Other Id') // Other Id
    cy.get(selectorsList.genericField).eq(5).clear().type('Test Driver License Number') // Driver License Number
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-01-01') // License Expiry Date
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.comboboxDropdown).contains('Belgian').click() // Nationality
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.comboboxDropdown).contains('Married').click() // Marital Status
    cy.get(selectorsList.dateField).eq(1).clear().type('2000-01-01') // Date of Birth
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genderField).eq(1).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close-container')
  })
})