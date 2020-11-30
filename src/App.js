import React from 'react';
import './App.scss';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListContainerCategory from './components/ItemListContainer/itemListContainerCategory';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './context/CartContext/CartContext';
import Cart from './components/Cart/Cart'


function App() {

  return (
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <div className="App">
          <NavbarComponent />

          <Switch>

            <Route exact path="/">
              <Home greeting="Bienvenido a SportNow!">
                <ItemListContainer />
              </Home>
            </Route>

            <Route exact path="/item/:id">
                <ItemDetailContainer/>
            </Route>

            <Route path="/category/:categoryId">
              <Home greeting="SportNow!">
                <ItemListContainerCategory />
              </Home>
            </Route>

            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
