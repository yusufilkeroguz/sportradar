import { StoreonModule } from "storeon";

import { IStoreMatchesEvents, IStoreMatchesState } from "./interface";

const matchesModule: StoreonModule<IStoreMatchesState, IStoreMatchesEvents> = (
  store
) => {
  store.on("@init", () => ({ matches: [] }));
  store.on("matches/add/game", (state, match) => {
    return { matches: state.matches.concat([match]) };
  });
  store.on("matches/increase/score", (state, { key, team }) => {
    const { matches } = state

    matches[key][team].score = matches[key][team].score + 1

    return {
      matches: [
        ...matches,
      ]
    }
  });
};

export default matchesModule;
