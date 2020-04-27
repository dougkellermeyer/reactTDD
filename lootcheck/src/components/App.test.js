import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//setup adaptor to make enzyme happy 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

const app = shallow(<App />);

describe('App', () => {
    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });
    it('contains a connected Wallet component', () => {
        //see if we're getting a connected version of the Wallet component in our app
        // console.log(app.debug());
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })
});