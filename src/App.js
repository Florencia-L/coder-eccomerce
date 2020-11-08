import React from 'react';
import './App.scss';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />

        <Switch>

          <Route exact path="/">
            <Home greeting="Bienvenido a SportNow!">
              <ItemListContainer title="Calzas">
              </ItemListContainer>
            </Home>
          </Route>

          <Route path="/item/:id">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/cart">
            <div className="container">
              <h3>Here we have the cart view with items selected</h3>
            </div>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
