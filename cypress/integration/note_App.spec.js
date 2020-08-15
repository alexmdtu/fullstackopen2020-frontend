/// <reference types="Cypress" />

describe('Note app', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000')
    })

    it('front page can be opened', function () {
        cy.contains('Notes')
        cy.contains('Note app, Department of Computer Science, University of Helsinki 2020')
    })

    it('login form can be opened', function () {
        cy.contains('login').click()
    })

    it('user can login', function () {
        cy.contains('login').click()
        cy.get('#username').type('atu')
        cy.get('#password').type('secret')
        cy.get('#login-button').click()

        cy.contains('Alex logged in')
    })
})