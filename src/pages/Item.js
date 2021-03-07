import '../css/item.css'

const Item = (props) => {

  const {name, img, price} = props.location.state.productData.prod;

    return ( 
        <section className="productWrapper">
          <div className="productPhotoWrapper">
            <img src={img} alt="product"/>
          </div>
          <div className="productDescribeWrapper">
            <h3>{name}</h3>
            <p className="price">Price: $<span className="priceDetail"></span>{price}</p>
            <button className="bg-info text-light">Add</button>
          </div>
        </section>
     );
}
 
export default Item;