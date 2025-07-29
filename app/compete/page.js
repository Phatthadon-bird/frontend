'use client';

import { useState } from 'react';

export default function RegisterSnooker() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    team: '',
    nickname: '',   // เพิ่มฟิลด์นี้ตรงนี้
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูลสำคัญ
    if (!formData.name || !formData.age || !formData.phone || !formData.email) {
      setErrorMessage('กรุณากรอกข้อมูลให้ครบทุกช่องที่จำเป็น');
      return;
    }

    setErrorMessage('');
    // TODO: ส่งข้อมูลไป backend หรือ API ที่นี่
    console.log('สมัครแข่งสนุ๊กเกอร์:', formData);
    setSubmitted(true);
  };

  return (
    <div className="register-page">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>สมัครแข่งสนุ๊กเกอร์</title>

      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="logo">กลับสู่หน้าหลัก</a>
      </nav>

      {/* Register Form or Success Message */}
      <div className="register-container">
        {!submitted ? (
          <>
            <h2>สมัครแข่งสนุ๊กเกอร์</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">ชื่อ-นามสกุล*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="กรอกชื่อ-นามสกุล"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="age">อายุ*</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="กรอกอายุ"
                  min="10"
                  max="100"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone">เบอร์โทรศัพท์*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="กรอกเบอร์โทรศัพท์"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">อีเมล*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="กรอกอีเมล"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="team">ชื่อทีม (ถ้ามี)</label>
                <input
                  type="text"
                  id="team"
                  name="team"
                  placeholder="กรอกชื่อทีม (ถ้ามี)"
                  value={formData.team}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="nickname">ชื่อฉายา (ถ้ามี)</label>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  placeholder="กรอกชื่อฉายา (ถ้ามี)"
                  value={formData.nickname}
                  onChange={handleInputChange}
                />
              </div>

              {errorMessage && <div className="error-message">{errorMessage}</div>}

              <button type="submit">สมัคร</button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>สมัครเรียบร้อยแล้ว!</h2>
            <p>ขอบคุณที่สมัครแข่งสนุ๊กเกอร์กับเรา เราจะติดต่อกลับไปเร็ว ๆ นี้</p>
          </div>
        )}
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
          z-index: 10;
        }
        .navbar .logo {
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }
        .register-page {
          padding-top: 70px; /* navbar height */
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f0f2f5;
        }
        .register-container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 450px;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #2f855a;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        .input-group {
          margin-bottom: 15px;
        }
        .input-group label {
          font-size: 14px;
          color: #555;
          margin-bottom: 5px;
          display: block;
        }
        .input-group input {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }
        .input-group input:focus {
          border-color: #2f855a;
          outline: none;
          box-shadow: 0 0 5px #a7f3d0;
        }
        button {
          padding: 12px;
          background-color: #2f855a;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #276749;
        }
        .error-message {
          color: #e53e3e;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 10px;
          text-align: center;
        }
        .success-message {
          text-align: center;
          color: #276749;
        }
        .success-message h2 {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
