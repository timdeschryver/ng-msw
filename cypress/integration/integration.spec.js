it("should search on username", () => {
  cy.visit("/");

  cy.findByRole("searchbox").type("timdeschryver");

  cy.findByText(/mocked-timdeschryver/i);
});
