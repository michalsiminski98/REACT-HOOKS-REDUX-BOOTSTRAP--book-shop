import '../css/shop.css'

const Shop = () => {
    return ( 
        <>
            <h1 className="h2">Your cart</h1>
        <div className="cartWrapper">
            <div className="cartListWrapper">1
            <div className="card-deck mx-4 my-3">
                <div className="card">
                    <img className="card-img-top" src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg" alt="Blog no 1"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="Blog no 2"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg" alt="Blog no 3"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="summaryWrapper">
        </div>
        </>
     );
}
 
export default Shop;