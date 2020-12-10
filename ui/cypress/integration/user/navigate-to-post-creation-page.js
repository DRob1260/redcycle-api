context('navigate to post creation page', () => {
  it("navigates to the login page when the 'Post Creator' button is clicked and the user is not logged in", () => {
    cy.visit('/redcycle');
    cy.get('.Home').should('be.visible');
    cy.get('.PostCreator').should('not.be.visible');
    cy.get('[href="/redcycle/post-creator"]').click();
    cy.contains('Login');
  });
});
