"use client";
import Link from "next/link";

export default function Footer() {
  const menuItems = [
    { label: "หน้าแรก", href: "/" },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ติดต่อเรา", href: "/contact" },
  ];

  const socials = [
    { href: "", icon: "fab fa-facebook-f", label: "Facebook", color: "#1877F2" },
    { href: "", icon: "fab fa-instagram", label: "Instagram", color: "#E4405F" },
    { href: "", icon: "fab fa-twitter", label: "Twitter", color: "#1DA1F2" },
    { href: "", icon: "fab fa-line", label: "Line", color: "#00C300" },
  ];

  return (
    <div className="footer-wrapper">
      <footer className="container py-5">
        <div className="row">
          {/* เมนูหลัก */}
          <div className="col-6 col-md-3 mb-4">
            <div className="footer-section">
              <h5 className="footer-title">
                <i className="fas fa-bars me-2"></i>
                เมนูหลัก
              </h5>
              <ul className="nav flex-column">
                {menuItems.map((item, index) => (
                  <li className="nav-item mb-2" key={index}>
                    <Link
                      href={item.href}
                      className="footer-link"
                    >
                      <i className="fas fa-chevron-right me-2 small"></i>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ติดต่อเรา */}
          <div className="col-md-5 offset-md-1 mb-4">
            <div className="footer-section">
              <h5 className="footer-title text-center text-md-start">
                <i className="fas fa-envelope me-2"></i>
                ติดต่อเรา
              </h5>
              <p className="text-center text-md-start footer-description">
                หากคุณมีคำถามหรือข้อเสนอแนะ ส่งอีเมลหาเราได้เลย
              </p>
              <form className="newsletter-form mt-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="อีเมลของคุณ"
                    required
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    ส่ง
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ข้อมูลติดต่อเพิ่มเติม */}
          <div className="col-md-3 mb-4">
            <div className="footer-section">
              <h5 className="footer-title">
                <i className="fas fa-map-marker-alt me-2"></i>
                ข้อมูลติดต่อ
              </h5>
              <div className="contact-info">
                <div className="contact-item mb-3">
                  <i className="fas fa-phone text-primary me-3"></i>
                  <span>+66 (0) 123-456-789</span>
                </div>
                <div className="contact-item mb-3">
                  <i className="fas fa-envelope text-primary me-3"></i>
                  <span>info@example.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt text-primary me-3"></i>
                  <span>เชียงใหม่, ประเทศไทย</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* เส้นคั่นที่สวยงาม */}
        <div className="divider-section">
          <div className="gradient-divider"></div>
        </div>

        {/* Social + Copyright */}
        <div className="footer-bottom">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
            <div className="copyright-section">
              <p className="mb-0 text-center">
                <i className="fas fa-copyright me-2"></i>
                2025 Phatthadon Kachi. All rights reserved.
              </p>
            </div>

            {/* Social Icons */}
            <div className="social-section">
              <span className="social-label me-3 d-none d-md-inline">ติดตามเรา:</span>
              <div className="social-icons">
                {socials.map(({ href, icon, label, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{'--social-color': color}}
                  >
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Custom CSS */}
      <style jsx>{`
        .footer-wrapper {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%);
          color: #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .footer-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-section {
          position: relative;
          z-index: 1;
        }

        .footer-title {
          color: #f8fafc;
          font-weight: 700;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          padding: 8px 0;
          display: flex;
          align-items: center;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border-radius: 6px;
          padding-left: 12px;
          margin-left: -12px;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), transparent);
          border-radius: 6px;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #f8fafc;
          transform: translateX(8px);
        }

        .footer-link:hover::before {
          width: 100%;
        }

        .footer-link:hover i {
          transform: translateX(4px);
          color: #3b82f6;
        }

        .footer-description {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          position: relative;
        }

        .newsletter-form .input-group {
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter-form .input-group-text {
          background: transparent;
          border: none;
          color: #64748b;
          border-radius: 0;
        }

        .newsletter-form .form-control {
          background: transparent;
          border: none;
          color: #f8fafc;
          padding: 12px 16px;
          font-size: 0.95rem;
        }

        .newsletter-form .form-control::placeholder {
          color: #94a3b8;
        }

        .newsletter-form .form-control:focus {
          background: transparent;
          color: #f8fafc;
          box-shadow: none;
        }

        .newsletter-form .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          padding: 12px 24px;
          font-weight: 600;
          transition: all 0.3s ease;
          border-radius: 0;
        }

        .newsletter-form .btn-primary:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
        }

        .contact-info {
          margin-top: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          color: #cbd5e1;
          font-size: 0.9rem;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color: #f8fafc;
        }

        .contact-item i {
          width: 20px;
          font-size: 0.85rem;
        }

        .divider-section {
          margin: 3rem 0 2rem;
        }

        .gradient-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.5) 20%,
            rgba(168, 85, 247, 0.5) 50%,
            rgba(34, 197, 94, 0.5) 80%,
            transparent
          );
          position: relative;
        }

        .gradient-divider::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #22c55e);
          border-radius: 3px;
          filter: blur(2px);
        }

        .footer-bottom {
          position: relative;
          z-index: 1;
        }

        .copyright-section p {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .social-label {
          color: #cbd5e1;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          border-radius: 12px;
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--social-color);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
        }

        .social-icon:hover {
          color: white;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
          border-color: var(--social-color);
        }

        .social-icon:hover::before {
          opacity: 0.15;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .newsletter-form .input-group {
            flex-direction: column;
            border-radius: 12px;
          }

          .newsletter-form .btn-primary {
            border-radius: 0 0 12px 12px;
          }

          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .social-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .footer-title {
            text-align: center;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}