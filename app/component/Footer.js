"use client";
import Link from "next/link";

export default function Footer() {
  const menuItems = [
    { label: "หน้าแรก", href: "/" },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ติดต่อเรา", href: "/contact" }, // ✅ แก้จาก /contect
  ];

  const socials = [
    { href: "#", icon: "fab fa-facebook-f", label: "Facebook" },
    { href: "#", icon: "fab fa-instagram", label: "Instagram" },
    { href: "#", icon: "fab fa-twitter", label: "Twitter" },
    { href: "#", icon: "fab fa-line", label: "Line" },
  ];

  return (
    <div className="container-fluid bg-dark text-light pt-5">
      <footer className="container py-5">
        <div className="row">
          {/* เมนูหลัก */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-3 fw-bold">เมนูหลัก</h5>
            <ul className="nav flex-column">
              {menuItems.map((item, index) => (
                <li className="nav-item mb-2" key={index}>
                  <Link
                    href={item.href}
                    className="nav-link p-0 text-secondary hover-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ติดต่อเรา */}
          <div className="col-md-5 offset-md-1 mb-4">
            <h5 className="text-uppercase text-center text-md-start mb-3 fw-bold">
              ติดต่อเรา
            </h5>
            <p className="text-center text-md-start fs-6 text-light">
              หากคุณมีคำถามหรือข้อเสนอแนะ ส่งอีเมลหาเราได้เลย
            </p>
            <form className="d-flex flex-column flex-sm-row gap-3 mt-3">
              <input
                type="email"
                className="form-control rounded-pill"
                placeholder="อีเมลของคุณ"
                required
              />
              <button
                className="btn btn-outline-light rounded-pill px-4"
                type="submit"
              >
                ส่ง
              </button>
            </form>
          </div>
        </div>

        {/* เส้นคั่น */}
        <hr className="border-secondary mt-4" />

        {/* Social + Copyright */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3 gap-3">
          <p className="mb-0 small text-white text-center">
            © 2025 Phatthadon Kachi. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4">
            {socials.map(({ href, icon, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                className="text-secondary fs-5 hover-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={icon}></i>
              </a>
            ))}
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
        input.form-control:focus {
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
          border-color: #fff;
          background-color: #222;
          color: #fff;
        }

        @media (max-width: 576px) {
          form {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
}
