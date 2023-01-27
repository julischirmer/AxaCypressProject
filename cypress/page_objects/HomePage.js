export class HomePage {

    searchInBrowserBar(searchtext){
        cy.get('.form-control.ui-autocomplete-input').type(searchtext)
        cy.contains('search').click()
    }

}

export const onHomePage = new HomePage()