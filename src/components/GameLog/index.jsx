import React, { Component } from 'react'
import { connect } from 'react-redux';

import GameLogLayout from './GameLogLayout'
export class GameLog extends Component {
    render() {
        return (
            <GameLogLayout
                gameTurn={this.props.gameTurn}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        gameTurn: state.commands.gameTurn,
    };
}
GameLog = connect(mapStateToProps)(GameLog);
export default GameLog
