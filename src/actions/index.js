export const RESET_GAMES = 'RESET_GAMES';
export const SELECT_NUMBER = 'SELECT_NUMBER';
export const CHANGE_TURN = 'CHANGE_TURN';

export const SHOW_ALERT = 'SHOW_ALERT';
export const CLOSE_ALERT = 'CLOSE_ALERT';


export function reset_games() {
    return {
        type: RESET_GAMES
    };
}

export function select_number(number) {    
    return {
        type: SELECT_NUMBER,
        number
    };
}

export function change_turn() {
    return {
        type: CHANGE_TURN,
    };
}

export function show_alert(message) {
    return {
        type: SHOW_ALERT,
        message
    };
}
export function close_alert() {
    return {
        type: CLOSE_ALERT
    };
}