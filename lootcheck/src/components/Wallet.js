import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deposit, withdraw} from '../actions/balance';

export class Wallet extends Component {
    constructor() {
        super();

        this.state = {
            balance: undefined
        };
    }

    updateBalance = event => this.setState({balance: parseInt(event.target.value, 10)  });

    deposit = () => this.props.deposit(this.state.balance);
    withdraw = () => this.props.withdraw(this.state.balance);

    render(){
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <br></br>
                <input 
                    className='input-wallet'
                    onChange={this.updateBalance}
                >
                </input>
                <button onClick={this.deposit} className='btn-deposit'>Deposit</button>
                <button onClick={this.withdraw} className='btn-withdraw'>Withdraw</button>
            </div>
        )
    }
};

//need to export the connected version of Wallet to connect it to the Redux store

//connect() takes 2 params: 
//(1) a function describes what part of store we want to use on this component 
//(2) Describes what action creators we want to to pass data to store (null for now)

//the state => {...} is known as the map state to props part of the connect function
export default connect(state => { return {balance: state.balance }}, {deposit, withdraw})(Wallet); 