'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  FaNewspaper,
  FaTrophy,
  FaVideo,
  FaCalendarAlt,
  FaUsers,
} from 'react-icons/fa';

export default function Navigation() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(status === 'true');

    function onStorageChange(e) {
      if (e.key === 'isLoggedIn') {
        setIsLoggedIn(e.newValue === 'true');
      }
    }

    function onLoginEvent() {
      const status = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(status === 'true');
    }

    window.addEventListener('storage', onStorageChange);
    window.addEventListener('login-event', onLoginEvent);

    return () => {
      window.removeEventListener('storage', onStorageChange);
      window.removeEventListener('login-event', onLoginEvent);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdminConfirmed');
    setIsLoggedIn(false);
    router.push('/login1');
  };

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
            {/* เมนูต่าง ๆ */}
            <li className="nav-item">
              <Link href="/" className="nav-link active text-light">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-light">
                เกี่ยวกับเรา
              </Link>
            </li>

            {/* <-- ย้าย "ติดต่อเรา" ขึ้นมาก่อน "บริการของเรา" --> */}
            <li className="nav-item">
              <Link href="/contect" className="nav-link text-light">
                ติดต่อเรา
              </Link>
            </li>

            {/* บริการของเรา */}
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
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link
                    href="/schedule"
                    className="dropdown-item d-flex align-items-center gap-2"
                  >
                    <FaCalendarAlt style={{ color: '#ffc107' }} />
                    ตารางแข่ง
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compete"
                    className="dropdown-item d-flex align-items-center gap-2"
                  >
                    <FaUsers style={{ color: '#ffc107' }} />
                    ลงแข่ง
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light d-flex align-items-center gap-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                นักแข่งสนุ๊กเกอร์
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link
                    href="/racers"
                    className="dropdown-item d-flex align-items-center gap-2"
                  >
                    <FaUsers style={{ color: '#ffc107' }} />
                    นักแข่งปัจจุบัน
                  </Link>
                </li>
                <li>
                  <Link
                    href="/racers/legend"
                    className="dropdown-item d-flex align-items-center gap-2"
                  >
                    <FaTrophy style={{ color: '#ffc107' }} />
                    นักแข่งตำนาน
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ข้อมูลเพิ่มเติม
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link
                    href="/news"
                    className="dropdown-item d-flex align-items-center gap-2"
                  >
                    <FaNewspaper style={{ color: '#ffc107' }} />
                    ข่าวสนุ๊กเกอร์
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rankings"
                    className="dropdown-item d-flex align-items-center gap-2"
                  >
                    <FaTrophy style={{ color: '#ffc107' }} />
                    อันดับโลกนักสนุ๊กเกอร์
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    href="/highlights"
                    className="dropdown-item d-flex align-items-center gap-2"
                  >
                    <FaVideo style={{ color: '#ffc107' }} />
                    ไฮไลต์การแข่งขัน
                  </Link>
                </li>
              </ul>
            </li>

            {/* แสดงเมนู Admin เฉพาะตอนล็อกอิน */}
            {isLoggedIn && (
              <li className="nav-item">
                <Link
                  href="/admin/users"
                  className="nav-link d-flex align-items-center gap-2 text-warning"
                >
                  <FaUsers />
                  Admin
                </Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center gap-2">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="ค้นหา"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ minWidth: '200px' }}
              />
              <button className="btn btn-outline-warning" type="submit">
                ค้นหา
              </button>
            </form>

            {/* แสดงปุ่มเข้าสู่ระบบ กับสมัครสมาชิก เฉพาะตอนยังไม่ล็อกอิน */}
            {!isLoggedIn && (
              <>
                <Link href="/login1" className="btn btn-outline-light">
                  เข้าสู่ระบบ
                </Link>
                <Link href="/register" className="btn btn-warning text-dark">
                  สมัครสมาชิก
                </Link>
              </>
            )}

            {/* แสดงปุ่มออกจากระบบ เฉพาะตอนล็อกอิน */}
            {isLoggedIn && (
              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                ล็อกเอ้าท์
              </button>
            )}
          </div>  
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .nav-link,
        .dropdown-item {
          color: #fff !important;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #ffc107 !important;
          text-shadow: 0 0 6px #ffc107;
        }
        .dropdown-item:hover {
          background-color: #ffc107;
          color: #212529 !important;
        }
        .dropdown-item:hover svg {
          color: #212529 !important;
        }
      `}</style>
    </nav>
  );
}
