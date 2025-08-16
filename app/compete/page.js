'use client';

import { useState } from 'react';

export default function RegisterSnooker() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    team: '',
    nickname: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ตรวจสอบข้อมูลสำคัญ
    if (!formData.name || !formData.age || !formData.phone || !formData.email) {
      setErrorMessage('กรุณากรอกข้อมูลให้ครบทุกช่องที่จำเป็น');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setErrorMessage('');
    console.log('สมัครแข่งสนุ๊กเกอร์:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="register-page">
      {/* Animated Background */}
      <div className="background-animation">
        <div className="floating-ball ball-1"></div>
        <div className="floating-ball ball-2"></div>
        <div className="floating-ball ball-3"></div>
        <div className="floating-ball ball-4"></div>
        <div className="floating-ball ball-5"></div>
        <div className="floating-ball ball-6"></div>
      </div>

      {/* Enhanced Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <a href="/" className="logo">
            <span className="logo-icon">🎱</span>
            <span className="logo-text">กลับสู่หน้าหลัก</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="register-container">
        {!submitted ? (
          <div className="form-wrapper">
            {/* Header Section */}
            <div className="header-section">
              <div className="icon-wrapper">
                <div className="snooker-icon">🎯</div>
              </div>
              <h2 className="form-title">สมัครแข่งสนุกเกอร์</h2>
              <p className="form-subtitle">เข้าร่วมการแข่งขันระดับมืออาชีพ</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="name">
                    <span className="label-icon">👤</span>
                    ชื่อ-นามสกุล*
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="กรอกชื่อ-นามสกุล"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="age">
                    <span className="label-icon">🎂</span>
                    อายุ*
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      id="age"
                      name="age"
                      placeholder="กรอกอายุ"
                      min="10"
                      max="100"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="phone">
                    <span className="label-icon">📱</span>
                    เบอร์โทรศัพท์*
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="กรอกเบอร์โทรศัพท์"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="email">
                    <span className="label-icon">✉️</span>
                    อีเมล*
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="กรอกอีเมล"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="team">
                    <span className="label-icon">👥</span>
                    ชื่อทีม (ถ้ามี)
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="team"
                      name="team"
                      placeholder="กรอกชื่อทีม (ถ้ามี)"
                      value={formData.team}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="nickname">
                    <span className="label-icon">⭐</span>
                    ชื่อฉายา (ถ้ามี)
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      placeholder="กรอกชื่อฉายา (ถ้ามี)"
                      value={formData.nickname}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="error-message">
                  <span className="error-icon">⚠️</span>
                  {errorMessage}
                </div>
              )}

              <button type="submit" className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    กำลังส่งข้อมูล...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    สมัครแข่งขัน
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="success-wrapper">
            <div className="success-animation">
              <div className="success-icon">✅</div>
            </div>
            <div className="success-content">
              <h2 className="success-title">สมัครเรียบร้อยแล้ว!</h2>
              <p className="success-text">
                ขอบคุณที่สมัครแข่งสนุกเกอร์กับเรา<br />
                เราจะติดต่อกลับไปเร็ว ๆ นี้
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="back-home-btn"
              >
                <span className="btn-icon">🏠</span>
                กลับหน้าหลัก
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .register-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f4c75 0%, #3282b8 50%, #bbe1fa 100%);
          position: relative;
          overflow-x: hidden;
          font-family: 'Kanit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .background-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-ball {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 10s ease-in-out infinite;
        }

        .ball-1 {
          width: 100px;
          height: 100px;
          background: #ff4757;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .ball-2 {
          width: 80px;
          height: 80px;
          background: #2ed573;
          top: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .ball-3 {
          width: 120px;
          height: 120px;
          background: #ffa502;
          bottom: 30%;
          left: 5%;
          animation-delay: 4s;
        }

        .ball-4 {
          width: 60px;
          height: 60px;
          background: #3742fa;
          top: 50%;
          right: 5%;
          animation-delay: 1s;
        }

        .ball-5 {
          width: 90px;
          height: 90px;
          background: #a55eea;
          bottom: 10%;
          right: 20%;
          animation-delay: 3s;
        }

        .ball-6 {
          width: 70px;
          height: 70px;
          background: #f1c40f;
          top: 70%;
          left: 20%;
          animation-delay: 5s;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-40px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-60px) rotate(270deg); 
          }
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(15, 76, 117, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 100;
          padding: 0;
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
        }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 700;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.1);
        }

        .logo:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          color: white;
          text-decoration: none;
        }

        .logo-icon {
          font-size: 1.5rem;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 2rem 1rem;
          position: relative;
          z-index: 2;
        }

        .form-wrapper, .success-wrapper {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          padding: 0;
          width: 100%;
          max-width: 600px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          overflow: hidden;
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .header-section {
          background: linear-gradient(135deg, #0f4c75, #3282b8);
          color: white;
          padding: 3rem 2rem;
          text-align: center;
          position: relative;
        }

        .header-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1), transparent 50%);
          pointer-events: none;
        }

        .icon-wrapper {
          margin-bottom: 1.5rem;
        }

        .snooker-icon {
          display: inline-block;
          font-size: 4rem;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }

        .form-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.02em;
        }

        .form-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0;
          font-weight: 300;
        }

        .registration-form {
          padding: 2.5rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #2c3e50;
          font-size: 0.95rem;
        }

        .label-icon {
          font-size: 1.1rem;
        }

        .input-wrapper {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.2rem;
          font-size: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.8);
          color: #2d3748;
        }

        .form-input:focus {
          border-color: #3282b8;
          box-shadow: 0 0 0 3px rgba(50, 130, 184, 0.1);
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 1);
        }

        .form-input::placeholder {
          color: #a0aec0;
          font-weight: 400;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }

        .error-icon {
          font-size: 1.2rem;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #0f4c75, #3282b8);
          color: white;
          border: none;
          border-radius: 15px;
          padding: 1.2rem 2rem;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          box-shadow: 
            0 8px 25px rgba(15, 76, 117, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover:not(.submitting) {
          transform: translateY(-3px);
          box-shadow: 
            0 15px 40px rgba(15, 76, 117, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .submit-btn.submitting {
          pointer-events: none;
          opacity: 0.8;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin-loading 1s linear infinite;
        }

        @keyframes spin-loading {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        /* Success Page Styles */
        .success-wrapper {
          text-align: center;
          max-width: 500px;
        }

        .success-animation {
          background: linear-gradient(135deg, #2ed573, #26d0ce);
          padding: 4rem 2rem;
          position: relative;
        }

        .success-animation::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 70%);
          pointer-events: none;
        }

        .success-icon {
          font-size: 5rem;
          animation: successBounce 1s ease-out;
        }

        @keyframes successBounce {
          0% { transform: scale(0) rotate(180deg); }
          50% { transform: scale(1.2) rotate(360deg); }
          100% { transform: scale(1) rotate(360deg); }
        }

        .success-content {
          padding: 2.5rem;
        }

        .success-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #2ed573;
          margin: 0 0 1rem 0;
        }

        .success-text {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .back-home-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          background: linear-gradient(135deg, #0f4c75, #3282b8);
          color: white;
          border: none;
          border-radius: 15px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 6px 20px rgba(15, 76, 117, 0.3);
        }

        .back-home-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(15, 76, 117, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-content {
            padding: 1rem;
          }

          .register-container {
            padding: 1rem 0.5rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .header-section {
            padding: 2.5rem 1.5rem;
          }

          .form-title {
            font-size: 2rem;
          }

          .registration-form {
            padding: 2rem 1.5rem;
          }

          .floating-ball {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .form-title {
            font-size: 1.8rem;
          }

          .form-subtitle {
            font-size: 1rem;
          }

          .registration-form {
            padding: 1.5rem 1rem;
          }

          .success-content {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}