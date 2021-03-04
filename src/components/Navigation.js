import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/"> <a className="navbar-brand">LOGO</a> </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink to="/">
                    <a className="nav-item nav-link active">Home</a>
                </NavLink>
                <NavLink to="/contact">
                    <a className="nav-item nav-link">Contact</a>
                </NavLink>
                <NavLink to="/shop">
                    <a className="nav-item nav-link" href="#">Shop</a>
                </NavLink>
                <NavLink to="/cart">
                    <a className="nav-item nav-link">Cart</a>
                </NavLink>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;