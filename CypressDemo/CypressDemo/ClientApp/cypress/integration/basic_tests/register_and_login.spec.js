/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })

 it('verify register works', () => {
      cy.contains('Register').click()
      cy.get('input[type="email"]').type('johndoe@ed.edu')
      cy.get('input[type="password"]').eq(0).type('JoHnDoE5000.')
      cy.get('input[type="password"]').eq(1).type('JoHnDoE5000.')
      cy.get('button[type="submit"').click()
      cy.url().should('eq', 'https://localhost:3000/Identity/Account/RegisterConfirmation?email=johndoe@ed.edu&returnUrl=%2Fauthentication%2Flogin')
      cy.contains('Register confirmation')
  })
})
