describe("Issue Filter", () => {
  beforeEach(() => {
    // open issues page
    cy.visit(`http://localhost:3000/dashboard/issues`);
    cy.wait(500);
  });

  context("Desktop Resolution", () => {
    beforeEach(() => {
      cy.viewport(1440, 1080);
    });

    it("renders filter elements", () => {
      // Filter parent component exists
      cy.get("[data-cy='issues-filter-container']").should("exist");
      // Resolve button is present
      cy.get("[data-cy='issues-filter-left-content']").should("exist");
      cy.get("[data-cy='issues-filter-left-content'] > button").should(
        "have.length",
        1,
      );
      // 3 filter elements are present
      cy.get("[data-cy='issues-filter-right-content']").should("exist");
      cy.get("[data-cy='issues-filter-right-content'] > div").should(
        "have.length",
        3,
      );
    });
  });
});
