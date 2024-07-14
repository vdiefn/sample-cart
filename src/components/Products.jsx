
import { CartContext } from "../store"
import { useContext, useState } from "react"

import productsData from "../assets/productsData"


function Products() {
  const [state, dispatch] = useContext(CartContext)
  const [qty, setQty]=useState(1)

  return (<div className="row row-cols-3 g-3">
    {
      productsData.map((product) => {
        return (<div className="col" key={product.id}>
          <div className="card">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">{product.title}
                <span className="float-end">NT$ {product.price}</span>
              </h6>
              <select name='' id='' className="qty"onChange={((e) => {
                e.preventDefault()
                const quantity = parseInt(e.target.value) 
                dispatch({
                  type: 'CHANGE_PRODUCT_QUANTITY',
                  payload: {
                    ...product,
                    quantity
                  }
                })
              })}>
                {
                  [...Array(20)].map((_,i) => {
                    return( <option value={i+1} key={i}>{i+1}</option>
                    )
                  })
                }
              </select>

              <button type="button" className="btn btn-outline-primary w-100" 
              onClick={(e)=> {
                const quantity = parseInt(e.target.previousSibling)
                console.log(quantity)
                e.target.previousSibling.value = 1
                dispatch({
                type: 'ADD_TO_CART',
                payload: {
                  ...product,
                  quantity: quantity? quantity: 1
                }
              })}}>加入購物車</button>
            </div>
          </div>
        </div>

        )
      })
    }
    
   
  </div>

  )
}

export default Products