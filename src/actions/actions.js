import * as ActionTypes from './actionsType';

// adding
export const addToCart = (itemID) => ({
  type:ActionTypes.ADD,
  payload:{
    id: itemID,
  }
});
// removing
export const removeFromCart = (itemID) => ({
  type: ActionTypes.REMOVE,
  payload:{
    id: itemID,
  }
});
// changing quantity any item
export const adjustQuantity = (itemID, count) => ({
  type: ActionTypes.ADJUST_QTY,
  payload:{
    id: itemID,
    quantity: count,
  }
});
