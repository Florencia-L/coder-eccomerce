import React from 'react';
import './App.scss';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavbarComponent />
      <Home greeting="Bienvenido a SportNow!">
        <ItemListContainer title="Item número 1" />
      </Home>
    </div>
  );
}

export default App;
