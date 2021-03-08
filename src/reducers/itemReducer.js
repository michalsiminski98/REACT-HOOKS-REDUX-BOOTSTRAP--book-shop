import * as ActionsTypes from '../actions/actionsType';

const INITIAL_STATE = {
  products: [
    {id:0,name:'asd',price: 8, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
    {id:1,name:'aasddasd',price: 10, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
    {id:2,name:'dziala',price: 30, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
    {id:3,name:'raz',price: 25, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
    {id:4,name:'dwa',price: 6, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
  ],
  cart: [],
}

const itemReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    // adding
    case ActionsTypes.ADD:
  }
}