import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reset_games } from '../../actions'
import MainPageLayout from './MainPageLayOut';

export class MainPage extends Component {
    static propTypes = {

    }

    componentDidMount(){
        console.log(this.props);
        
    }
    render() {
        return <MainPageLayout
            gameTurn={this.props.gameTurn}
            players={this.props.players}

            resetButtonClickHandler={this.props.resetButtonClickHandler}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        gameTurn: state.commands.gameTurn,
        players: state.commands.players,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        resetButtonClickHandler: () => dispatch(reset_games()),
    }
}

MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default MainPage
