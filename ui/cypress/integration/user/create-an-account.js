context('create an account', () => {
  it('can sign up for account', () => {
    cy.visit('/redcycle/api/account/signup');
    cy.get('#id_email').type("testUser@test.test");
    cy.get('#id_firstName').type("Test");
    cy.get('#id_lastName').type("Man");
    cy.get('#id_password1').type("FakePass123");
    cy.get('#id_password2').type("FakePass123");
    cy.get('button').click();
    cy.url().should('include', '/post-creator')
    cy.getCookie('sessionid').should('exist')
  });
  after(() => {
    cy.visit('/redcycle/admin/redcycle/user');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('.submit-row > input').click();
    cy.get('.field-email > a').last().click();
    cy.get('.deletelink').click();
    cy.get('input[type="submit"]').click();
  })
});
