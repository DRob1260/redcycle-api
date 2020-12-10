context('create an account', () => {
  it('can sign up for account', () => {
    cy.visit('/redcycle/api/account/register');
    cy.get('#id_email').type("testUser@test.test");
    cy.get('#id_firstName').type("Test");
    cy.get('#id_lastName').type("Man");
    cy.get('#id_confirm_email').type("testUser@test.test");
    cy.get('#id_password').type("FakePass123");
    cy.get('button').click();
    cy.url().should('include', '/')
    cy.getCookie('sessionid').should('exist')
  });
  after(() => {
    cy.visit('/redcycle/post-creator');
    cy.get('#uncontrolled-tab-example-tab-deleteAccount').click();
    cy.get('#delete').click();
  })
});
