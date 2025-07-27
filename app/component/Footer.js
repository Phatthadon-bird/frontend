"use client";
import Link from "next/link";

export default function Footer() {
  const menuItems = [
    { label: "หน้าแรก", href: "/" },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ติดต่อเรา", href: "/contect" },
  ];

  return (
    <div className="container-fluid bg-dark text-light pt-5">
      <footer className="container py-5">
        <div className="row">
          {/* เมนู */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase">เมนูหลัก</h5>
            <ul className="nav flex-column">
              {menuItems.map((item, index) => (
                <li className="nav-item mb-2" key={index}>
                  <Link href={item.href} className="nav-link p-0 text-secondary hover-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ติดต่อ */}
          <div className="col-md-5 offset-md-1 mb-4">
            <h5 className="text-uppercase text-center text-md-start">ติดต่อเรา</h5>
            <p className="text-center text-md-start">
              หากคุณมีคำถามหรือข้อเสนอแนะ ส่งอีเมลหาเราได้เลย
            </p>
            <form className="d-flex flex-column flex-sm-row gap-2 mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                required
              />
              <button className="btn btn-outline-light" type="submit">
                ส่ง
              </button>
            </form>
          </div>
        </div>

        {/* เส้นคั่น + ลิขสิทธิ์ */}
        <div className="border-top mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">© 2025 Phatthadon Kachi. All rights reserved.</p>

          {/* Social Icons */}
          <div className="d-flex gap-3">
            <a href="#" className="text-secondary fs-5 hover-light">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-secondary fs-5 hover-light">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-secondary fs-5 hover-light">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-secondary fs-5 hover-light">
              <i className="fab fa-line"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Custom CSS */}
      <style jsx>{`
        .hover-light:hover {
          color: #ffffff !important;
        }
        a {
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  );
}
