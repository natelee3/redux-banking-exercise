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
    const balance = document.querySelector('#balance');
    balance.innerText = state.balance;
});

const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');
const amount = document.querySelector('#amount');

increaseButton.addEventListener('click', (e) => {
    e.preventDefault();
    const amountValue = parseInt(amount.value);
    store.dispatch(actionIncrement(amountValue));
});

decreaseButton.addEventListener('click', (e) => {
    e.preventDefault();
    const amountValue = parseInt(amount.value);
    store.dispatch(actionDecrement(amountValue));
});
