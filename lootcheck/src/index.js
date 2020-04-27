import React from 'react';
import App from './components/App';
import {render} from 'react-dom';
import {createStore} from 'redux';
import rootReducer from './reducers/balance';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);