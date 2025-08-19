'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isConfirmAdmin, setIsConfirmAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    const correctUsername = 'admin';
    const correctPassword = '1234';

    if (!formData.password || (!isConfirmAdmin && !formData.username)) {
      await Swal.fire({
        icon: 'warning',
        title: !isConfirmAdmin ? 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' : 'กรุณากรอกรหัสผ่าน',
      });
      setIsLoading(false);
      return;
    }

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
    setIsLoading(false);
  };

  return (
    <div className="login-page">
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="login-container">
        <div className="logo-section">
          <div className="logo-circle">
            <span className="logo-icon">{isConfirmAdmin ? '🔐' : '👨‍💼'}</span>
          </div>
          <h1 className="app-title">Admin Portal</h1>
        </div>

        <div className="form-section">
          <h2 className="form-title">
            {isConfirmAdmin ? 'ยืนยันรหัสผ่านผู้ดูแลระบบ' : 'เข้าสู่ระบบแอดมิน'}
          </h2>
          
          <form onSubmit={handleLogin} autoComplete="off">
            {!isConfirmAdmin && (
              <div className="input-group">
                <label htmlFor="username"><span className="label-icon">👤</span>ชื่อผู้ใช้</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="ใส่ชื่อผู้ใช้ของคุณ"
                    value={formData.username}
                    onChange={handleInputChange}
                    autoFocus
                    required={!isConfirmAdmin}
                  />
                  <div className="input-focus-border"></div>
                </div>
              </div>
            )}
            
            <div className="input-group">
              <label htmlFor="password"><span className="label-icon">🔒</span>{isConfirmAdmin ? 'รหัสผ่านผู้ดูแลระบบ' : 'รหัสผ่าน'}</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder={isConfirmAdmin ? 'ยืนยันรหัสผ่านอีกครั้ง' : 'ใส่รหัสผ่านของคุณ'}
                  value={formData.password}
                  onChange={handleInputChange}
                  autoFocus={isConfirmAdmin}
                  required
                />
                <div className="input-focus-border"></div>
              </div>
            </div>

            <button 
              ref={buttonRef} 
              type="submit" 
              className={`submit-button ${isLoading ? 'loading' : ''}`}
              onClick={handleButtonClick}
              disabled={isLoading}
            >
              {isLoading ? <div className="spinner"></div> : <>{isConfirmAdmin ? '✅ ยืนยัน' : '🚀 ล็อกอิน'}</>}
            </button>

            <div className="back-home-container">
              <button type="button" className="back-home-button" onClick={() => router.push('/')}>🏠 กลับหน้าหลัก</button>
            </div>
          </form>
        </div>

        <div className="footer-text">
          <p>ระบบจัดการผู้ดูแลระบบ</p>
          <div className="security-badge"><span className="security-icon">🛡️</span> ปลอดภัย 100%</div>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          padding: 20px;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow: hidden;
        }
        @keyframes gradientShift { 0% {background-position:0%50%;}50%{background-position:100%50%;}100%{background-position:0%50%;} }

        .particles { position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:1; }
        .particle { position:absolute; width:4px; height:4px; background:rgba(255,255,255,0.6); border-radius:50%; animation:float linear infinite; }
        @keyframes float {0%{transform:translateY(100vh) rotate(0deg);opacity:0;}10%{opacity:1;}90%{opacity:1;}100%{transform:translateY(-100px) rotate(360deg);opacity:0;}}

        .login-container { background: rgba(255,255,255,0.95); backdrop-filter: blur(20px); border-radius:24px; max-width:420px; overflow:hidden; z-index:2; animation:slideUp 0.6s ease-out; }
        @keyframes slideUp { from {opacity:0; transform:translateY(30px);} to {opacity:1; transform:translateY(0);} }

        .logo-section { text-align:center; padding:40px 30px 20px; background:linear-gradient(135deg,#667eea 0%,#764ba2 100%); color:white; position:relative; }
        .logo-circle { width:80px; height:80px; margin:0 auto 15px; border-radius:50%; background: rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; border:2px solid rgba(255,255,255,0.3); animation:pulse 2s ease-in-out infinite; }
        @keyframes pulse {0%,100%{transform:scale(1);}50%{transform:scale(1.05);}}
        .logo-icon { font-size:32px; }
        .app-title { font-size:28px; font-weight:700; margin:0; }

        .form-section { padding:30px; }
        .form-title { font-size:22px; font-weight:600; color:#2d3748; text-align:center; margin-bottom:30px; position:relative; }
        .form-title::after { content:''; position:absolute; bottom:-10px; left:50%; transform:translateX(-50%); width:40px; height:3px; background:linear-gradient(90deg,#667eea,#764ba2); border-radius:2px; }

        .input-group { margin-bottom:25px; position:relative; }
        .input-group label { display:flex; align-items:center; margin-bottom:8px; color:#4a5568; font-weight:600; font-size:14px; }
        .label-icon { margin-right:8px; font-size:16px; }
        .input-wrapper { position:relative; }
        .input-wrapper input { width:100%; padding:16px 18px; border:2px solid #e2e8f0; border-radius:12px; font-size:16px; font-weight:500; background:#fff; transition:all 0.3s; z-index:1; }
        .input-wrapper input:focus { outline:none; border-color:#667eea; background:#f8faff; box-shadow:0 10px 25px rgba(102,126,234,0.1); }
        .input-focus-border { position:absolute; bottom:0; left:50%; width:0; height:2px; background:linear-gradient(90deg,#667eea,#764ba2); transition:all 0.3s ease; transform:translateX(-50%); border-radius:1px; }
        .input-wrapper input:focus + .input-focus-border { width:100%; }

        .submit-button { width:100%; padding:18px 0; background:linear-gradient(135deg,#667eea,#764ba2); color:white; border:none; border-radius:12px; font-size:18px; font-weight:700; cursor:pointer; position:relative; overflow:hidden; margin-bottom:20px; box-shadow:0 8px 25px rgba(102,126,234,0.3); }
        .submit-button:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 15px 35px rgba(102,126,234,0.4); }
        .submit-button:disabled { opacity:0.7; cursor:not-allowed; }
        .submit-button .ripple { position:absolute; border-radius:50%; transform:scale(0); animation:rippleEffect 0.6s linear; background-color:rgba(255,255,255,0.6); pointer-events:none; z-index:10; }
        @keyframes rippleEffect { to { transform:scale(4); opacity:0; } }

        .spinner { width:20px; height:20px; border:2px solid transparent; border-top:2px solid white; border-radius:50%; animation:spin 1s linear infinite; }
        @keyframes spin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);} }

        .back-home-container { text-align:center; }
        .back-home-button { background:transparent; color:#667eea; font-weight:600; font-size:16px; border:2px solid #667eea; padding:12px 24px; border-radius:12px; cursor:pointer; transition:all 0.3s; display:flex; align-items:center; gap:8px; justify-content:center; margin:0 auto; position:relative; overflow:hidden; }
        .back-home-button:hover { background:#667eea; color:white; transform:translateY(-2px); box-shadow:0 8px 25px rgba(102,126,234,0.3); }

        .footer-text { text-align:center; padding:20px 30px 30px; border-top:1px solid rgba(0,0,0,0.05); }
        .footer-text p { color:#718096; font-size:14px; margin:0 0 10px; font-weight:500; }
        .security-badge { display:inline-flex; align-items:center; gap:6px; background:linear-gradient(135deg,#48bb78,#38a169); color:white; padding:6px 12px; border-radius:20px; font-size:12px; font-weight:600; box-shadow:0 4px 15px rgba(72,187,120,0.3); }
        .security-icon { font-size:14px; }

        @media (max-width:480px) {
          .login-page { padding:15px; }
          .login-container { max-width:100%; }
          .logo-section { padding:30px 25px 15px; }
          .logo-circle { width:70px; height:70px; }
          .logo-icon { font-size:28px; }
          .app-title { font-size:24px; }
          .form-section { padding:25px 20px; }
          .form-title { font-size:20px; }
          .input-wrapper input { padding:14px 16px; font-size:16px; }
          .submit-button { padding:16px 0; font-size:16px; }
        }
      `}</style>
    </div>
  );
}
