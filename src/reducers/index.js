import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return {};
    case 'GET_PRODUCT':
      return action.id
    default:
      return state;
  }
}

const collectionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_COLLECTIONS':
      return {};
    case 'GET_COLLECTION':
      return action.id;
    default:
      return state;
  }
}

const checkoutReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_CHECKOUT':
      return {};
    case 'GET_CHECKOUT':
      return action.id;
    case 'GET_CHECKOUT_ID':
      return {};
    case 'ADD_ITEM_TO_CHECKOUT':
      return action.id;
    case 'UPDATE_ITEM_IN_CHECKOUT':
      return action.id;
    case 'REMOVE_ITEM_FROM_CHECKOUT':
      return action.id;
    default:
      return state;
  }
}

export default combineReducers({
  routing: routerReducer,
  product: productReducer,
  collection: collectionReducer,
  checkout: checkoutReducer
})