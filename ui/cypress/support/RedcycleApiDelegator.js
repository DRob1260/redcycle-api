import axios from "axios";

export const addUser = (user) => {
    return cy.request({
        url: '/redcycle/api/users/',
        method: 'POST',
        body: user,
        auth: {
            user: Cypress.env('ADMIN_USERNAME'),
            pass: Cypress.env('ADMIN_PASSWORD')
        }
    });
}

export const deleteUser = (user) => {
    let userIdToDelete = user.id;
    return cy.request(`/redcycle/api/users?${user.email}`).then(response => {
        let userIdToDelete = user.id;
        const existingUser = response.body[0];
        if(existingUser)
            userIdToDelete = existingUser.id;

        cy.request({
            url: `/redcycle/api/users/${userIdToDelete}/`,
            method: 'DELETE',
            auth: {
                user: Cypress.env('ADMIN_USERNAME'),
                pass: Cypress.env('ADMIN_PASSWORD')
            }
        });
    });
}
