'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      router.push('/admin/users');
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      const container = document.querySelector('.login-container');
      container.classList.remove('shake');
      void container.offsetWidth;
      container.classList.add('shake');

      Swal.fire({ icon: 'warning', title: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' });
      return;
    }

    try {
      Swal.fire({
        title: 'กำลังเข้าสู่ระบบ...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      localStorage.setItem('isLoggedIn', 'true');
      Swal.close();

      await Swal.fire({
        icon: 'success',
        title: 'เข้าสู่ระบบสำเร็จ!',
        text: 'กำลังไปยังหน้าแอดมิน...',
        timer: 1500,
        showConfirmButton: false,
      });

      router.push('/admin/users');
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
        <a href="/" className="logo">🏠 กลับหน้าหลัก</a>
      </nav>

      <div className="login-container">
        <h2>🔐 เข้าสู่ระบบ</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <div className="input-icon">
              <span>👤</span>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="ชื่อผู้ใช้ของคุณ"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">รหัสผ่าน</label>
            <div className="input-icon">
              <span>🔒</span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="รหัสผ่านของคุณ"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button type="submit">🚀 ล็อกอิน</button>
        </form>
      </div>

      <style jsx>{`
        .login-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #74ebd5, #acb6e5);
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .login-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/sparkle.gif');
          opacity: 0.06;
          pointer-events: none;
          z-index: 1;
        }

        .navbar {
          position: absolute;
          top: 0;
          width: 100%;
          padding: 15px 0;
          text-align: center;
          background: rgba(0, 0, 0, 0.6);
          z-index: 2;
        }

        .navbar .logo {
          color: #fff;
          font-weight: bold;
          text-decoration: none;
          font-size: 20px;
        }

        .login-container {
          background-color: white;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 400px;
          animation: fadeIn 0.5s ease;
          z-index: 2;
        }

        .login-container.shake {
          animation: shake 0.4s ease;
        }

        .login-container h2 {
          text-align: center;
          color: #333;
          margin-bottom: 25px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          font-size: 14px;
          color: #555;
          margin-bottom: 5px;
        }

        .input-icon {
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 0 10px;
          background: white;
        }

        .input-icon span {
          margin-right: 8px;
          font-size: 16px;
        }

        .input-icon input {
          border: none;
          outline: none;
          padding: 12px;
          font-size: 14px;
          width: 100%;
          background: transparent;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(10px);
          }
          75% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 480px) {
          .login-container {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}
