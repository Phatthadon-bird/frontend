export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img 
  src="https://as1.ftcdn.net/jpg/02/30/05/00/1000_F_230050098_U7UQFP8WTDgCQ9cTypIzalzjOOYtb32v.jpg" 
  alt="Snooker Logo" 
  width={30} 
  height={24} 
  className="d-inline-block align-text-top" 
/>
          <span className="text-warning">snooker</span>
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/">หน้าแรก</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/about">เกี่ยวกับเรา</a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle text-light" 
                href="/service" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                บริการของเรา
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/contect">ติดต่อเรา</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/login">เข้าสู่ระบบ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/register">สมัครสมาชิก</a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="ค้นหา..." 
              aria-label="Search" 
            />
            <button className="btn btn-outline-warning" type="submit">ค้นหา</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
