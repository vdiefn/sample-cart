import { useState } from 'react'



function App() {
  return (
    <div className='App'>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">甜點蛋糕店</span>
          <button className="btn btn-outline-dark position-relative" type="submit">購物車
            <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">99</span>
          </button>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <div className="row row-cols-3 g-3">
              <div className="col">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1476887334197-56adbf254e1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className="card-title">全蔬食健康餐
                        <span className="float-end">NT$ 220</span>
                      </h6>
                      
                      <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1496174883999-edcc585a373f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">全蔬食健康餐
                      <span className="float-end">NT$ 220</span>
                    </h6>

                    <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1476887334197-56adbf254e1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">全蔬食健康餐
                      <span className="float-end">NT$ 220</span>
                    </h6>

                    <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1476887334197-56adbf254e1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">全蔬食健康餐
                      <span className="float-end">NT$ 220</span>
                    </h6>

                    <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
