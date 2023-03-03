const { onCartPage } = require("../page_objects/CartPage")
const { onElementFindPage } = require("../page_objects/ElementFindPage")
const { onHomePage } = require("../page_objects/homePage")
const { onLoginPage } = require("../page_objects/LoginPage")

describe('My First Test', () => {
    
    beforeEach('Open application',()=> {
         cy.visit('/')
        // if(cy.get('.kb-cs-notify-disapprove').should('be.visible')) {
        //     cy.get('.kb-cs-notify-disapprove').click()
        //     cy.get('.kb-cs-notify-container').invoke('attr', 'style').then(style => {
        //         cy.wrap(style).should('contain', 'display: none;')
        //     })
        // }
    })

    it.only('first Test', () => {
        onHomePage.searchInBrowserBar('xiaomi')
        onElementFindPage.addElementInCart()
        onCartPage.deleteElementFromCart(0)
        // onLoginPage.loginAnUser('admin@gmail.com','admin123')
        

        //cy.contains('li','COMPONENTES').trigger('mouseover')
        //cy.contains('ul','Grabadoras').click({force: true})


        //cy.contains('aria-label','Buscar').click()
        //cy.contains('aria-label','Buscar').type('iphone')
        //cy.contains('[aria-label="Buscar"]').click()
        //cy.contains('[aria-label="Buscar"]').type('iphone')

    })

    

})