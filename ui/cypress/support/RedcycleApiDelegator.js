export const addUser = (user) => {
    return cy.request({
        url: `/redcycle/api/users/${user.id}/`,
        method: 'PUT',
        body: user,
        auth: {
            user: Cypress.env('ADMIN_USERNAME'),
            pass: Cypress.env('ADMIN_PASSWORD')
        }
    });
}


