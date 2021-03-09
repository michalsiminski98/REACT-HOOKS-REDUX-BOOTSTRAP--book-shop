import { NavLink } from 'react-router-dom';

import'../css/navigation.css';

const Navigation = () => {
  return ( 
  <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <NavLink to="/"  className="navbar-brand"><img alt="logo" className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/1200px-NBC_logo.svg.png"/></NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/" className="text-light nav-item nav-link">
            Home
          </NavLink>
          <NavLink className="text-light nav-item nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="text-light nav-item nav-link" to="/shop">
            Shop
          </NavLink>
          <NavLink className="text-light nav-item nav-link" to="/cart">
            Cart
          </NavLink>
        </div>
    </div>
  </nav>
  );
}
 
export default Navigation;