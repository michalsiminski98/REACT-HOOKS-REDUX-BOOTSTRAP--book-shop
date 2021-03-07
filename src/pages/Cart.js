import "../css/cart.css"

const Cart = () => {
    return ( 
        <div className="cartWrapper">
            <div className="card-deck mx-4 my-3 cartLeft">
                <div className="card my-4">
                    <img className="card-img-top" src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg" alt="Blog no 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card my-4">
                    <img className="card-img-top" src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg" alt="Blog no 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card my-4">
                    <img className="card-img-top" src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg" alt="Blog no 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card my-4">
                    <img className="card-img-top" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="Blog no 2"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="card my-4">
                    <img className="card-img-top" src="https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg" alt="Blog no 3"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
            <div class="jumbotron jumbotron-fluid cart-right">
  <div class="container">
    <h3 className="h2">Summary</h3>
    <p class="lead">Quantity: <span className="sumCount">5</span></p>
    <p class="lead">Sum: $<span className="sumCount">5</span></p>
    <button className="bg-success text-light">Order &amp; pay</button>
  </div>
</div>
        </div>
     );
}
 
export default Cart;