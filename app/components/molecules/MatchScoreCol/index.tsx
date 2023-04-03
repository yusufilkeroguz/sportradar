import { FC, Fragment } from "react"

import { IMatchScoreColProps } from "./interface"

const MatchScoreCol: FC<IMatchScoreColProps> =({ name, score, isHome }) => {
  return (
    <Fragment>
      {!isHome && <span className="text-2xl font-medium" data-cy="away-score">{score}</span>}
      <span className="text-lg mx-5 flex justify-center flex-col">{name}</span>
      {isHome && <span className="text-2xl font-medium" data-cy="home-score">{score}</span>}
    </Fragment>
  )
}

export default MatchScoreCol