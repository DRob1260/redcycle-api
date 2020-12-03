context('login', () => {
  it('can log in', () => {
    cy.visit('/redcycle/api/account/login');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('button').click();
    cy.url().should('include', '/post-creator')
    cy.getCookie('sessionid').should('exist')
  });
});
