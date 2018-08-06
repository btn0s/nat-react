import client from '../../client';
import { 
  GET_ALL_PRODUCTS, 
  GET_PRODUCT, 
  GET_ALL_COLLECTIONS,
  GET_COLLECTION,
  CREATE_CHECKOUT,
  GET_CHECKOUT,
} from '../../constants/action-types';

export function getAllProducts() {
  return dispatch => {
    client.product.fetchAll().then(products => {
      return dispatch({ type: GET_ALL_PRODUCTS, payload: products });
    });
  }
}

export function getProduct(productId) {
  return dispatch => {
    client.product.fetch(productId).then(product => {
      return dispatch({ type: GET_PRODUCT, payload: product })
    });
  }
}

export function getAllCollections() {
  return dispatch => {
    client.collection.fetchAllWithProducts().then(collections => {
      return dispatch({ type: GET_ALL_COLLECTIONS, payload: collections })
    });
  }
}

export function getCollection(collectionId) {
  return dispatch => {
    client.collection.fetchWithProducts(collectionId).then(collection  => {
      return dispatch({ type: GET_COLLECTION, payload: collection })    
    });
  }
}

export function createCheckout() {
  return dispatch => {
    client.checkout.create().then(checkout => {
      console.log(checkout)
      return dispatch({ type: CREATE_CHECKOUT, payload: checkout })
    });
  }
}

export function getCheckout(checkoutId) {
  return dispatch => {
    client.checkout.fetch(checkoutId).then(checkout => {
      return dispatch({ type: GET_CHECKOUT, payload: checkout })
    });
  }
}

export function addItemToCheckout(checkoutId, lineItemsToAdd) {
  return dispatch => {
    client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(checkout => {
      return dispatch({ type: GET_CHECKOUT, payload: checkout })
    });
  }
}

export function updateItemInCheckout(checkoutId, lineItemsToUpdate) {
  return dispatch => {
    client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(checkout => {
      return dispatch({ type: GET_CHECKOUT, payload: checkout })
    });
  }
}

export function removeItemFromCheckout(checkoutId, lineItemIdsToRemove) {
  return dispatch => {
    client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then(checkout => {
      return dispatch({ type: GET_CHECKOUT, payload: checkout })    
    });
  }
}