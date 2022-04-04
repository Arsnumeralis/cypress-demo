/// <reference types="cypress" />

describe("suiteOne", () => {
  it("testOne", () => {
    cy.visit("https://cloud.twenty7tec.com");
  });
  it("testTwo", () => {
    cy.fixture("login.json").then((login) => {
      cy.get("#Email").type(login.email);
      cy.get("#Password").type(login.password);
    });
    cy.get("#login_submit").click();
  });
});
