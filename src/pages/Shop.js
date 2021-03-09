import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/shop.css'

const Shop = ({products}) => {
return (
  <div className="shopWrapper">
    <h2 className="my-4">Your cart</h2>
      <div className="card-deck mx-4 my-3">
        {products.map(prod => (
          <Link
          key={prod.id}
          to={{pathname:`shop/${prod.name}`,
          state:{productData:{prod}}}}
          >
            <div className="card my-4">
              <img className="card-img-top" src={prod.img} alt={prod.name}/>
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Shop);