'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isAdmin = localStorage.getItem('isAdmin');
    if (isLoggedIn) {
      if (isAdmin === 'true') router.replace('/admin');
      else router.replace('/');
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      Swal.fire({ icon: 'warning', title: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' });
      return;
    }

    try {
      Swal.fire({
        title: 'กำลังเข้าสู่ระบบ...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (formData.username === 'admin' && formData.password === '1234') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('username', formData.username);
        Swal.close();

        await Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบแอดมินสำเร็จ!',
          timer: 1500,
          showConfirmButton: false,
        });

        router.replace('/');
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('isAdmin', 'false');
      localStorage.setItem('username', formData.username);
      Swal.close();

      await Swal.fire({
        icon: 'success',
        title: 'เข้าสู่ระบบสำเร็จ!',
        timer: 1500,
        showConfirmButton: false,
      });

      router.replace('/');
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: 'ไม่สามารถเข้าสู่ระบบได้' });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>🔐 เข้าสู่ระบบ</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="ชื่อผู้ใช้"
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
              placeholder="รหัสผ่าน"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">🚀 ล็อกอิน</button>
        </form>

        {/* ปุ่มกลับหน้าหลัก */}
        <button
          className="back-home"
          onClick={() => router.push('/')}
        >
          ⬅ กลับหน้าหลัก
        </button>
      </div>

      <style jsx>{`
        .login-page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2);
          position: relative;
          padding: 20px;
          overflow: hidden;
        }

        .login-page::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1%, transparent 40%);
          animation: moveBg 8s linear infinite;
        }

        @keyframes moveBg {
          from { transform: translate(-20%, -20%) }
          to { transform: translate(20%, 20%) }
        }

        .login-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          padding: 40px;
          border-radius: 20px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          animation: fadeIn 0.6s ease;
          z-index: 2;
        }

        .login-container h2 {
          text-align: center;
          color: white;
          margin-bottom: 25px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          font-size: 14px;
          color: white;
          margin-bottom: 5px;
        }

        .input-group input {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 10px;
          background: rgba(255,255,255,0.8);
          outline: none;
          font-size: 14px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(90deg, #ff6a00, #ee0979);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin-top: 10px;
        }

        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255,255,255,0.4);
        }

        .back-home {
          background: #444;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px) }
          to { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </div>
  );
}
