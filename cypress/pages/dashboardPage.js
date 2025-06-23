class DashboardPage {
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid"
        }
        return selectors;
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // Ensure we are on the dashboard page
        cy.get(this.selectorsList().dashboardGrid).should('be.visible') // Ensure the dashboard grid is present
    }
}

export default DashboardPage;