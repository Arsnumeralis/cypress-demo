/// <reference types="cypress" />

describe("suiteOne", () => {
  it("testOne", () => {
    cy.clearCookies();
    cy.visit("https://qacloud.twenty7tec.com", {
      onBeforeLoad(win) {
        cy.stub(win.navigator, "cookieEnabled", false).as("cookieEnabled");
      },
    });
  });
  it("testTwo", () => {
    cy.fixture("login.json").then((login) => {
      cy.get("#Email").type(login.email);
      cy.get("#Password").type(login.password);
    });
    cy.clearCookies();
    cy.get("#login_submit").click();
  });
  it("testThree", () => {
    cy.get("#startBtn").should("exist");
  });
});
