import React, { Component } from 'react'
import BingoGameBoardLayout from './BingoGameBoardLayout'
import { select_number, show_alert } from '../../actions'
import { connect } from 'react-redux';

export class BingoGameBoard extends Component {
    /**
     * 버튼클릭시 이벤트 함수
     */
    bingoButtonClick = (number) => {
        const { gameTurn, callNumbers } = this.props
        const { playerId, } = this.props.player;
        if (number === undefined || gameTurn === -1 ) return false;
        if (playerId !== gameTurn){
            this.props.show_alert('해당 차례가 아닙니다.')
            return false;
        }
        if (callNumbers.indexOf(number) !== -1){
            return false;
        }
        return this.props.select_number(number);
    }


    render() {
        // console.log(this.props.callNumbers);
        const { playerId, bingoList} = this.props.player;
        const { gameTurn } = this.props
        return (
            <BingoGameBoardLayout
                // 플레이어 1 ,2
                playerId={playerId}
                // 플레이어들에서 할당된 빙고판 번호
                bingoList={bingoList}
                // 플레이어 순서
                gameTurn={gameTurn}
                // 플레이어들이 선택한 값들
                callNumbers={this.props.callNumbers}
                // 버튼클릭시 이벤트 처리
                bingoButtonClick={this.bingoButtonClick}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        /**
         * 플레이어가 선택한 번호 리스트
         */
        callNumbers: state.commands.callNumbers
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        /**
         * 플레이어가 선택한 번호들을 저장
         */
        select_number: (number) => dispatch(select_number(number)),

        show_alert: (message) => dispatch(show_alert(message)),
    }
}

BingoGameBoard = connect(mapStateToProps, mapDispatchToProps)(BingoGameBoard);
export default BingoGameBoard
