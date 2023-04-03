import { IStoreEvents, IStoreState } from "@/store/interface";
import { useStoreon } from "storeon/react";
import MatchScoreRow from "../../organisms/MatchScoreRow";
import { useEffect, useState } from "react";
import { IStoreMatches } from "@/store/matches/interface";

export default function MatchList() {
  const [sortedMatches, setSortedMatches] = useState<IStoreMatches>([]);
  const { matches } = useStoreon<IStoreState, IStoreEvents>("matches");

  useEffect(() => {
    setSortedMatches(
      matches
        .sort((a, b) => {
          const aTotalScore = a.away.score + a.home.score;
          const bTotalScore = b.away.score + b.home.score;

          if (aTotalScore > bTotalScore) return -1;
          if (aTotalScore < bTotalScore) return 1;
          return 0;
        })
    );
  }, [matches]);

  if (sortedMatches.length) {
    return (
      <ul className="space-y-4">
        {sortedMatches.map((match, index) => (
          <li key={`match_${index}`}>
            <MatchScoreRow id={index} {...match} />
          </li>
        ))}
      </ul>
    );
  }

  return <div>No matches added. Please add a match.</div>;
}
