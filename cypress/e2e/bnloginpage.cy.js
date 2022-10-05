//require('cypress-iframe')


it('LoginUsingValidCredentials', function () {

    cy.visit('https://www.barnesandnoble.com/')
    cy.get('#navbarDropdown')
        .invoke('css', 'overflow-x', 'visible')
        .should('have.css', 'overflow-x', 'visible')
        .click({ force: true })
    cy.wait(4000)

    cy.contains('Sign In').click({ force: true })

    cy.get('.modal__dialog > iframe').then(function ($iFrame) {
        const $iFrameContent = $iFrame.contents().find('body')
        cy.wait(3000)

        const input = $iFrameContent.find('#email')
        cy.wrap(input).scrollIntoView()
            .should('be.visible')
            .type('raji.venkatesh18@gmail.com')

    })


})