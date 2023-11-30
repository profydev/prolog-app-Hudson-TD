import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusText = ["Critical", "Warning", "Stable"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          // check that project language name is an expected value
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          // check that badge status text is an expected value
          cy.wrap($el).contains(statusText[index]);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});

describe.only("Project List Fetching Error", () => {
  beforeEach(() => {
    // Intercept API call to trigger error alter component render
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      statusCode: 500,
      body: "Expected error message text",
    }).as("getError");

    // Open `Projects` page
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("Correctly renders error alert component", () => {
      // Buffer to allow component render
      cy.wait(9000);
      cy.get("main").contains("Request failed with status code 500");
    });

    it("Handles refetch when Try Again button is clicked", () => {
      // Buffer to allow component render
      cy.wait(9000);
      cy.get("main").contains("button", "Try again").click();
      // Second attempt buffer
      cy.wait(9000);
      cy.get("main").contains("Request failed with status code 500");
    });
  });
});
