import { Link, NavLink } from 'react-router-dom';
import'../css/home.css';

const Home = () => {
    return ( 
        <div className="wrapper my-5">
          <section>
          <h3 className="titleSection h2">Lorem ipsum</h3>
          <p className="describe mx-auto my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam, officiis, laboriosam dignissimos facilis tempore assumenda eligendi consequuntur laborum impedit dolorum eveniet voluptatem dolore? Inventore autem placeat eos sit consequatur ipsum tempore quam quia iusto necessitatibus consectetur beatae corporis molestias odit alias deserunt culpa exercitationem voluptate magni, incidunt quisquam molestiae facere! Soluta quas rem aliquid omnis suscipit officiis cupiditate consectetur, alias quidem enim mollitia vitae temporibus dicta doloribus error delectus voluptas quae aut, nesciunt ab? Nihil quisquam mollitia aliquam cupiditate ipsa libero natus? Porro ex aliquam corporis qui deleniti quaerat asperiores error soluta tenetur maiores commodi voluptate saepe voluptatum repellat quibusdam debitis veritatis, quisquam praesentium eos assumenda? Ipsa nesciunt velit unde qui molestias beatae dolores voluptatem quod ullam nisi, doloremque, quos sed atque, maxime corporis assumenda id vero libero laudantium ratione commodi sunt! Dolorum neque enim quia reiciendis in quaerat error porro ipsam, mollitia tempora saepe laboriosam explicabo temporibus ipsum iusto eum est deserunt blanditiis sint eligendi nesciunt consectetur adipisci non veniam! Reiciendis impedit suscipit eos nemo recusandae minima sint maxime obcaecati laboriosam perspiciatis distinctio fugiat pariatur corporis autem ducimus incidunt eveniet, culpa, officiis rerum. Non vero tempora earum molestias iusto praesentium obcaecati reprehenderit perspiciatis, soluta consequatur repudiandae repellendus recusandae aut ab, itaque commodi aliquid sunt qui sed.</p>
      </section> 
            <h3 className="titleSection h2">Sets</h3>
          <div className="card-deck my-3">
            <div className="card mb-5">
            <img className="card-img-top" src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg" alt="Blog no 1"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
            <div className="card mb-5">
            <img className="card-img-top" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="Blog no 2"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
            <div className="card mb-5">
            <img className="card-img-top" src="https://static01.nyt.com/images/2019/12/17/books/review/17fatbooks/17fatbooks-superJumbo.jpg" alt="Blog no 3"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>
        </div>
          <div className="jumbotron">
        <h4 className="h1">Contact with us!</h4>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore, possimus atque quia illum reiciendis.</p>
        <hr className="my-4"/>
        <p className="lead">
        <NavLink to="/contact">
            <button className="btn btn-warning btn-lg">Contact</button>
        </NavLink>
        </p>
        </div>
        </div>
     );
}
 
export default Home;