import _ from 'lodash'




/**
 * 수직행 빙고수 계산 알고리즘
 * @param {*} bingoGameBoard 
 * @param {*} playerSelectNumber 
 */
function checkColumn(bingoGameBoard, playerSelectNumber) {
    return _(bingoGameBoard)
        .toPairs()
        .groupBy(([k, v]) => parseInt(k) % 5)
        .map((v) => _.flatMap(v, ([k, v]) => v))
        .filter( row_list => {
            return _(playerSelectNumber)
                .filter(number => row_list.indexOf(number) !== -1)
                .value()
                .length === 5
        })
        .value()
}

/**
 * 가로행 빙고수 계산 알고리즘
 * @param {*} bingoGameBoard 
 * @param {*} playerSelectNumber 
 */
function checkRow(bingoGameBoard, playerSelectNumber) {
    return _(bingoGameBoard)
        .toPairs()
        .groupBy(([k, v]) => Math.floor(parseInt(k) / 5))
        .map((v) => _.flatMap(v, ([k, v]) => v))
        .filter(row_list => {
            return _(playerSelectNumber)
                .filter(number => row_list.indexOf(number) !== -1)
                .value()
                .length === 5
        })
        .value()
}

/**
 * 대각선 빙고 체크
 * @param {*} bingoGameBoard 
 * @param {*} playerSelectNumber 
 */
function checkCross(bingoGameBoard, playerSelectNumber) {
    // 0 ~ 25 까지의 좌측 대각선 ( \ ) 리스트
    const letfDiagonalList = _(_.range(25)).filter(o => o%6 === 0).value();
    // 0 ~ 25 까지의 우측 대각선 ( / ) 리스트
    const rigthDiagonalList = _(_.range(25)).filter(o => o%4 === 0).value();

    const checkLetfDiagonal = _(bingoGameBoard)
        .filter((v, k) => letfDiagonalList.indexOf(k) !== -1 )
        .filter((v, k) => playerSelectNumber.indexOf(v) !== -1 )
        .value()        


    const checkRigthDiagonal = _(bingoGameBoard)
        .filter((v, k) => rigthDiagonalList.indexOf(k) !== -1)
        .filter((v, k) => playerSelectNumber.indexOf(v) !== -1)
        .value()
        
    // console.log(checkLetfDiagonal, checkRigthDiagonal);

    var result = _.concat(
        checkLetfDiagonal.length === 5 ? [checkLetfDiagonal] : [],
        checkRigthDiagonal.length === 5 ? [checkRigthDiagonal] : []
    )    

    return result;
}

/**
 * 해당유저의 빙고여부 확인
 * @param {*} bingoGameBoard 
 * @param {*} playerSelectNumber 
 */
export default function calculatorBingoGame( bingoGameBoard , playerSelectNumber ) {
    if( !bingoGameBoard || !playerSelectNumber ) return false;
    
    const resultCheckRow = checkRow(bingoGameBoard, playerSelectNumber)
    const resultCheckColumn = checkColumn(bingoGameBoard, playerSelectNumber)
    const resultCheckCross = checkCross(bingoGameBoard, playerSelectNumber)

    // console.log(resultCheckRow, resultCheckColumn, resultCheckCross);
    

    return _.concat(resultCheckRow ,resultCheckColumn ,resultCheckCross);
}