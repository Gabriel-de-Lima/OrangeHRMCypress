class MyInfoPage {
    selectors() {
        const selectorsList = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-wrapper",
            comboboxDropdown: ".oxd-select-dropdown.--positon-bottom",
            genderField: ".oxd-radio-wrapper",
            closeNotification: ".oxd-toast-close-container",
        }
        return selectorsList;
    };

    checkMyInfoPage() {
        cy.location('pathname').should('match', /\/web\/index\.php\/pim\/viewPersonalDetails\/.*/); // Ensure we are on the My Info page, allowing any text after the slash
        cy.get(this.selectors().firstNameField).should('be.visible'); // Check if first name field is visible
        cy.get(this.selectors().middleNameField).should('be.visible'); // Check if middle name field is visible
        cy.get(this.selectors().lastNameField).should('be.visible'); // Check if last name field is visible
    }

    fillNames(firstName, middleName, lastName) {
        cy.get(this.selectors().firstNameField).clear().type(firstName); // Clear and type first name
        cy.get(this.selectors().middleNameField).clear().type(middleName); // Clear and type middle name
        cy.get(this.selectors().lastNameField).clear().type(lastName); // Clear and type last name
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, licenseExpiry) {
        cy.get(this.selectors().genericField).eq(3).clear().type(employeeId); // Employee Id
        cy.get(this.selectors().genericField).eq(4).clear().type(otherId); // Other Id
        cy.get(this.selectors().genericField).eq(5).clear().type(driverLicenseNumber); // Driver License Number
        cy.get(this.selectors().dateField).eq(0).clear().type(licenseExpiry); // License Expiry Date
        cy.get(this.selectors().dateCloseButton).click();
    }

    fillOtherDetails(nationality, maritalStatus, dateOfBirth, gender) {
        cy.get(this.selectors().genericCombobox).eq(0).click()
        cy.get(this.selectors().comboboxDropdown).contains(nationality).click() // Nationality
        cy.get(this.selectors().genericCombobox).eq(1).click()
        cy.get(this.selectors().comboboxDropdown).contains(maritalStatus).click() // Marital Status
        cy.get(this.selectors().dateField).eq(1).clear().type(dateOfBirth) // Date of Birth
        cy.get(this.selectors().dateCloseButton).click()
        if(gender == 'Male'){
            cy.get(this.selectors().genderField).eq(0).click() // Select Male Option
        }else if(gender == 'Female'){
            cy.get(this.selectors().genderField).eq(1).click() // Select Female Option
        }
    }

    submitForm() {
        cy.get(this.selectors().submitButton).eq(0).click(); // Click the submit button
        cy.get('body').should('contain', 'Successfully Updated'); // Check for success message
        cy.get(this.selectors().closeNotification).click(); // Close the update notification
    }
    
}

export default MyInfoPage;