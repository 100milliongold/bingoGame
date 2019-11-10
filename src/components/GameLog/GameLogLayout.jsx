import React from 'react'
import _ from 'lodash'
import './GameLog.css'
export default function GameLogLayout({ gameTurn, players }) {
    return (
        <div id="GameLog">
            {
                (gameTurn === -1) ? null :
                <React.Fragment>
                        <p>Turn : {(gameTurn === -1) ? `` : `${gameTurn + 1}`}</p>
                        {
                            _(players)
                                .map((o, key) =>
                                    <React.Fragment key={key}>
                                        <p>
                                            {`player ${o.playerId + 1}`}
                                        </p>
                                        <p>
                                            bingo : {o.bingo ? JSON.stringify(o.bingo) : ""}
                                        </p>
                                    </React.Fragment>
                                ).value()
                        }
                </React.Fragment>
            }
            
        </div>
    )
}
