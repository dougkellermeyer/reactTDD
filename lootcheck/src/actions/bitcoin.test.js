import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {FETCH_BITCOIN} from './constants';
import {fetchBitcoin} from './bitcoin';
import { configure } from 'enzyme';

//Coindesk current price API endpoint 
//https://api.coindesk.com/v1/bpi/currentprice.json

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitcoin: {}});

//fetchmock always you stub an endpoint and return our own mock data
const mockResponse = {
    body: {bpi: 'bitcoin price index'}
};
//first arg is the endpoint, the second is the response
fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

it('creates an async to fetch the bitcoin value', () => {
    const expectedActions = [
        {bitcoin: mockResponse.body, type: FETCH_BITCOIN}
    ];

    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});



