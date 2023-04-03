import "../plugins"

describe("Add Match Form Component", () => {
  it("mounts", () => {
    // @ts-ignore
    cy.addMatchComponentMount()
  });
  it("Add Match", () => {
    // @ts-ignore
    cy.addMatchWithAddMatchComponent()
  });
});
