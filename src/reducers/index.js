import { combineReducers } from 'redux';
import { RESET_GAMES, SELECT_NUMBER, CHANGE_TURN} from '../actions'
import { SHOW_ALERT, CLOSE_ALERT } from '../actions'

import _ from "lodash";
import getBingoList from '../services/calculatorBingoGame'

/**
 * 게임 플레이어
 */
const DEFAULT_PLAYERS = 2
/**
 * 승리를 만족하는 빙고 갯수
 */
// const DEFAULT_WINS = 1

const gameStatus = {
    DEFAULT_WINS : 5,
    /**
     * 각 게임화면의 플레이어 상테 정보 
     * [
     *      {playerId : 0 , bingoList : [1,2,3 ... 25] ,  }
     * ]
     */
    players: [
        { playerId: 0, bingoList: [], bingo: [] },
        { playerId: 1, bingoList: [], bingo: [] }
    ],
    /**
     * 플레이어가 부른 숫자정보
     */
    callNumbers : [],
    
    /**
     * -1 : 시작전
     * 0 ~ DEFAULT_PLAYERS -1: 해당아이디 차례
     */
    gameTurn : -1,
};

const alertStatus = {
    is_show : false,
    message : "",
}

const alert = (state = alertStatus , action)=>{
    switch (action.type) {
        case SHOW_ALERT:
            return Object.assign({}, state, {
                is_show: !state.is_show,
                message: action.message,
            })
        case CLOSE_ALERT:
            return Object.assign({}, state, {
                is_show: !state.is_show,
                message: "",
            })
        default:
            return state;
    }
}




const commands = (state = gameStatus, action) => {
    switch (action.type) {
        case RESET_GAMES:
            return Object.assign({}, state, {
                players: _.chain()
                    .range(DEFAULT_PLAYERS)
                    .map(playerId =>({
                        playerId,
                        bingoList: 
                            _(_.range(1, 26))
                            .shuffle()
                            .value(),
                        bingo : [],
                    }))
                .value(),
                gameTurn: 0,
                callNumbers: [],
            }) 
        case SELECT_NUMBER:
            let callNumbers = state.callNumbers;
            callNumbers.push(action.number)            
            return Object.assign({}, state, {
                callNumbers,
                gameTurn: (state.gameTurn + 1) % DEFAULT_PLAYERS,
                players : _(state.players).map(o => {                    
                    return {
                        ...o,
                        bingo: getBingoList(o.bingoList, callNumbers)
                    }
                }).value()
            })
        
        case CHANGE_TURN:
            return Object.assign({}, state, {
                gameTurn: (state.gameTurn +1) % DEFAULT_PLAYERS
            })
        default:
            return state;
    }
}

const bingoApp = combineReducers({
    commands,
    alert
});

export default bingoApp;