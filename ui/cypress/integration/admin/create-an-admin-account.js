context('create an admin account', () => {
  before(() => {
    cy.visit('/redcycle/admin/login/');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('.submit-row > input').click();
  })

  it('can create new admin account', () => {
    cy.visit('/redcycle/admin/redcycle/user/add/');
    cy.get('#id_email').type("testAdmin@test.test");
    cy.get('#id_firstName').type("Test");
    cy.get('#id_lastName').type("Man");
    cy.get('#id_password1').type("FakePass123");
    cy.get('#id_password2').type("FakePass123");
    cy.get('#id_is_staff').click();
    cy.get('.submit-row > input[name="_save"]').click();
    cy.contains('The user “testAdmin@test.test” was added successfully. You may edit it again below.');
  });

  after(() => {
    cy.visit('/redcycle/admin/redcycle/user/?email=testAdmin%40test.test');
    cy.get('.field-email > a').last().click();
    cy.get('.deletelink').click();
    cy.get('input[type="submit"]').click();
  })
});
