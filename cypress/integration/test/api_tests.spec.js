/// <reference types="cypress" />

describe('API-testsuite', () => {
    const burl = "https://jsonplaceholder.typicode.com";
    // Make an API request to fatch all the posts
    it('List posts', () => {
        cy.request({
            method: "GET",
            url: burl + "/posts",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        })
        
    });
    // Make an API request to create a post
    it('Create post', () => {
        cy.request({
            method: "POST",
            url: burl + "/posts",
            headers: {
                "Content-Type": "application/json"
            },
            body:{
                "title": "New Post",
                "body": "This is the body of the new post",
                "userId": 1
            }
        }).then((response)=>{
            expect(response.status).to.equal(201);
            cy.log(JSON.stringify(response.body));
        })
        
    });
    // Make an API request to update an existing post
    it('Update post', () => {
        cy.request({
            method: "PUT",
            url: burl + "/posts/1",
            headers: {
                accept: "application/json"
            },
            body: {
                "title": "Updated Post",
                "body": "This is the updated body of the post",
                "userId": 1
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        })
    });
    // Make an API request to delete a post
    it('Delete a post', () => {
        cy.request({
            method: "DELETE",
            url: burl + "/posts/1 ",
            headers: {
                accept: "application/json"
            } 
        }).then((response)=>{
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        })
        
    });
});
