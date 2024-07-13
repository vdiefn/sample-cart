import { useReducer, useState } from 'react'
import { CartContext, cartReducer, cartInit } from './store';

import Navbar from './components/Navbar'
import Products from './components/Products';
import Cart from './components/Cart';


function App() {
  const reducer = useReducer(cartReducer, cartInit)

  return (
    <CartContext.Provider value={reducer}>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Products />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
      
  )
}


export default App
