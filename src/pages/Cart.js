import { connect } from "react-redux";
import { removeFromCart } from "../actions/actions";
import "../css/cart.css"

const Cart = ({cart, removeFromCart}) => {

  let number = 0;
  const sumQuantity = cart.map(item => number += item.qty);
  let value = 0;
  const sumValue = cart.map(item => value += item.qty * item.price);

    return ( 
  <div className="cartWrapper">
      <div className="card-deck mx-4 my-3 cartLeft">
        {cart.map(item => (
          <div className="card my-4" key={item.id}>
          <img className="card-img-top" alt={item.name} src={item.img}/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Cancel</button>
            </div>
          </div>
        ))}
      </div>
      <div className="jumbotron jumbotron-fluid cart-right">
      <div className="container">
        <h3 className="h2">Summary</h3>
        <p className="lead">Quantity: <span className="sumCount">{number}</span></p>
        <p className="lead">Sum: $<span className="sumCount">{value}</span></p>
        <button className="bg-success text-light">Order &amp; pay</button>
      </div>
    </div>
  </div>
     );
}

const mapStateToProps = state => ({
  cart: state.shop.cart,
})
const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);