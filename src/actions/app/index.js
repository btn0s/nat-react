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

export function getCheckout() {
  return dispatch => {
    client.checkout.fetch(this.getCheckoutID()).then(checkout => {
      return dispatch({ type: GET_CHECKOUT, payload: checkout })
    });
  }
}

export function addItemToCheckout(lineItemsToAdd) {
  return dispatch => {
    client.checkout.addLineItems(this.getCheckoutID(), lineItemsToAdd).then(checkout => {
      return dispatch({ type: GET_CHECKOUT, payload: checkout })
    });
  }
}

export function updateItemInCheckout(lineItemsToUpdate) {
  return dispatch => {
    client.checkout.updateLineItems(this.getCheckoutID(), lineItemsToUpdate).then(checkout => {
      return dispatch({ type: GET_CHECKOUT, payload: checkout })
    });
  }
}

export function removeItemFromCheckout(lineItemIdsToRemove) {
  return dispatch => {
    client.checkout.removeLineItems(this.getCheckoutID(), lineItemIdsToRemove).then(checkout => {
      return dispatch({ type: GET_CHECKOUT, payload: checkout })    
    });
  }
}