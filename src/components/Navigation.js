import { NavLink } from 'react-router-dom';

import'../css/navigation.css';

const Navigation = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <NavLink to="/"> <a className="navbar-brand"> <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/1200px-NBC_logo.svg.png"/> </a> </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink to="/">
                    <a className="text-light nav-item nav-link">Home</a>
                </NavLink>
                <NavLink to="/contact">
                    <a className="text-light nav-item nav-link">Contact</a>
                </NavLink>
                <NavLink to="/shop">
                    <a className="text-light nav-item nav-link" href="#">Shop</a>
                </NavLink>
                <NavLink to="/cart">
                    <a className="text-light nav-item nav-link">Cart</a>
                </NavLink>
                </div>
            </div>
        </nav>
     );
}
 
export default Navigation;