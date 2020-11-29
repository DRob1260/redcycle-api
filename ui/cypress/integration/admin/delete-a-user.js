import { addUser } from "../../support/RedcycleApiDelegator";

context('delete a user', () => {
  const user = {
    "id": "510cc84c-04d3-49dc-8bbb-c9e262f01a7a",
    "firstName": "Testy",
    "lastName": "McTestface",
    "email": "testy@mcface.com",
    "is_active": true
  };

  before(() => {
    addUser(user);
    cy.visit('/redcycle/admin/redcycle/user');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('.submit-row > input').click();
  })

  it('can delete a user', () => {
    // click on test user from list of users
    cy.get('#result_list').contains('testy@mcface.com').click();
  });
});
