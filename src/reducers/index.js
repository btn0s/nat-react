import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return {...state, products: [...state.products.all, action.payload]};
    case 'GET_PRODUCT':
      return {...state, products: [...state.products.current, action.payload]};
    default:
      return state;
  }
}

const collectionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_COLLECTIONS':
      return {...state, collections: [...state.collections.all, action.payload]};
    case 'GET_COLLECTION':
      return {...state, collections: [...state.collections.current, action.payload]};
    default:
      return state;
  }
}

const checkoutReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_CHECKOUT':
      return {...state, checkout: [...state.checkout, action.payload]};
    case 'GET_CHECKOUT':
      return {...state, checkout: [...state.checkout, action.payload]};
    default:
      return state;
  }
}

export default combineReducers({
  routing: routerReducer,
  products: productReducer,
  collections: collectionReducer,
  checkout: checkoutReducer
})
