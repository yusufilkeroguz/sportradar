import React from "react";
import { mount } from "cypress/react18";

import "../plugins"

import Button from "../../app/components/atoms/Button/index";

describe("Atomic Button Component", () => {
  it("mounts", () => {
    mount(<Button label="Button" />);

    cy.get("button").contains("Button");
  });

  it("when click show alert", () => {
    mount(<Button label="Button" onClick={() => alert("Hi")} />);

    cy.get("button").contains("Button")
    cy.get("button").click()

    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Hi');
   })
  });
});
