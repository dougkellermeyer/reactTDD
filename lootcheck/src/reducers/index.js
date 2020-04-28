import {combineReducers} from 'redux';
import balance from './balance';
import bitcoin from './bitcoin';

//need to combine the balance and bitcoin reducers
//use combine reducer function
export default combineReducers({balance, bitcoin});