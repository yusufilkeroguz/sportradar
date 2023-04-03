import React from "react";
import { mount } from "cypress/react18";
import { StoreContext } from "storeon/react";

import "../plugins"
import store from "@/store";

import MatchList from "../../app/components/templates/MatchList";

describe("Match List Component", () => {
  beforeEach(() => {
    cy.window().then((window) => {
      window.sessionStorage.clear();
      window.localStorage.clear();
    });
  });

  it("mounts", () => {
    mount(
      <StoreContext.Provider value={store}>
        <MatchList />
      </StoreContext.Provider>
    );

    cy.get("div").contains("No matches added. Please add a match.")
  });
  it("Add Match And Check List", () => {
    // @ts-ignore
    cy.addMatchWithAddMatchComponent()

    mount(
      <StoreContext.Provider value={store}>
        <MatchList />
      </StoreContext.Provider>
    );

    cy.get("button").first().contains("Add Score To Home Team")
    cy.get("button").last().contains("Add Score To Away Team")
    cy.get("[data-cy='away-score']").contains("0")
    cy.get("[data-cy='home-score']").contains("0")
  });
  it("Increase Home Team Score and order should not changed", () => {
    mount(
      <StoreContext.Provider value={store}>
        <MatchList />
      </StoreContext.Provider>
    );

    cy.get("button").first().contains("Add Score To Home Team")
    cy.get("button").first().click()

    cy.get("[data-cy='home-score']").contains("1")
    cy.get("[data-cy='away-score']").contains("0")
  });
  it("Increase Twice Away Team Score and order will change", () => {
    mount(
      <StoreContext.Provider value={store}>
        <MatchList />
      </StoreContext.Provider>
    );

    cy.get("button").last().contains("Add Score To Away Team")
    cy.get("button").last().click()
    cy.get("button").last().click()

    cy.get("[data-cy='home-score']").contains("1")
    cy.get("[data-cy='away-score']").contains("2")
  });
});
