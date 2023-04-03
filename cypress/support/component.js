import { mount } from "cypress/react18";
import { StoreContext } from "storeon/react";

import store from "@/store";

import AddMatchTemplate from "../../app/components/templates/AddMatch";

Cypress.Commands.add("addMatchComponentMount", () => {
  mount(
    <StoreContext.Provider value={store}>
      <AddMatchTemplate />
    </StoreContext.Provider>
  );

  cy.get("h3").first().contains("Home");
  cy.get("h3").last().contains("Away");
  cy.get("button").last().contains("Add Match");
})

Cypress.Commands.add("addMatchWithAddMatchComponent", () => {
  mount(
    <StoreContext.Provider value={store}>
      <AddMatchTemplate />
    </StoreContext.Provider>
  );

  cy.get("input").first().type("Home Team");
  cy.get("input").last().type("Away Team");
  cy.get("button").click();

  cy.getAllLocalStorage().then((result) => {
    // @ts-ignore
    const { matches } = JSON.parse(result["http://localhost:8080"]["storeon"])

    expect(matches[0]).to.deep.equal(
      {
        home: { score: 0, name: "Home Team" },
        away: { score: 0, name: "Away Team" },
      }
    );
  });
})