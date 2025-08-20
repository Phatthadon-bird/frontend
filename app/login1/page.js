'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isAdmin = localStorage.getItem('isAdmin');
    if (isLoggedIn) {
      if (isAdmin === 'true') router.replace('/admin/users');
      else router.replace('/');
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      Swal.fire({ 
        icon: 'warning', 
        title: 'กรุณากรอกข้อมูล',
        text: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',
        background: '#1e1e2e',
        color: '#cdd6f4'
      });
      return;
    }

    setIsLoading(true);
    Swal.fire({
      title: 'กำลังเข้าสู่ระบบ...',
      allowOutsideClick: false,
      background: '#1e1e2e',
      color: '#cdd6f4',
      didOpen: () => Swal.showLoading(),
    });

    try {
      // ตรวจสอบ admin local ก่อน
      if (formData.username === 'admin' && formData.password === '1234') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('username', formData.username);
        Swal.close();
        await Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          text: `ยินดีต้อนรับ ${formData.username}`,
          timer: 2000,
          showConfirmButton: false,
          background: '#1e1e2e',
          color: '#cdd6f4'
        });
        router.replace('/admin/users'); // เปลี่ยน redirect ให้ admin
        return;
      }

      // กรณี user ปกติ ใช้ API
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('API response:', data); // เพิ่ม debug

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', formData.username);
        localStorage.setItem('isAdmin', 'false');
        Swal.close();
        await Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          text: `ยินดีต้อนรับ ${formData.username}`,
          timer: 2000,
          showConfirmButton: false,
          background: '#1e1e2e',
          color: '#cdd6f4'
        });
        router.replace('/');
      } else {
        Swal.fire({ 
          icon: 'error', 
          title: '❌ ล็อกอินไม่สำเร็จ', 
          text: data.error || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
          background: '#1e1e2e',
          color: '#cdd6f4'
        });
      }
    } catch (err) {
      console.error('Login error:', err);
      Swal.fire({ 
        icon: 'error', 
        title: '❌ เกิดข้อผิดพลาด', 
        text: 'ไม่สามารถเข้าสู่ระบบได้ โปรดลองใหม่',
        background: '#1e1e2e',
        color: '#cdd6f4'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>เข้าสู่ระบบ</h2>
          <p>กรุณาเข้าสู่ระบบเพื่อใช้งาน</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="กรอกชื่อผู้ใช้"
              value={formData.username}
              onChange={handleInputChange}
              required
              autoComplete="username"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">รหัสผ่าน</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="กรอกรหัสผ่าน"
                value={formData.password}
                onChange={handleInputChange}
                required
                autoComplete="current-password"
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(prev => !prev)}
                aria-label={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>
        
        <div className="login-footer">
          <Link href="/register" className="link">สร้างบัญชี</Link>
          <span className="separator">|</span>
          <Link href="/" className="link">กลับหน้าหลัก</Link>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe);
          padding: 20px;
        }
        
        .login-container {
          background: rgba(255, 255, 255, 0.15);
          padding: 40px;
          border-radius: 25px;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }
        
        .login-header h2 {
          color: #fff;
          margin: 0 0 10px 0;
          font-size: 2rem;
          font-weight: 600;
        }
        
        .login-header p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 30px 0;
          font-size: 0.9rem;
        }
        
        .login-form {
          margin-bottom: 25px;
        }
        
        .input-group { 
          margin-bottom: 20px; 
          text-align: left; 
        }
        
        .input-group label { 
          display: block; 
          color: #fff; 
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .input-group input { 
          width: 100%; 
          padding: 15px 20px; 
          border-radius: 12px; 
          border: none;
          background: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }
        
        .input-group input:focus {
          outline: none;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        
        .password-wrapper { 
          display: flex; 
          align-items: center; 
          position: relative;
        }
        
        .password-wrapper input {
          padding-right: 60px;
        }
        
        .toggle-password {
          position: absolute;
          right: 15px;
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 5px;
          border-radius: 5px;
          transition: background-color 0.2s ease;
        }
        
        .toggle-password:hover {
          background: rgba(0, 0, 0, 0.1);
        }
        
        .login-button { 
          width: 100%;
          padding: 15px 20px; 
          border-radius: 15px; 
          border: none; 
          background: linear-gradient(45deg, #ff6a00, #ee0979);
          color: white; 
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 106, 0, 0.4);
        }
        
        .login-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 106, 0, 0.6);
        }
        
        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        
        .login-footer { 
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
        }
        
        .login-footer .link { 
          color: #fff; 
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .login-footer .link:hover {
          color: #ff6a00;
          text-shadow: 0 0 10px rgba(255, 106, 0, 0.5);
        }
        
        .separator {
          margin: 0 15px;
          opacity: 0.7;
        }
        
        @media (max-width: 480px) {
          .login-container {
            padding: 30px 20px;
            margin: 10px;
          }
          
          .login-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}