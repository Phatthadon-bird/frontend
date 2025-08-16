'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      Swal.fire({ 
        icon: 'warning', 
        title: 'กรุณากรอกข้อมูล',
        text: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',
        background: '#1e1e2e',
        color: '#cdd6f4'
      });
      return;
    }

    try {
      setIsLoading(true);
      
      Swal.fire({
        title: 'กำลังเข้าสู่ระบบ...',
        allowOutsideClick: false,
        background: '#1e1e2e',
        color: '#cdd6f4',
        didOpen: () => Swal.showLoading(),
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (formData.username === 'admin' && formData.password === '1234') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('username', formData.username);
        Swal.close();

        await Swal.fire({
          icon: 'success',
          title: '🎉 เข้าสู่ระบบแอดมินสำเร็จ!',
          text: 'ยินดีต้อนรับผู้ดูแลระบบ',
          timer: 2000,
          showConfirmButton: false,
          background: '#1e1e2e',
          color: '#cdd6f4'
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
        title: '🎊 เข้าสู่ระบบสำเร็จ!',
        text: `ยินดีต้อนรับ ${formData.username}`,
        timer: 2000,
        showConfirmButton: false,
        background: '#1e1e2e',
        color: '#cdd6f4'
      });

      router.replace('/');
    } catch (err) {
      Swal.fire({ 
        icon: 'error', 
        title: '❌ เกิดข้อผิดพลาด', 
        text: 'ไม่สามารถเข้าสู่ระบบได้ โปรดลองใหม่อีกครั้ง',
        background: '#1e1e2e',
        color: '#cdd6f4'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>

      {/* Floating shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="login-container">
        <div className="login-header">
          <div className="icon-wrapper">
            <span className="login-icon">🔐</span>
          </div>
          <h2>เข้าสู่ระบบ</h2>
          <p>ยินดีต้อนรับกลับมา! กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">
              <span className="label-icon">👤</span>
              ชื่อผู้ใช้
            </label>
            <div className="input-wrapper">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="กรอกชื่อผู้ใช้ของคุณ"
                value={formData.username}
                onChange={handleInputChange}
                className="styled-input"
              />
              <div className="input-border"></div>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">
              <span className="label-icon">🔒</span>
              รหัสผ่าน
            </label>
            <div className="input-wrapper password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="กรอกรหัสผ่านของคุณ"
                value={formData.password}
                onChange={handleInputChange}
                className="styled-input"
              />
              <button
                type="button"
                className="toggle-btn"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
              <div className="input-border"></div>
            </div>
          </div>

          <button 
            type="submit" 
            className={`login-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                กำลังเข้าสู่ระบบ...
              </>
            ) : (
              <>
                <span className="btn-icon">🚀</span>
                เข้าสู่ระบบ
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <button className="back-home" onClick={() => router.push('/')}>
            <span className="btn-icon">🏠</span>
            กลับหน้าหลัก
          </button>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, 
            #667eea 0%, 
            #764ba2 25%, 
            #f093fb 50%, 
            #f5576c 75%, 
            #4facfe 100%);
          background-size: 400% 400%;
          animation: gradientShift 8s ease-in-out infinite;
          position: relative;
          padding: 20px;
          overflow: hidden;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle-0 { width: 4px; height: 4px; top: 10%; left: 10%; animation-delay: 0s; }
        .particle-1 { width: 6px; height: 6px; top: 20%; left: 80%; animation-delay: 1s; }
        .particle-2 { width: 8px; height: 8px; top: 80%; left: 20%; animation-delay: 2s; }
        .particle-3 { width: 5px; height: 5px; top: 60%; left: 90%; animation-delay: 3s; }
        .particle-4 { width: 7px; height: 7px; top: 30%; left: 60%; animation-delay: 4s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(20px) rotate(240deg); }
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          animation: floatShapes 12s ease-in-out infinite;
        }

        .shape-1 { 
          width: 100px; height: 100px; 
          top: 10%; left: 15%; 
          animation-delay: 0s; 
        }
        .shape-2 { 
          width: 150px; height: 150px; 
          top: 70%; right: 10%; 
          animation-delay: 3s;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        .shape-3 { 
          width: 80px; height: 80px; 
          bottom: 30%; left: 70%; 
          animation-delay: 6s; 
        }
        .shape-4 { 
          width: 120px; height: 120px; 
          top: 40%; right: 80%; 
          animation-delay: 9s;
          border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
        }

        @keyframes floatShapes {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-30px) rotate(90deg) scale(1.1); }
          50% { transform: translateY(20px) rotate(180deg) scale(0.9); }
          75% { transform: translateY(-10px) rotate(270deg) scale(1.05); }
        }

        .login-container {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          padding: 50px 40px;
          border-radius: 30px;
          width: 100%;
          max-width: 450px;
          box-shadow: 
            0 20px 40px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.1);
          animation: slideIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 2;
          position: relative;
        }

        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        .login-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .icon-wrapper {
          display: inline-block;
          background: linear-gradient(135deg, #ff6a00, #ee0979);
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .login-icon {
          font-size: 32px;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
        }

        .login-header h2 {
          color: white;
          font-size: 32px;
          margin: 0 0 15px 0;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .login-header p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          margin: 0;
          line-height: 1.5;
        }

        .login-form {
          margin-bottom: 30px;
        }

        .input-group {
          margin-bottom: 25px;
        }

        .input-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          color: white;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .label-icon {
          font-size: 18px;
        }

        .input-wrapper {
          position: relative;
        }

        .password-wrapper {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .styled-input {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 15px;
          background: rgba(255,255,255,0.1);
          color: white;
          font-size: 16px;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .styled-input::placeholder {
          color: rgba(255,255,255,0.6);
        }

        .styled-input:focus {
          border-color: #ff6a00;
          background: rgba(255,255,255,0.15);
          box-shadow: 0 0 20px rgba(255, 106, 0, 0.3);
          transform: translateY(-2px);
        }

        .input-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff6a00, #ee0979);
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .styled-input:focus + .input-border {
          width: 100%;
        }

        .toggle-btn {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.3);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .toggle-btn:hover {
          background: rgba(0,0,0,0.5);
          transform: translateY(-50%) scale(1.05);
        }

        .login-btn {
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, #ff6a00, #ee0979, #a855f7);
          background-size: 200% 200%;
          color: white;
          border: none;
          border-radius: 15px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 10px 30px rgba(255, 106, 0, 0.3);
          animation: gradientFlow 3s ease infinite;
          position: relative;
          overflow: hidden;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .login-btn:hover:not(.loading) {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 106, 0, 0.4);
        }

        .login-btn:active:not(.loading) {
          transform: translateY(-1px);
        }

        .login-btn.loading {
          cursor: not-allowed;
          opacity: 0.8;
        }

        .btn-icon {
          font-size: 20px;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .login-footer {
          text-align: center;
        }



        .back-home {
          width: 100%;
          padding: 16px;
          background: rgba(0,0,0,0.3);
          color: white;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 15px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          backdrop-filter: blur(10px);
        }

        .back-home:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        /* Responsive */
        @media (max-width: 480px) {
          .login-container {
            padding: 40px 25px;
            margin: 10px;
            border-radius: 25px;
          }
          
          .login-header h2 {
            font-size: 28px;
          }
          
          .icon-wrapper {
            width: 70px;
            height: 70px;
          }
          
          .login-icon {
            font-size: 28px;
          }
          
          .styled-input {
            padding: 14px 16px;
            font-size: 15px;
          }
          
          .login-btn {
            padding: 16px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}