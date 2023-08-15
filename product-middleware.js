const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Constant product
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";


// Initial product state
const productInitialState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2
}


// Action product
const getProducts = () => {
    return {
        type: GET_PRODUCT
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}


// Reducer product
const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
            }

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            return state;
    }
}



const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts());
store.dispatch(addProduct("oil"));
