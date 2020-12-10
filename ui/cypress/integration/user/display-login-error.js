context('display login error', () => {
    it('can display incorrect login info error', () => {
      cy.visit('/redcycle/api/account/signin');
      cy.get('#id_email').type("Account that doesn't exist");
      cy.get('#id_password').type("Fake password");
      cy.get('button').click();
      cy.contains('Please enter an email address.');
      cy.url().should('include', '/login')
      cy.getCookie('sessionid').should('not.exist')
    });
});
