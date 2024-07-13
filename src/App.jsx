import { useReducer, useState } from 'react'
import { CartContext } from './store';

import Navbar from './components/Navbar'
import Products from './components/Products';
import Cart from './components/Cart';





function App() {
  const cartReducer = useReducer((state, action) => {
    const cartList = [...state.cartList]
    const index = cartList.findIndex((item) => item.id === action.payload.id)
    console.log(action)
    switch(action.type) {
      case 'ADD_TO_CART' :
        if(index === -1){
          cartList.push(action.payload)
        } else {
          cartList[index].quantity += action.payload.quantity
        }

        return {
          ...state,
          cartList,
          total: calculateTotalPrice(cartList)
        }
      case 'CHANGE_CART_QUANTITY' :
        cartList[index].quantity = action.payload.quantity
        return {
          ...state,
          cartList,
          total: calculateTotalPrice(cartList)
        }
      case 'REMOVE_CART_ITEM' :
        cartList.splice(index, 1)
        return {
          ...state,
          cartList,
          total: calculateTotalPrice(cartList)
        }
      default:
        return state
    }
  }, {
    cartList: []
  })

  return (
    <CartContext.Provider value={cartReducer}>
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

function calculateTotalPrice(cartList) {
  return cartList.map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);
}

export default App
