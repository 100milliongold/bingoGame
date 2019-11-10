import React, { Component } from 'react'
import { connect } from 'react-redux';

import GameLogLayout from './GameLogLayout'
export class GameLog extends Component {
    render() {
        return (
            <GameLogLayout
                gameTurn={this.props.gameTurn}
                players={this.props.players}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        gameTurn: state.commands.gameTurn,
        players: state.commands.players,
    };
}
GameLog = connect(mapStateToProps)(GameLog);
export default GameLog
