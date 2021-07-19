'use strict';

import { createStore } from 'redux';

console.log('App started');


//Default State
const defaultState = {
    balance: 0
};

//Action!
const actionIncrement = {
    type: 'INCREMENT'
};

const actionDecrement = {
    type: 'DECREMENT'
};

//Reducer
function account(state = defaultState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                balance: state.balance + 1
            }
        case 'DECREMENT':
            return {
                balance: state.balance - 1
            }
    }

    return state;
}

const store = createStore(account);
store.subscribe(() => {
    console.log('State has updated');
    const state = store.getState();
    console.log(state);
})

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionDecrement);