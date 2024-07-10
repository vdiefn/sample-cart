function Navbar(){
  return (<nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <span className="navbar-brand">甜點蛋糕店</span>
      <button className="btn btn-outline-dark position-relative" type="submit">購物車
        <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">99</span>
      </button>
    </div>
  </nav>

  )
}

export default Navbar