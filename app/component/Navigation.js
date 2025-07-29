'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaNewspaper, FaTrophy, FaVideo, FaCalendarAlt, FaUsers } from "react-icons/fa";

export default function Navigation() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); // ล้างช่องค้นหา
    }
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
              <Link href="/racers" className="nav-link text-light">
                นักแข่งสนุ๊กเกอร์
              </Link>
            </li>
            {/* บริการของเรา เพิ่มไอคอน */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ position: "relative", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#ffc107"}
                onMouseLeave={e => e.currentTarget.style.color = "white"}
              >
                บริการของเรา
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" style={{ minWidth: 180 }}>
                <li>
                  <Link href="/schedule" className="dropdown-item d-flex align-items-center gap-2" style={{ transition: "background-color 0.3s" }}>
                    <FaCalendarAlt style={{ color: "#ffc107" }} />
                    ตารางแข่ง
                  </Link>
                </li>
                <li>
                  <Link href="/compete" className="dropdown-item d-flex align-items-center gap-2" style={{ transition: "background-color 0.3s" }}>
                    <FaUsers style={{ color: "#ffc107" }} />
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

            {/* เมนูเพิ่มเติมที่น่าสนใจ พร้อมไอคอนและ effect hover */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ position: "relative", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#ffc107"}
                onMouseLeave={e => e.currentTarget.style.color = "white"}
              >
                เมนูเพิ่มเติมที่น่าสนใจ!
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" style={{ minWidth: 220 }}>
                <li>
                  <Link href="/news" className="dropdown-item d-flex align-items-center gap-2" style={{ transition: "background-color 0.3s" }}>
                    <FaNewspaper style={{ color: "#ffc107" }} />
                    ข่าวสนุ๊กเกอร์
                  </Link>
                </li>
                <li>
                  <Link href="/rankings" className="dropdown-item d-flex align-items-center gap-2" style={{ transition: "background-color 0.3s" }}>
                    <FaTrophy style={{ color: "#ffc107" }} />
                    อันดับโลกนักสนุ๊กเกอร์
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link href="/highlights" className="dropdown-item d-flex align-items-center gap-2" style={{ transition: "background-color 0.3s" }}>
                    <FaVideo style={{ color: "#ffc107" }} />
                    ไฮไลต์การแข่งขัน
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="ค้นหานักแข่ง/ประเทศ"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-warning" type="submit">
              ค้นหา
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
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
