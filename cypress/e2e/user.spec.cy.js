import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import NavbarPage from '../pages/navbarPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const navbarPage = new NavbarPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    navbarPage.goToMyInfo()
    myInfoPage.checkMyInfoPage()
    myInfoPage.fillNames('Test First Name', 'Test Middle Name', 'Test Last Name')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'Test Other Id', 'Test Driver License Number', '2026-01-01')
    myInfoPage.fillOtherDetails('Belgian', 'Married', '2000-01-01', 'Female')
    myInfoPage.submitForm()
  })
})