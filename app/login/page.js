'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'; // ✅ เพิ่มตรงนี้

export default function Logi() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',
      });
      return;
    }

    try {
      // สมมติว่าเข้าสู่ระบบสำเร็จ
      await Swal.fire({
        icon: 'success',
        title: 'เข้าสู่ระบบสำเร็จ',
        text: 'กำลังนำคุณไปยังหน้าแรก...',
        timer: 1500,
        showConfirmButton: false,
      });

      router.push('/');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถเข้าสู่ระบบได้',
      });
    }
  };

  return (
    <div className="login-page">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>หน้าล็อกอิน</title>

      <nav className="navbar">
        <a href="/" className="logo">กลับสู่หน้าหลัก</a>
      </nav>

      <div className="login-container">
        <h2>เข้าสู่ระบบ</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="กรุณากรอกชื่อผู้ใช้"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="กรุณากรอกรหัสผ่าน"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="rememberMe">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              จดจำการเข้าสู่ระบบ
            </label>
          </div>

          <button type="submit">ล็อกอิน</button>
          
          <div className="footer-links">
            <a href="/register">สมัครสมาชิก</a>
          </div>
        </form>
      </div>

      {/* Styling */}
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: #333;
          color: white;
          padding: 15px 0;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .navbar .logo {
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }

        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f2f5;
        }

        .login-container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .login-container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          font-size: 14px;
          color: #555;
        }

        .input-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
          margin-top: 8px;
          box-sizing: border-box;
        }

        .input-group input:focus {
          border-color: #007bff;
          outline: none;
        }

        .input-group input[type="checkbox"] {
          width: auto;
          margin-right: 8px;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }

        .footer-links {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          font-size: 14px;
        }

        .footer-links a {
          color: #007bff;
          text-decoration: none;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
