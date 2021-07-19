'use strict';

// import { createStore } from 'redux';

const { createStore } = Redux;

console.log('App started');


//Default State
const defaultState = {
    balance: 0
};

//Action!
const actionIncrement = (amount) => {
    return {
        type: 'INCREMENT',
        payload: amount
    }
};

const actionDecrement = (amount) => {
    return {
        type: 'DECREMENT',
        payload: amount
    }
};

//Reducer
function account(state = defaultState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                balance: state.balance + action.payload
            }
        case 'DECREMENT':
            return {
                balance: state.balance - action.payload
            }
    }

    return state;
}

const store = createStore(
    account,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
store.subscribe(() => {
    console.log('State has updated');
    const state = store.getState();
    console.log(state);
})

store.dispatch(actionIncrement(400));
store.dispatch(actionDecrement(40))
