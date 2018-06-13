import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import initialState from '../constants/initial-state'

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return {...state, all: action.payload};
    case 'GET_PRODUCT':
      return {...state, current: action.payload};
    default:
      return state;
  }
}

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_COLLECTIONS':
      return {...state, all: action.payload};
    case 'GET_COLLECTION':
      return {...state, current: action.payload};
    default:
      return state;
  }
}

const checkoutReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_CHECKOUT':
      return {...state, ...action.payload};
    case 'GET_CHECKOUT':
      return {...state, ...action.payload};
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
