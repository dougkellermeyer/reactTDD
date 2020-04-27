import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import { Wallet } from './Wallet';
import Adapter from 'enzyme-adapter-react-16';

//setup adaptor to make enzyme happy 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('wallet', () => {
    const mockDeposit = jest.fn();
    const mockWithdrawal = jest.fn();

    const props = {
        balance: 20, 
        deposit: mockDeposit,
        withdraw: mockWithdrawal
    };
    const wallet = shallow(<Wallet {...props}/>);

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

    it('creates an input to deposit or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user types in the wallet input', () => {
        //use a string as input from DOM is a string
        const userBalance = '25';
    
        beforeEach(() => {
            wallet.find('.input-wallet')
            .simulate('change', {target: {value: userBalance}});
        });
    
        it('updates the local wallet balance in the `state` and converts it to a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });

        describe('the user wants to make a deposit', () => {
            beforeEach(() => {
                wallet.find('.btn-deposit')
                .simulate('click')
            });

            it('dispatches the `deposit()` it receives from props with local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });
        describe('the user wants to make a withdrawal', () => {
            beforeEach(() => {
                wallet.find('.btn-withdraw')
                .simulate('click')
            });

            it('dispatches the `withdraw()` it receives from props with local balance', () => {
                expect(mockWithdrawal).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        }); 
    });

}); 

