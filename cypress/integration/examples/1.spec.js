/// <reference types="cypress" />

describe("suiteOne", () => {
  it("testOne", () => {
    cy.visit("https://qacloud.twenty7tec.com");
    cy.fixture("login.json").then((login) => {
      cy.get("#Email").invoke("val", login.email);
      cy.get("#Password").invoke("val", login.password);
      cy.get("#login-form").submit();
    });
  });
  it("testThree", () => {
    cy.get("#startBtn").should("exist");
  });
});
