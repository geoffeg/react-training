/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display Menu heading", () => {
    cy.findByText("Menu");
  });

  it("should show the menu items", () => {
    cy.findByText("Chicken Tikka Masala");
    cy.findByText("BBQ Ribs");
  });

  it.only("Should support adding a menu item and displaying it on the home page", () => {
    cy.findByText("Admin").click();
    cy.findByLabelText("Name").type("Glazed donut");
    cy.findAllByLabelText("Description").type("Tasty");
    cy.findByLabelText("Price").type("0.99");
    cy.findByRole("button", { name: "Save Menu Item" }).click();
    cy.url().should("eq", "http://localhost:3000");
    cy.findAllByText("Glazed donut");
  });
});
