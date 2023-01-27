export class ElementFindPage {
    
    addElementInCart(){
        cy.get('[data-id-product="7544"]').contains('Comprar').click({force: true})
        cy.wait(500)
        cy.contains('button','Continuar comprando').click()
        cy.get('[data-id-product="7725"]').contains('Comprar').click({force: true})
        cy.get('[class="cart-buttons"]').find('a').contains('check').click()

        // This an Assertion (does not work)

        // cy.get('.cart-items.light-box-bg').find('.cart-item').each(cartItem => {
        //     cy.wrap(cartItem).find('span','price product-price').then(price => {
        //         expect(price.text().trim()).to.equal('$ 14.600')
        //     })
        // })
    }





}

export const onElementFindPage = new ElementFindPage()

