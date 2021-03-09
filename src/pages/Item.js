import { connect } from 'react-redux';
import { addToCart } from '../actions/actions';
import '../css/item.css'

const Item = (props) => {

  const {id, name, img, price} = props.location.state.productData.prod;
  
    return ( 
        <section className="productWrapper">
          <div className="productPhotoWrapper">
            <img src={img} alt="product"/>
          </div>
          <div className="productDescribeWrapper">
            <h3>{name}</h3>
            <p className="price">Price: $<span className="priceDetail"></span>{price}</p>
            <button
            onClick={() => props.addToCart(id)}
            className="bg-info text-light"
            >
              Add</button>
          </div>
        </section>
     );
};

const mapDispatchToProps = dispatch => ({
  addToCart: (id) => dispatch(addToCart(id)),
})
 
export default connect(null, mapDispatchToProps)(Item);