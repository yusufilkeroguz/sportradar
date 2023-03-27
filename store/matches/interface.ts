export interface IStoreMatch {
  home: {
    name: string;
    score: number;
  },
  away: {
    name: string;
    score: number;
  },
}

export interface IStoreMatchesState {
  matches: Array<IStoreMatch>;
}

export interface IStoreMatchesEvents {
  "matches/add/game": IStoreMatch;
  "matches/increase/score": { key: number, team: "home" | "away" };
}
