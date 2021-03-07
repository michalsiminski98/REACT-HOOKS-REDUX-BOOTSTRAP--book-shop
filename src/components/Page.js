import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Shop from '../pages/Shop';
import Item from '../pages/Item';
import Cart from '../pages/Cart';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return ( 
        <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route exact path="/shop">
                <Shop />
            </Route>
            <Route path="/shop/:id" component={Item}>
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/">
                <ErrorPage />
            </Route>
        </Switch>   
      </>
     );
}
 
export default Page;