import { putUser } from "../../support/RedcycleApiDelegator";

context('ban user', () => {
  const user = {
    "id": "a33181fd-c6d3-40d7-942f-80ecdbc2ee51",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@me.com",
    "is_active": true
  };

  before(() => {
    putUser(user);
    cy.visit('/redcycle/admin/redcycle/user/');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('.submit-row > input').click();
  })

  it('can ban a user', () => {
    // click on test user from list of users
    cy.get('#result_list').contains('jane.doe@me.com').click();
    // uncheck 'Is active' checkbox
    cy.get('#id_is_active').click();
    // click save button
    cy.get('.default').click();
    // get all elements within test user row
    const userEmailSiblingElements = cy.get('#result_list').contains('jane.doe@me.com').parentsUntil('tr').siblings();
    // get 'IS ACTIVE' cell
    userEmailSiblingElements.eq(2).within(() => {
      // assert that icon displayed is for the 'False' value
      cy.get('img').should('have.attr', 'alt', 'False')
    })
  });
});
