import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

const app = shallow(<App />);

describe('App', () => {
    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });
});