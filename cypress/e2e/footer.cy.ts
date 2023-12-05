import { version } from "../../package.json";

describe("Footer rendering", () => {
  context("desktop resolution", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/dashboard");
      cy.viewport(1025, 900);
      cy.wait(1000);
    });

    it("correctly renders footer element - Desktop", () => {
      // footer element should be present
      cy.get("footer").should("exist");
      // footer should contain 4 <Link /> components
      cy.get("footer").find("a").should("have.length", 4);
      // footer has 1 p element
      cy.get("footer").find("#appBuild").should("have.length", 1);
      // footer has 1 img element for logo
      cy.get("footer").find("#footerLogo").should("have.length", 1);
    });

    it("reflects the appropriate version number", () => {
      const appBuild = version.toString();
      cy.get("footer").should("contain", `Version: ${appBuild}`);
    });

    it("renders list of links correctly", () => {
      cy.get("footer").find("ul").should("have.descendants", "a", 4);
      cy.get("footer").contains("Docs").should("have.attr", "href");
      cy.get("footer").contains("API").should("have.attr", "href");
      cy.get("footer").contains("Help").should("have.attr", "href");
      cy.get("footer").contains("Community").should("have.attr", "href");
    });

    it("renders footer content with flex-direction row", () => {
      cy.get("footer")
        .find("#footerContent")
        .should("have.css", "flex-direction", "row");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/dashboard");
      cy.viewport("iphone-8");
      cy.wait(1000);
    });

    it("correctly renders footer element - Mobile", () => {
      // footer element should be present
      cy.get("footer").should("exist");
      // footer should contain 4 <Link /> components
      cy.get("footer").find("a").should("have.length", 4);
      // footer has 1 p element
      cy.get("footer").find("#appBuild").should("have.length", 1);
      // footer has 1 img element for logo
      cy.get("footer").find("#footerLogo").should("have.length", 1);
    });

    it("renders footer content with flex-direction column", () => {
      cy.get("footer")
        .find("#footerContent")
        .should("have.css", "flex-direction", "column");
    });
  });
});
