'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  FaNewspaper,
  FaTrophy,
  FaVideo,
  FaCalendarAlt,
  FaUsers,
  FaUser,
  FaCrown,
} from 'react-icons/fa';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  // ซ่อน Navbar ใน 3 path นี้
  const hideNavbarPaths = ['/login1', '/register', '/admin/confirm-password'];
  if (hideNavbarPaths.includes(pathname)) {
    return null;
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn') === 'true';
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    const storedUsername = localStorage.getItem('username') || '';

    setIsLoggedIn(status);
    setIsAdmin(adminStatus);
    setUsername(storedUsername);

    function onStorageChange(e) {
      if (['isLoggedIn', 'isAdmin', 'username'].includes(e.key)) {
        setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
        setIsAdmin(localStorage.getItem('isAdmin') === 'true');
        setUsername(localStorage.getItem('username') || '');
      }
    }

    window.addEventListener('storage', onStorageChange);
    return () => window.removeEventListener('storage', onStorageChange);
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
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUsername('');
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
                  <Link href="/schedule" className="dropdown-item d-flex align-items-center gap-2">
                    <FaCalendarAlt style={{ color: '#ffc107' }} />
                    ตารางแข่ง
                  </Link>
                </li>
                <li>
                  <Link href="/compete" className="dropdown-item d-flex align-items-center gap-2">
                    <FaUsers style={{ color: '#ffc107' }} />
                    ลงแข่ง
                  </Link>
                </li>
                <li>
                  <Link href="/cue-shop" className="dropdown-item d-flex align-items-center gap-2">
                    <FaTrophy style={{ color: '#ffc107' }} />
                    ร้านขายไม้คิว
                  </Link>
                  <Link href="/table-rental" className="dropdown-item d-flex align-items-center gap-2">
                    <FaTrophy style={{ color: '#ffc107' }} />
                    จองเช่าโต๊ะสนุ๊กเกอร์
                  </Link>
                </li>
              </ul>
            </li>

            {/* นักแข่งสนุ๊กเกอร์ */}
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
                  <Link href="/racers" className="dropdown-item d-flex align-items-center gap-2">
                    <FaUsers style={{ color: '#ffc107' }} />
                    นักแข่งปัจจุบัน
                  </Link>
                </li>
                <li>
                  <Link href="/racers/legend" className="dropdown-item d-flex align-items-center gap-2">
                    <FaTrophy style={{ color: '#ffc107' }} />
                    นักแข่งตำนาน
                  </Link>
                </li>
              </ul>
            </li>

            {/* ข้อมูลเพิ่มเติม */}
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
                  <Link href="/news" className="dropdown-item d-flex align-items-center gap-2">
                    <FaNewspaper style={{ color: '#ffc107' }} />
                    ข่าวสนุ๊กเกอร์
                  </Link>
                </li>
                <li>
                  <Link href="/rankings" className="dropdown-item d-flex align-items-center gap-2">
                    <FaTrophy style={{ color: '#ffc107' }} />
                    อันดับโลกนักสนุ๊กเกอร์
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="/highlights" className="dropdown-item d-flex align-items-center gap-2">
                    <FaVideo style={{ color: '#ffc107' }} />
                    ไฮไลต์การแข่งขัน
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-menu dropdown-menu-dark" />
                </li>
                <Link href="/vote" className="dropdown-item d-flex align-items-center gap-2">
                  <FaVideo style={{ color: '#ffc107' }} />
                  รีวิว
                </Link>
              </ul>
            </li>

            {/* ปุ่ม Admin */}
            {isLoggedIn && isAdmin && (
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

            {!isLoggedIn ? (
              <>
                <Link href="/login1" className="btn btn-outline-light">
                  เข้าสู่ระบบ
                </Link>
                <Link href="/register" className="btn btn-warning text-dark">
                  สมัครสมาชิก
                </Link>
              </>
            ) : (
              <div className="dropdown">
                <button
                  className="btn profile-dropdown-btn d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="profile-avatar-container">
                    <div className="profile-avatar">
                      <span className="profile-initial">
                        {username ? username.charAt(0).toUpperCase() : '?'}
                      </span>
                      {isAdmin && (
                        <div className="admin-crown">
                          <FaCrown />
                        </div>
                      )}
                      <div className="profile-ring"></div>
                    </div>
                  </div>
                  <div className="profile-info">
                    <div className="profile-username">
                      {username || 'ผู้ใช้งาน'}
                    </div>
                    <div className="profile-role">
                      {isAdmin ? (
                        <span className="admin-badge">
                          <FaCrown style={{ fontSize: '10px', marginRight: '4px' }} />
                          ผู้ดูแล
                        </span>
                      ) : (
                        <span className="member-badge">
                          <FaUser style={{ fontSize: '10px', marginRight: '4px' }} />
                          สมาชิก
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="profile-arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark profile-dropdown-menu"> 
                  <li>
                    <div className="profile-dropdown-header">
                      <div className="profile-dropdown-avatar">
                        <span>{username ? username.charAt(0).toUpperCase() : '?'}</span>
                      </div>
                      <div className="profile-dropdown-info">
                        <div className="profile-dropdown-name">{username || 'ผู้ใช้งาน'}</div>
                        <div className="profile-dropdown-role">
                          {isAdmin ? 'ผู้ดูแลระบบ' : 'สมาชิก'}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item logout-btn d-flex align-items-center gap-2" onClick={handleLogout}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </div>
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

        /* Profile Dropdown Styles */
        .profile-dropdown-btn {
          background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%);
          border: 1px solid rgba(255, 193, 7, 0.3);
          border-radius: 12px;
          padding: 8px 12px;
          color: #fff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .profile-dropdown-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .profile-dropdown-btn:hover::before {
          left: 100%;
        }

        .profile-dropdown-btn:hover {
          border-color: #ffc107;
          box-shadow: 0 4px 20px rgba(255, 193, 7, 0.3);
          transform: translateY(-1px);
        }

        .profile-avatar-container {
          position: relative;
        }

        .profile-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffc107 0%, #ffcd39 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #212529;
          font-weight: bold;
          font-size: 16px;
          position: relative;
          z-index: 2;
          box-shadow: 0 2px 10px rgba(255, 193, 7, 0.3);
        }

        .profile-initial {
          text-shadow: none;
        }

        .admin-crown {
          position: absolute;
          top: -6px;
          right: -6px;
          background: linear-gradient(135deg, #ff6b6b, #ff4757);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 10px;
          z-index: 3;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .profile-ring {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 2px solid transparent;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffc107, #ffcd39) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .profile-dropdown-btn:hover .profile-ring {
          opacity: 1;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
        }

        .profile-username {
          font-weight: 600;
          font-size: 14px;
          color: #fff;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 120px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .profile-role {
          font-size: 11px;
          margin-top: 1px;
        }

        .admin-badge {
          background: linear-gradient(135deg, #ff6b6b, #ff4757);
          color: white;
          padding: 2px 6px;
          border-radius: 10px;
          font-weight: 500;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .member-badge {
          background: rgba(108, 117, 125, 0.7);
          color: #e9ecef;
          padding: 2px 6px;
          border-radius: 10px;
          font-weight: 500;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .profile-arrow {
          transition: transform 0.3s ease;
          color: rgba(255, 255, 255, 0.7);
        }

        .profile-dropdown-btn[aria-expanded="true"] .profile-arrow {
          transform: rotate(180deg);
        }

        /* Dropdown Menu Styles */
        .profile-dropdown-menu {
          background: rgba(33, 37, 41, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 193, 7, 0.2);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          min-width: 200px;
          padding: 8px;
          margin-top: 8px;
        }

        .profile-dropdown-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 8px;
          background: rgba(255, 193, 7, 0.05);
          border-radius: 8px;
          margin-bottom: 4px;
        }

        .profile-dropdown-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffc107 0%, #ffcd39 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #212529;
          font-weight: bold;
          font-size: 14px;
        }

        .profile-dropdown-info {
          flex: 1;
          min-width: 0;
        }

        .profile-dropdown-name {
          font-weight: 600;
          font-size: 13px;
          color: #fff;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .profile-dropdown-role {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 2px;
        }

        .logout-btn {
          color: #dc3545 !important;
          transition: all 0.3s ease;
          border-radius: 8px;
          padding: 8px 12px;
        }

        .logout-btn:hover {
          background-color: rgba(220, 53, 69, 0.1) !important;
          color: #ff6b6b !important;
        }

        .logout-btn svg {
          transition: transform 0.3s ease;
        }

        .logout-btn:hover svg {
          transform: translateX(-2px);
        }

        @media (max-width: 768px) {
          .profile-info {
            display: none;
          }
          
          .profile-dropdown-btn {
            padding: 8px;
          }
        }
          /* Navbar ปรับให้มือถือ */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
    padding: 8px 12px;
  }

  .navbar-nav {
    width: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link,
  .dropdown-item {
    font-size: 14px;
    padding: 8px 12px;
  }

  /* Search ปรับขนาดให้เล็กลง */
  form[role="search"] {
    flex-wrap: wrap;
    gap: 4px;
    width: 100%;
    margin-top: 8px;
  }

  form[role="search"] input.form-control {
    min-width: 100%;
    margin-bottom: 4px;
  }

  form[role="search"] button {
    width: 100%;
  }

  /* Profile dropdown ปรับเป็น icon-only */
  .profile-info {
    display: none;
  }

  .profile-dropdown-btn {
    padding: 6px;
  }

  /* Dropdown menu scroll ได้ */
  .profile-dropdown-menu {
    max-height: 250px;
    overflow-y: auto;
  }

  /* ปรับ icon และ text ใน dropdown */
  .dropdown-menu .dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
}
      `}</style>
    </nav>
  );
}