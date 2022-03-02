/// <reference types="Cypress" />

describe("sample login",() => {

    it("login",() => {
    
        cy.visit("http://localhost:8080/login");
        cy.get('input[id="username"]').type("");
        cy.get('input[id="password"]').type("")
        cy.get('button[type="button"]').click();

    })
    
});