export class CartPage {

    deleteElementFromCart(indexProduct){
        cy.get('.cart-items.light-box-bg').find('.cart-item').each(cartItem => {
            cy.wrap(cartItem).get('[data-link-action="delete-from-cart"]').then(deleteButton => {
                cy.wrap(deleteButton[indexProduct]).click({force: true}).then( assertion => {
                    if(cy.wrap(deleteButton[indexProduct]).should('not.exist') === true){
                        cy.log('The element was deleted')
                    } else {
                        cy.log('The element was not deleted')
                    }
                })
            })              
        })
    }

}

export const onCartPage = new CartPage()