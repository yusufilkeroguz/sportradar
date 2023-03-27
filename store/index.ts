import { createStoreon } from "storeon";
import { persistState } from "@storeon/localstorage";

import { IStoreEvents, IStoreState } from "./interface";

import matchesModule from "./matches";

export default createStoreon<IStoreState, IStoreEvents>([
  matchesModule,
  persistState(["matches"]),
]);
