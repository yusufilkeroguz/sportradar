import { FC } from "react";
import { useStoreon } from "storeon/react";

import { IStoreMatch } from "@/store/matches/interface";
import { IStoreEvents, IStoreState } from "@/store/interface";
import Button from "../../atoms/Button";
import MatchScoreCol from "../../molecules/MatchScoreCol";

const MatchScoreRow: FC<IStoreMatch & { id: number }> = ({ away, home, id }) => {
  const { dispatch } = useStoreon<IStoreState, IStoreEvents>("matches");

  return (
    <div className="flex justify-around items-center flex-nowrap">
      <div className="w-1/3 flex justify-end">
        <Button label="Add Score To Home Team" onClick={() => dispatch("matches/increase/score", { key: id, team: "home" })} />

        <MatchScoreCol isHome {...home} />
      </div>

      <div className="w-1/3 flex justify-center">
        <hr className="bg-black h-0.5 w-10" />
      </div>


      <div className="w-1/3 flex justify-start">
        <MatchScoreCol {...away} />

        <Button label="Add Score To Away Team" onClick={() => dispatch("matches/increase/score", { key: id, team: "away" })} />
      </div>
    </div>
  );
};

export default MatchScoreRow;
