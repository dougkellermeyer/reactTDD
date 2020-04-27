import * as constants from '../actions/constants';
//reducer has two params (1) Initial/default state (2) and action
const balance = (state = 0, action) => {
    switch(action.type){
        case constants.SET_BALANCE: 
            return action.balance;
        case constants.DEPOSIT:
            return state + action.deposit;
        case constants.WITHDRAW:
            return state - action.withdrawal
        default:
            return state;
    }
};

export default balance;