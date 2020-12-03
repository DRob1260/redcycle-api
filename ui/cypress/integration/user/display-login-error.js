context('display login error', () => {
    it('can display incorrect login info error', () => {
      cy.visit('/redcycle/api/account/login');
      cy.get('#id_username').type("Account that doesn't exist");
      cy.get('#id_password').type("Fake password");
      cy.get('button').click();
      cy.contains('Please enter a correct email address and password. Note that both fields may be case-sensitive.');
      cy.url().should('include', '/login')
      cy.getCookie('sessionid').should('not.exist')
    });
});
