/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('DemoBlaze – Smoke test', () => {

  it('Carga la página principal', () => {
    // Visita la tienda
    cy.visit('https://www.demoblaze.com/')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    // Asegúrate de que el título “PRODUCT STORE” esté visible
    cy.contains('PRODUCT STORE').should('be.visible')

    //revisa el carrito 
    cy.get(':nth-child(4) > .nav-link').click()

    //completar compra
    cy.get('.col-lg-1 > .btn').click()
    cy.wait(1000)
    cy.get('#name').type('Tommy')
    cy.get('#country').type('Ecuador')
    cy.get('#city').type('Quevedo')
    cy.get('#card').type('5000500050005000')
    cy.get('#month').type('05')
    cy.get('#year').type('2025')

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })


})