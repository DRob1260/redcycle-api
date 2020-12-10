context('login', () => {
  it('can log in', () => {
    cy.visit('/redcycle/api/account/signin');
    cy.get('#id_email').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('button').click();
    cy.url().should('include', '/');
    cy.getCookie('sessionid').should('exist');
  });
});
