context('display login error', () => {
    it('can display incorrect login info error', () => {
          cy.visit('/redcycle/api/account/signin');
          cy.get('#id_email').type("nonexistantaccount@gmail.com");
          cy.get('#id_password').type("Fake password");
          cy.get('button').click();
          cy.url().should('include', '/signin')
          cy.getCookie('sessionid').should('not.exist')
          cy.contains("This user does not exists").should("exist");
    });
});
