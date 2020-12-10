context('delete account', () => {
  before(() => {
      cy.visit('/redcycle/api/account/register');
      cy.get('#id_email').type("testUser1@test.test");
      cy.get('#id_firstName').type("Test");
      cy.get('#id_lastName').type("Man");
      cy.get('#id_confirm_email').type("testUser1@test.test");
      cy.get('#id_password').type("FakePass123");
      cy.get('button').click();
      cy.url().should('include', '/')
      cy.getCookie('sessionid').should('exist')
  });

  it('can delete an account', () => {
    cy.visit('/redcycle/post-creator');
    cy.get('#uncontrolled-tab-example-tab-deleteAccount').click();
    cy.get('#delete').click();
    cy.on('window:alert',(txt)=>{
    expect(txt).to.contains('account deleted');
    })
    cy.url().should('not.include','/post-creator');
  });
});
