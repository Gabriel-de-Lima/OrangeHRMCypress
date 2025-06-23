class NavbarPage {
    selectorsList() {
        const selectors = {
            searchField: ".oxd-main-menu-search",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardButton: "[href='/web/index.php/dashboard/index']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        }
        return selectors;
    }
    goToSearch(searchText) {
        cy.get(this.selectorsList().searchField).click() // Click on the search field
        cy.get(this.selectorsList().searchField).clear().type(searchText) // Type the search text
    }


    goToAdmin() {
        cy.get(this.selectorsList().adminButton).click() // Click on the Admin button
    }
    goToPIM() {
        cy.get(this.selectorsList().pimButton).click() // Click on the PIM button
    }
    goToLeave() {
        cy.get(this.selectorsList().leaveButton).click() // Click on the Leave button
    }
    goToTime() {
        cy.get(this.selectorsList().timeButton).click() // Click on the Time button
    }
    goToRecruitment() {
        cy.get(this.selectorsList().recruitmentButton).click() // Click on the Recruitment button
    }
    goToMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click() // Click on the My Info button
    }
    goToPerformance() {
        cy.get(this.selectorsList().performanceButton).click() // Click on the Performance button
    }
    goToDashboard() {
        cy.get(this.selectorsList().dashboardButton).click() // Click on the Dashboard button
    }
    goToDirectory() {
        cy.get(this.selectorsList().directoryButton).click() // Click on the Directory button
    }
    goToMaintenance() {
        cy.get(this.selectorsList().maintenanceButton).click() // Click on the Maintenance button
    }
    goToClaim() {
        cy.get(this.selectorsList().claimButton).click() // Click on the Claim button
    }
    goToBuzz() {
        cy.get(this.selectorsList().buzzButton).click() // Click on the Buzz button
    }

}

export default NavbarPage;