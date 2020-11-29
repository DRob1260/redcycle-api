import { addUser, deleteUser } from "../../support/RedcycleApiDelegator";

context('ban user', () => {
  let user = {
    "firstName": "Testy",
    "lastName": "McTestface",
    "email": "testy@mcface.com",
    "is_active": true
  };
  before(() => {
    cy.visit('/redcycle/admin/redcycle/user');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('.submit-row > input').click();
    deleteUser(user).then(() => {
      addUser(user).then(response => {
        user = response.body;
      })
    })
  })

  it('can ban a user', () => {

  });
});
