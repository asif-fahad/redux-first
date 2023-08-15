const { createStore, combineReducers } = require("redux");

// Constant product
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// Constant product
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// Initial product state
const productInitialState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2
}

// Initial cart state
const cartInitialState = {
    carts: ["mouse", "keyboard"],
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

// Action cart
const getCarts = () => {
    return {
        type: GET_CART
    }
}

const addCart = (cart) => {
    return {
        type: ADD_CART,
        payload: cart
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

// Reducer cart
const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
            }

        case ADD_CART:
            return {
                carts: [...state.carts, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

        default:
            return state;
    }
}

const reducerCombined = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(reducerCombined);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts());
store.dispatch(addProduct("oil"));

store.dispatch(getCarts());
store.dispatch(addCart("pendrive"));