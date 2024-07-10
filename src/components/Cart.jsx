function Cart(){
  return (<div className="bg-light p-3">
    <table className="table align-middle">
      <tbody>
        <tr>
          <td>
            <a href=''></a>
          </td>
          <td>
            <img src="https://images.unsplash.com/photo-1476887334197-56adbf254e1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D" alt="" className='table-img' />
          </td>
          <td>
            全蔬食健康倉
            <br />
            <small className='text-mute'>NT$ 220</small>
          </td>
          <td>
            <select name="" id="" className="form-select"></select>
          </td>
          <td className="text-end">
            $440
          </td>
        </tr>
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