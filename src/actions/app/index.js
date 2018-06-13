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
  client.product.fetchAll().then(products => {
    return { type: GET_ALL_PRODUCTS, payload: products }
  });
}

export function getProduct(productId) {
  client.product.fetch(productId).then(product => {
    return { type: GET_PRODUCT, payload: product }
  });
}

export function getAllCollections() {
  client.collection.fetchAllWithProducts().then(collections => {
    return { type: GET_ALL_COLLECTIONS, payload: collections }
  });
}

export function getCollection(collectionId) {
  client.collection.fetchWithProducts(collectionId).then(collection  => {
    return { type: GET_COLLECTION, payload: collection }    
  });
}

export function createCheckout() {
  client.checkout.create().then(checkout => {
    return { type: CREATE_CHECKOUT, payload: checkout }
  });
}

export function getCheckout() {
  client.checkout.fetch(this.getCheckoutID()).then(checkout => {
    return { type: GET_CHECKOUT, payload: checkout }
  });
}

export function addItemToCheckout(lineItemsToAdd) {
  client.checkout.addLineItems(this.getCheckoutID(), lineItemsToAdd).then(checkout => {
    return { type: GET_CHECKOUT, payload: checkout }
  });
}

export function updateItemInCheckout(lineItemsToUpdate) {
  client.checkout.updateLineItems(this.getCheckoutID(), lineItemsToUpdate).then(checkout => {
    return { type: GET_CHECKOUT, payload: checkout }
  });
}

export function removeItemFromCheckout(lineItemIdsToRemove) {
  client.checkout.removeLineItems(this.getCheckoutID(), lineItemIdsToRemove).then(checkout => {
    return { type: GET_CHECKOUT, payload: checkout }    
  });
}