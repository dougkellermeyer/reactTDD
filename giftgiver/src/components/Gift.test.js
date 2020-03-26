import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and a present in `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''});
    });

    describe('when typing into the person input', () => {
        const person = 'Mackenzie'; 

        beforeEach(() => {
            gift.find('.input-person').simulate('change', {target: { value: person }});
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person)
        })
    });

    describe('when typing in the present input', () => {
        const present = 'flowers';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', {target: {value: present}});
        });
        
        it('updates the present in `state', () => {
            expect(gift.state().present).toEqual(present);
        });
    })
});
