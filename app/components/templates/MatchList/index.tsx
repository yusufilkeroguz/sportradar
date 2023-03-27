import { IStoreEvents, IStoreState } from "@/store/interface";
import { useStoreon } from "storeon/react";
import MatchScoreRow from "../../organisms/MatchScoreRow";

export default function MatchList() {
  const { matches, dispatch } = useStoreon<IStoreState, IStoreEvents>(
    "matches"
  );

  if (matches.length) {
    return (
      <ul className="space-y-4">
        {matches.map((match, index) => (
          <li key={`match_${index}`}>
            <MatchScoreRow id={index} {...match} />
          </li>
        ))}
      </ul>
    );
  }

  return <div>No matches added. Please add a match.</div>;
}

