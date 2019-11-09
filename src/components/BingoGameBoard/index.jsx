import React, { Component } from 'react'
import BingoGameBoardLayout from './BingoGameBoardLayout'

export default class BingoGameBoard extends Component {
    render() {
        const { playerId } = this.props
        return (
            <BingoGameBoardLayout
                playerId={playerId}
            />
        )
    }
}
