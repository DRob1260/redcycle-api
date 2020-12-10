import { putUser } from "../../support/RedcycleApiDelegator";

context('unban user', () => {
  const user = {
    "id": "ed8232af-5171-4fa2-8b5a-bcf738bb0e91",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@me.com",
    "is_active": false
  };

  before(() => {
    putUser(user);
    cy.visit('/redcycle/admin/redcycle/user/');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('.submit-row > input').click();
  })

  it('can unban user', () => {
    // click on test user from list of users
    cy.get('#result_list').contains('john.doe@me.com').click();
    // check 'Is active' checkbox
    cy.get('#id_is_active').click();
    // click save button
    cy.get('.default').click();
    // get all elements within test user row
    const userEmailSiblingElements = cy.get('#result_list').contains('john.doe@me.com').parentsUntil('tr').siblings();
    // get 'IS ACTIVE' cell
    userEmailSiblingElements.eq(2).within(() => {
      // assert that icon displayed is for the 'False' value
      cy.get('img').should('have.attr', 'alt', 'True')
    })
  });
});
