import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reset_games } from '../../actions'
import MainPageLayout from './MainPageLayOut';
import _ from 'lodash'

export class MainPage extends Component {
    static propTypes = {

    }

    componentDidMount(){
        // console.log(this.props);
        
    }

    checkWinnerPlayer = (prevProps) => {
        const { players, callNumbers ,DEFAULT_WINS } = this.props;
         
        // console.log(players, DEFAULT_WINS);
        // console.log(prevProps.callNumbers, callNumbers);

        if (prevProps.callNumbers.length === callNumbers.length){
            const result = _(players)
                .filter(o => o.bingo.length >= DEFAULT_WINS)
                .value()
            if (result.length === 0) return false;
            else if (result.length === 1) {
                alert(`${result[0].playerId + 1}P가 빙고를 완성했습니다.`);
                this.props.resetButtonClick();
            }
            else if (result.length > 1) {
                alert(`무승부 입니다.`);
                this.props.resetButtonClick();
            }
        }
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkWinnerPlayer(prevProps)
    }

    render() {
        return <MainPageLayout
            gameTurn={this.props.gameTurn}
            players={this.props.players}

            resetButtonClickHandler={this.props.resetButtonClick}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        gameTurn: state.commands.gameTurn,
        players: state.commands.players,
        callNumbers: state.commands.callNumbers,
        DEFAULT_WINS: state.commands.DEFAULT_WINS,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        resetButtonClick: () => dispatch(reset_games()),
    }
}

MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default MainPage
