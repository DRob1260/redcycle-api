export const putUser = (user) => {
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

export const postUser = (user) => {
    return cy.request({
        url: `/redcycle/api/users/`,
        method: 'POST',
        body: user,
        auth: {
            user: Cypress.env('ADMIN_USERNAME'),
            pass: Cypress.env('ADMIN_PASSWORD')
        }
    });
}

export const putCommunityPost = (communityPost) => {
    return cy.request({
        url: `/redcycle/api/communityPosts/${communityPost.id}/`,
        method: 'PUT',
        body: communityPost,
        auth: {
            user: Cypress.env('ADMIN_USERNAME'),
            pass: Cypress.env('ADMIN_PASSWORD')
        }
    });
}

export const postCommunityPost = (communityPost) => {
    return cy.request({
        url: `/redcycle/api/communityPosts/`,
        method: 'POST',
        body: communityPost,
        auth: {
            user: Cypress.env('ADMIN_USERNAME'),
            pass: Cypress.env('ADMIN_PASSWORD')
        }
    });
}

