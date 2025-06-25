import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import NavbarPage from '../pages/navbarPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')
const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const navbarPage = new NavbarPage()
const myInfoPage = new MyInfoPage()

describe('My Info Orange HRM Tests', () => {
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    navbarPage.goToMyInfo()
    myInfoPage.checkMyInfoPage()
    myInfoPage.fillNames(chance.first(), chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.natural({ min: 1, max: 99999 }), chance.natural({ min: 1, max: 9999}), chance.natural({ min: 1, max: 999999}), chance.date().toISOString().split('T')[0])
    myInfoPage.fillOtherDetails('Belgian', 'Married', chance.birthday().toISOString().split('T')[0], chance.gender())
    myInfoPage.submitForm()
  })
})