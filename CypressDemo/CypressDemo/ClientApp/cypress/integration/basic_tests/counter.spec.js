/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
      cy.visit('http://localhost:5000/')
  })

  it('verify counter works', () => {
    cy.contains('Counter').click()
    cy.contains('0')
    cy.contains('Increment').click()
    cy.contains('1')
  })
})
