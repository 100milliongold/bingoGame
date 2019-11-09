import React from 'react'
import { Table } from 'semantic-ui-react'
import './BingoGameBoard.css'

export default function BingoGameBoardLayout({ playerId }) {
    return (
        <div className={`BingoGameBoard ${playerId === 1 ? "left-player" : "rigth-player"}`}>
            <p className="player-name">{`player ${playerId}`}</p>
            <div className="player-game">
                <Table textAlign="center" className="bingo-game-board" celled >
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                            <Table.Cell>

                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
BingoGameBoardLayout.defaultProps = {
    playerId : 1
}