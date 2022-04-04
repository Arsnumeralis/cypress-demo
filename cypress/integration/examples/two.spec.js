/// <reference types="cypress" />

describe("suiteTwo", () => {
  it("testOne", () => {
    cy.visit(
      "https://login.breathehr.com/login?identifier=twenty7tec&redirect_app=hr"
    );
  });
  it("testTwo", () => {
    cy.fixture("login.json").then((login) => {
      cy.get("#email-input").type(login.email);
      cy.get(":nth-child(2) > .flex > .px-4").type(login.password2);
    });
    cy.get(".btn").click();
  });
  it("testThree", () => {
    cy.get(".navbar-nav > :nth-child(1) > .nav-link").should("exist");
  });
});
