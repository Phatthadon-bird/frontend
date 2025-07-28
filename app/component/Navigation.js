import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src="https://as1.ftcdn.net/jpg/02/30/05/00/1000_F_230050098_U7UQFP8WTDgCQ9cTypIzalzjOOYtb32v.jpg"
            alt="Snooker Logo"
            width={30}
            height={24}
            className="d-inline-block align-text-top"
          />
          <span className="text-warning fw-bold">snooker</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link active text-light"
                aria-current="page"
              >
                หน้าแรก
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link text-light">
                เกี่ยวกับเรา
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/racers" className="nav-link text-light">
                นักแข่งสนุ๊กเกอร์
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                บริการของเรา
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link href="/schedule" className="dropdown-item">
                    ตารางแข่ง
                  </Link>
                </li>
                <li>
                  <Link href="/compete" className="dropdown-item">
                    ลงแข่ง
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/contect" className="nav-link text-light">
                ติดต่อเรา
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/login" className="nav-link text-light">
                เข้าสู่ระบบ
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/register" className="nav-link text-light">
                สมัครสมาชิก
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="ค้นหา..."
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              ค้นหา
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
