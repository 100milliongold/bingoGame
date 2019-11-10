import { combineReducers } from 'redux';
import { RESET_GAMES, SELECT_NUMBER, CHANGE_TURN} from '../actions'
import _ from "lodash";


const DEFAULT_PLAYERS = 2
const gameStatus = {
    /**
     * 각 게임화면의 플레이어 상테 정보 
     * [
     *      {playerId : 0 , bingoList : [1,2,3 ... 25] ,  }
     * ]
     */
    players: [
        { playerId: 0, bingoList: [], bingo: 0 },
        { playerId: 1, bingoList: [], bingo: 0 }
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


const commands = (state = gameStatus, action) => {
    switch (action.type) {
        case RESET_GAMES:
            return Object.assign({}, state, {
                players: _.chain()
                    .range(DEFAULT_PLAYERS)
                    .map(playerId =>({
                        playerId,
                        bingoList: _(_.range(1, 26)).shuffle(25).value(),
                        bingo : 0,
                    }))
                .value(),
                gameTurn: (state.gameTurn === -1) ? 0 : state.gameTurn,
                callNumbers: [],
            }) 
        case SELECT_NUMBER:
            let callNumbers = state.callNumbers;
            callNumbers.push(action.number)            
            return Object.assign({}, state, {
                callNumbers,
                gameTurn: (state.gameTurn + 1) % DEFAULT_PLAYERS
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
});

export default bingoApp;