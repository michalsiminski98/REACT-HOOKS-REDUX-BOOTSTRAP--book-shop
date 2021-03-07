import { Link } from 'react-router-dom';
import '../css/shop.css'

const products = [
    {id:0,name:'asd',price: 8, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
    {id:1,name:'aasddasd',price: 10, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
    {id:2,name:'dziala',price: 30, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
    {id:3,name:'raz',price: 25, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
    {id:4,name:'dwa',price: 6, img:'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg'},
];

const Shop = () => {
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
export default Shop;