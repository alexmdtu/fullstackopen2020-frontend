/// <reference types="Cypress" />

describe('Note app', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
            name: 'Alex',
            username: 'atu',
            password: 'secret'
        }
        cy.request('POST', 'http://localhost:3001/api/users', user)
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

    describe('when logged in', function () {
        beforeEach(function () {
            cy.contains('login').click()
            cy.get('#username').type('atu')
            cy.get('#password').type('secret')
            cy.get('#login-button').click()
        })

        it('a new note can be created', function () {
            cy.contains('new note').click()
            cy.get('input').type('a note created by cypress')
            cy.contains('save').click()
            cy.contains('a note created by cypress')
        })
    })
})