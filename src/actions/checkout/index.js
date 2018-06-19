import { TOGGLE_CHECKOUT } from '../../constants/action-types'

export function openCheckout() {
  return { type: TOGGLE_CHECKOUT, payload: true };
}

export function closeCheckout() {
  return { type: TOGGLE_CHECKOUT, payload: false };
}