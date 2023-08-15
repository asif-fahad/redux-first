// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// Constants
const ADD_USER = 'ADD_USER';

const initialState = {
    user: ['Fahad'],
    count: 1
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    };
}


const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            return {
                user: [...state.user, action.payload],
                count: state.count + 1
            }


        default:
            state;
    }

}


const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser('Asif'));
store.dispatch(addUser('Safkat'));