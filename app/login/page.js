'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isConfirmAdmin, setIsConfirmAdmin] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true' && !localStorage.getItem('isAdminConfirmed')) {
      setIsConfirmAdmin(true);
    }
    if (localStorage.getItem('isAdminConfirmed') === 'true') {
      router.push('/admin/users');
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleButtonClick = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.password || (!isConfirmAdmin && !formData.username)) {
      await Swal.fire({
        icon: 'warning',
        title: !isConfirmAdmin ? 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' : 'กรุณากรอกรหัสผ่าน',
      });
      return;
    }

    const correctUsername = 'Bird';
    const correctPassword = '1234';

    if (!isConfirmAdmin) {
      if (formData.username === correctUsername && formData.password === correctPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.removeItem('isAdminConfirmed');
        setIsConfirmAdmin(true);
        await Swal.fire({
          icon: 'success',
          title: 'ล็อกอินสำเร็จ',
          text: 'กรุณายืนยันรหัสผ่านผู้ดูแลระบบ',
          timer: 1500,
          showConfirmButton: false,
        });
        setFormData({ username: '', password: '' });
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
        });
      }
    } else {
      if (formData.password === correctPassword) {
        localStorage.setItem('isAdminConfirmed', 'true');
        await Swal.fire({
          icon: 'success',
          title: 'ยืนยันรหัสผ่านสำเร็จ',
          timer: 1500,
          showConfirmButton: false,
        });
        router.push('/admin/users');
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'รหัสผ่านไม่ถูกต้อง',
        });
      }
    }
  };

  return (
    <div className="login-page">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>หน้าล็อกอิน</title>
      <div className="login-container">
        <h2>{isConfirmAdmin ? '🔐 ยืนยันรหัสผ่านผู้ดูแลระบบ' : '🚀 เข้าสู่ระบบแอดมิน'}</h2>
        <form onSubmit={handleLogin} autoComplete="off">
          {!isConfirmAdmin && (
            <div className="input-group">
              <label htmlFor="username">ชื่อผู้ใช้</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="ชื่อผู้ใช้ของคุณ"
                value={formData.username}
                onChange={handleInputChange}
                autoFocus
                required={!isConfirmAdmin}
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="password">{isConfirmAdmin ? 'รหัสผ่านผู้ดูแลระบบ' : 'รหัสผ่าน'}</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={isConfirmAdmin ? 'กรุณาใส่รหัสผ่านอีกครั้ง' : 'รหัสผ่านของคุณ'}
              value={formData.password}
              onChange={handleInputChange}
              autoFocus={isConfirmAdmin}
              required
            />
          </div>
          <button ref={buttonRef} type="submit" onClick={handleButtonClick} aria-label={isConfirmAdmin ? 'ยืนยันรหัสผ่าน' : 'ล็อกอิน'}>
            {isConfirmAdmin ? '✅ ยืนยัน' : '🚀 ล็อกอิน'}
          </button>
          <div className="back-home-container">
            <button type="button" className="back-home-button" onClick={() => router.push('/')}>
              🏠 กลับหน้าหลัก
            </button>
          </div>
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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .login-container {
          background-color: white;
          padding: 30px 25px;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }
        h2 {
          margin-bottom: 25px;
          color: #333;
          font-weight: 700;
        }
        .input-group {
          margin-bottom: 20px;
          text-align: left;
        }
        label {
          display: block;
          margin-bottom: 6px;
          color: #555;
          font-weight: 600;
          user-select: none;
        }
        input {
          width: 100%;
          padding: 12px 14px;
          border: 1.8px solid #ccc;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          transition: border-color 0.3s ease;
        }
        input:focus {
          outline: none;
          border-color: #007bff;
          background-color: #f0f8ff;
        }
        button[type="submit"] {
          width: 100%;
          padding: 14px 0;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        button[type="submit"]:hover {
          background: #0056b3;
        }
        button[type="submit"] .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: rippleEffect 0.6s linear;
          background-color: rgba(255, 255, 255, 0.7);
          pointer-events: none;
          z-index: 10;
        }
        @keyframes rippleEffect {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .back-home-container {
          margin-top: 20px;
        }
        .back-home-button {
          background-color: transparent;
          color: #007bff;
          font-weight: 600;
          font-size: 16px;
          border: 2px solid #007bff;
          padding: 10px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;
        }
        .back-home-button:hover {
          background-color: #007bff;
          color: white;
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
        }
        @media (max-width: 480px) {
          .login-container {
            padding: 25px 20px;
          }
          input {
            font-size: 14px;
            padding: 10px 12px;
          }
          button[type="submit"] {
            font-size: 16px;
            padding: 12px 0;
          }
        }
      `}</style>
    </div>
  );
}
