export class LoginPage {

    loginAnUser(email, password){
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
    }

}

export const onLoginPage = new LoginPage()