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

    it("Renders filter elements", () => {
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

    //Open Status filter options
    function OpenStatusOptions() {
      cy.get("[data-cy='issues-filter-right-content'] > div ")
        .find("button")
        .eq(0)
        .click()
        .wait(500);
    }

    function OpenLevelOptions() {
      cy.get("[data-cy='issues-filter-right-content'] > div ")
        .find("button")
        .eq(1)
        .click()
        .wait(500);
    }

    it("Handles all status filter selections", () => {
      //Set status to Unresolved and check URL for appropriate param string
      OpenStatusOptions();
      cy.get("main")
        .find("ul")
        .contains("Unresolved")
        .click()
        .wait(250)
        .url()
        .should("contain", "status=open");

      //Set status to Unresolved and check URL for appropriate param string
      OpenStatusOptions();
      cy.get("main")
        .find("ul")
        .contains("Resolved")
        .click()
        .wait(250)
        .url()
        .should("contain", "status=resolved");

      //Clear status filter and check URL for appropriate param string
      OpenStatusOptions();
      cy.get("main")
        .find("ul")
        .contains("Clear")
        .click()
        .wait(250)
        .url()
        .should("contain", "status=");
    });

    it("Handles all level filter selections", () => {
      //Set level to Error and check URL for appropriate param string
      OpenLevelOptions();
      cy.get("main")
        .find("ul")
        .contains("Error")
        .click()
        .wait(250)
        .url()
        .should("contain", "level=error");

      //Set level to Warning and check URL for appropriate param string
      OpenLevelOptions();
      cy.get("main")
        .find("ul")
        .contains("Warning")
        .click()
        .wait(250)
        .url()
        .should("contain", "level=warning");

      //Set level to Info and check URL for appropriate param string
      OpenLevelOptions();
      cy.get("main")
        .find("ul")
        .contains("Info")
        .click()
        .wait(250)
        .url()
        .should("contain", "level=info");

      //Clear level filter and check URL for appropriate param string
      OpenLevelOptions();
      cy.get("main")
        .find("ul")
        .contains("Clear")
        .click()
        .wait(250)
        .url()
        .should("contain", "level=");
    });

    it("Accepts project filter input", () => {
      // Search backend project
      cy.get("[data-cy='issues-filter-right-content'] > div ")
        .find("input")
        .click()
        .type("backend")
        .url()
        .should("contain", "project=backend");
      // clear search and verify param is removed
      cy.get("[data-cy='issues-filter-right-content'] > div ")
        .find("input")
        .click()
        .clear()
        .url()
        .should("contain", "project=");
    });
  });
});
