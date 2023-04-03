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

export interface IStoreMatches extends Array<IStoreMatch> {}

export interface IStoreMatchesState {
  matches: IStoreMatches
}

export interface IStoreMatchesEvents {
  "matches/add/game": IStoreMatch;
  "matches/increase/score": { key: number, team: "home" | "away" };
}
