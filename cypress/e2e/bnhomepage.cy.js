//const { it } = require("mocha");
///<reference types = "cypress"/>
//const cypress = require("cypress")

//Landing on BN homepage and search for book in the search box.
it('Barnes and Noble HomePage', function () {
    cy.visit('https://www.barnesandnoble.com/')

    cy.get('.rbt-input-main').type('Percy Jackson').type('{enter}')

    //implicit assertion 
    cy.get('.promo-pdp > .container')
        .should('be.visible')






})