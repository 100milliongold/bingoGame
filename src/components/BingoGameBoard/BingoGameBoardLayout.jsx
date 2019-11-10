import React from 'react'
import { Table } from 'semantic-ui-react'
import './BingoGameBoard.css'
import * as _ from "fxjs2/Strict/index.js";
import * as L from "fxjs2/Lazy/index.js";

// window.L = L;
// window._ = _;

export default function BingoGameBoardLayout({ playerId, bingoList, gameTurn, bingoButtonClick, callNumbers}) {
    return (
        <div className={`BingoGameBoard ${playerId === 1 ? "left-player" : "rigth-player"} ${(gameTurn) === playerId ? "is-turn" : ""}`}>
            <p className="player-name">{`player ${playerId + 1}`}</p>
            <div className="player-game">
                <Table textAlign="center" className={`bingo-game-board ${gameTurn === -1 ? "" :"bingo-game-board-start"}`} celled >
                    <Table.Body>
                        {
                            _.go(
                                bingoList.length !== 25 ? _.range(1, 26).fill(undefined) : bingoList,
                                L.entries,
                                _.groupBy(([k, v]) => Math.floor(parseInt(k) / 5)),
                                L.entries,
                                L.flatMap(([k, v]) =>
                                    <Table.Row key={k * 10}>
                                        {
                                            _.map(
                                                ([_, num]) => (
                                                    <Table.Cell 
                                                        className={callNumbers.indexOf(num) !== -1 ? "selected" : "" }
                                                        key={_} 
                                                        onClick={e => bingoButtonClick(num)}>
                                                        {num}
                                                    </Table.Cell>
                                                ),
                                                v
                                            )
                                        }
                                    </Table.Row>
                                ),
                                _.takeAll
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
BingoGameBoardLayout.defaultProps = {
    playerId : 1,
    bingoList : [],
}