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
    cy.get(".dropdown > .nav-link").should("exist").click();
    cy.get('[href="/employees/org_chart?identifier=twenty7tec"]').click();
    cy.get(":nth-child(14) > :nth-child(22)").should(
      "contain",
      "Paulius Mickevicius"
    );
  });
});
