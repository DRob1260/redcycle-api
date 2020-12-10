import { postCommunityPost } from "../../support/RedcycleApiDelegator";

context("delete other user's post", () => {
  const communityPost = {
    "title": "Dinosaur",
    "description": "Free dinosaur",
    "creationDate": "2020-11-21T21:01:00Z",
    "available": true,
    "category": "OTHER",
    "authorId": "cdd356fb-c24a-4166-b86b-7120c7466e5b",
    "locationId": null
  }

  before(() => {
    postCommunityPost(communityPost);
    cy.visit('/redcycle/admin/redcycle/communitypost/');
    cy.get('#id_username').type(Cypress.env('ADMIN_USERNAME'));
    cy.get('#id_password').type(Cypress.env('ADMIN_PASSWORD'));
    cy.get('.submit-row > input').click();
  })

  it("can delete other user's post", () => {
    // click on test community post
    cy.get('#result_list').contains('Dinosaur').click();
    // click on 'Delete' button
    cy.get('.deletelink').click();
    // click on 'Yes, I'm sure' button
    cy.get('[type="submit"]').click();
    // verify that success message is displayed
    cy.contains('The community post “Dinosaur” was deleted successfully.');
  });
});
