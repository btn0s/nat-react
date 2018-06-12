/*
 * action types
 */

export const GET_ALL_PRODUCTS          = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT               = 'GET_PRODUCT';

export const GET_ALL_COLLECTIONS       = 'GET_ALL_COLLECTIONS';
export const GET_COLLECTION            = 'GET_COLLECTION';

export const CREATE_CHECKOUT           = 'CREATE_CHECKOUT';
export const GET_CHECKOUT              = 'GET_CHECKOUT';
export const GET_CHECKOUT_ID           = 'GET_CHECKOUT_ID';
export const ADD_ITEM_TO_CHECKOUT      = 'ADD_ITEM_TO_CHECKOUT';
export const UPDATE_ITEM_IN_CHECKOUT   = 'UPDATE_ITEM_IN_CHECKOUT';
export const REMOVE_ITEM_FROM_CHECKOUT = 'REMOVE_ITEM_FROM_CHECKOUT';

/*
 * action creators
 */

export function getAllProducts() {
  return { type: GET_ALL_PRODUCTS }
  // client.product.fetchAll().then(products => {
  //   this.setState({ products: products });
  // });
}

export function getProduct(productId) {
  return { type: GET_PRODUCT, productId }
  // client.product.fetch(productId).then(product => {
  //   console.log(product);
  // });
}

export function getAllCollections() {
  return { type: GET_ALL_COLLECTIONS }
  // client.collection.fetchAllWithProducts().then(collections => {
  //   this.setState({ collections: collections });
  // });
}

export function getCollection(collectionId) {
  return { type: GET_COLLECTION, collectionId }
  // client.collection.fetchWithProducts(collectionId).then(collection  => {
  //   console.log(collection);
  // });
}

export function createCheckout() {
  return { type: CREATE_CHECKOUT }
  // client.checkout.create().then(checkout => {
  //   this.setState({ checkout: checkout });
  // });
}

export function getCheckout() {
  return { type: GET_CHECKOUT }
  // client.checkout.fetch(this.getCheckoutID()).then(checkout => {
  //   this.setState({ checkout: checkout });
  // });
}

export function getCheckoutID() {
  return { type: GET_CHECKOUT_ID }
}

export function addItemToCheckout(lineItemsToAdd) {
  return { type: ADD_ITEM_TO_CHECKOUT, lineItemsToAdd }
  // client.checkout.addLineItems(this.getCheckoutID(), lineItemsToAdd).then(checkout => {
  //   this.getCheckout();
  // });
}

export function updateItemInCheckout(lineItemsToUpdate) {
  return { type: UPDATE_ITEM_IN_CHECKOUT, lineItemsToUpdate }
  // client.checkout.updateLineItems(this.getCheckoutID(), lineItemsToUpdate).then(checkout => {
  //   this.getCheckout();
  // });
}

export function removeItemFromCheckout(lineItemIdsToRemove) {
  return { type: REMOVE_ITEM_FROM_CHECKOUT, lineItemIdsToRemove }
  // client.checkout.removeLineItems(this.getCheckoutID(), lineItemIdsToRemove).then(checkout => {
  //   this.getCheckout();
  // });
}