import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


const app = shallow(<App />);

//App unit tests
describe('App', () => {
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('initializes the `state` with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking the add gift button', () => {
        //use a beforeEach to click the button before executing this describe block
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });
        //cleaning up the button click, reset the gift-list array after each test, so we avoid test pollution
        afterEach(() => {
            app.setState({gifts: []})
        });
        it('adds a new gift to `state` when clicking the `add gift` button', () => {
            expect(app.state().gifts).toEqual([{id: 1}])
        });
        
        it('adds a new gift to the rendered list when clicking the add gift button', () => {            
            expect(app.find('.gift-list').children().length).toEqual(1);
        });
    });
});


