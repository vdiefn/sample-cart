import { useContext } from "react"
import { CartContext } from "../store"


function Cart(){
  const [state, dispatch] = useContext(CartContext)
  
  return (<div className="bg-light p-3">
    <table className="table align-middle">
      <tbody>
        {
          state.cartList.map((item) => {
            return (<tr key={item.id}>
              <td>
                <button type='button' className='btn' onClick={
                  () => {
                    dispatch({
                      type: 'REMOVE_CART_ITEM',
                        payload: {
                          ...item
                        }
                    }) 

                }}>x</button>
              </td>
              <td>
                <img src={item.img} alt="" className='table-img' />
              </td>
              <td>
                {item.title}
                <br />
                <small className='text-mute'>NT$ {item.price}</small>
              </td>
              <td>
                <select name="" id="" className="form-select" 
                  value={item.quantity} 
                  onChange={(e) => {
                  e.preventDefault()
                  const quantity = parseInt(e.target.value)
                  dispatch({
                    type: 'CHANGE_CART_QUANTITY',
                    payload: {
                      ...item,
                      quantity
                    }
                  })
                }}>
                  {[...Array(20)].map((_, i) => {
                    return (<option value={i+1} key={i}> {i+1} </option>  
                    )
                  })}
                </select>
              </td>
              <td className="text-end">
                NT$ {item.quantity * item.price}
              </td>
            </tr>
            )
          })
        }
        
      </tbody>
      <tfoot>
        <tr>
          <td className="text-end" colSpan={5}>總金額 NT$ 440</td>
        </tr>
      </tfoot>
    </table>
  </div>
  )
}

export default Cart