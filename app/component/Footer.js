export default function Footer() {
  return (
    <div className="container-fluid">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  หน้าแรก
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  เกี่ยวกับเรา
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  บริการของเรา
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  ติดต่อเรา
                </a>
              </li>
              <li className="nav-item mb-2"></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <div className="d-flex flex-column align-items-center text-center">
              <h5>ส่งอีเมลมาหาเรา</h5>
              <p>หากคุณมีข้อสงสัย</p>
              <form>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2 justify-content-center">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
          <p className="text-center">© 2025 Phatthadon Kachi ขอบคุณที่มาเยี่ยมชม.</p>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Instagram">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Facebook">
                <svg className="bi" width={24} height={24} aria-hidden="true">
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
