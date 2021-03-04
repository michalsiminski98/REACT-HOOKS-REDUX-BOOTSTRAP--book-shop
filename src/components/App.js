import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

import { BrowserRouter as Router } from "react-router-dom";

import '../css/reset.css';

function App() {
  return (
      <Router>
        <Header/>
        <Navigation/>
        <Page/>
        <Footer/>
      </Router>
  );
}

export default App;
