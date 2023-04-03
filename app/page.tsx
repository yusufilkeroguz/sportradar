"use client";

import { useState } from "react";
import { StoreContext } from "storeon/react";

import store from "../store";
import AddMatch from "./components/templates/AddMatch";
import MatchList from "./components/templates/MatchList";
import Button from "./components/atoms/Button";

export default function Home() {
  const [ showAddMatchForm, setAddMatchFormVisibility ] = useState(false);
  const onAddMatchButtonClick = () => {
    setAddMatchFormVisibility(!showAddMatchForm)
  }

  return (
    <StoreContext.Provider value={store}>
      <main className="container mx-auto mt-4">
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold">Match</h2>

          <Button label={showAddMatchForm ? "Close Form" : "Show Match Form"} onClick={onAddMatchButtonClick} />
        </div>

        <div className={`${showAddMatchForm ? "block" : "hidden"}`}>
          <AddMatch />
        </div>
        <MatchList />
      </main>
    </StoreContext.Provider>
  );
}
