import React, {useState} from 'react';
import './App.scss';
import NavbarComponent from './components/navbarComponent/NavbarComponent';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemListContainer/ItemList/ItemList';

function App() {
  const [cart, setCart] = useState(0);

  const handleAdd = (quantity, stock)=>{
    if (quantity <= stock) {
      return()=>{
        setCart(cart + quantity); 
        console.log({cart});
      }	
    }
    	
  }

  return (
    <div className="App">
      
      <NavbarComponent />
      <Home greeting="Bienvenido a SportNow!">
        <ItemListContainer title="Calzas">
        </ItemListContainer>
        <ItemCount stock={20} initial={1} onAdd={handleAdd} />
      </Home>
    </div>
  );
}

export default App;
