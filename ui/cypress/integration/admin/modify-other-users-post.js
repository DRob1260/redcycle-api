import { putCommunityPost } from "../../support/RedcycleApiDelegator";

context("modify other user's post", () => {
  const communityPost = {
    "id": "0391064f-b090-4b7e-8b30-b4ad181054f9",
    "title": "Table",
    "description": "Large, brown table.",
    "creationDate": "2020-11-21T21:01:00Z",
    "available": true,
    "category": "OTHER",
    "authorId": "cdd356fb-c24a-4166-b86b-7120c7466e5b",
    "locationId": null
  }

  before(() => {
    putCommunityPost(communityPost);
    cy.visit('/redcycle/admin/redcycle/communitypost/');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('.submit-row > input').click();
  })

  it("can modify other user's post", () => {
    // click on test community post
    cy.get('#result_list').contains('Table').click();
    // clear and type new title
    cy.get('#id_title').clear();
    cy.get('#id_title').type('Dining room table');
    // clear and type new description
    cy.get('#id_description').clear();
    cy.get('#id_description').type('Large, brown dining room table');
    // select new category
    cy.get('#id_category').select('FURNITURE');
    // select new location
    cy.get('#id_locationId').select('Fairybury, IL 61739');
    // click on 'Save' button
    cy.get('.default').click();
    // verify that success message is displayed
    cy.contains('The community post “Dining room table” was changed successfully.');
    // verify that post is in list with new title
    cy.contains('Dining room table');
  });
});
