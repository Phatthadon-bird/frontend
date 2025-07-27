'use client'

import { useState } from 'react';

export default function RegisterCompetition() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    playerName: '',
    sportType: '',
    date: '',
    agreeRules: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.playerName || !formData.sportType || !formData.date) {
      setErrorMessage('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else if (!formData.agreeRules) {
      setErrorMessage('กรุณายอมรับกติกาการแข่งขัน');
    } else {
      setErrorMessage('');
      alert('ลงทะเบียนแข่งขันสำเร็จ!');
    }
  };

  return (
    <div className="login-page">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>หน้าลงแข่ง</title>

      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="logo">กลับสู่หน้าหลัก</a>
      </nav>

      {/* Form */}
      <div className="login-container">
        <h2>ลงทะเบียนแข่งขัน</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="playerName">ชื่อนักกีฬา</label>
            <input
              type="text"
              id="playerName"
              name="playerName"
              placeholder="กรอกชื่อนักกีฬา"
              value={formData.playerName}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="sportType">ประเภทกีฬา</label>
            <input
              type="text"
              id="sportType"
              name="sportType"
              placeholder="เช่น ฟุตบอล, ว่ายน้ำ"
              value={formData.sportType}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="date">วันที่แข่งขัน</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="agreeRules">
              <input
                type="checkbox"
                id="agreeRules"
                name="agreeRules"
                checked={formData.agreeRules}
                onChange={handleInputChange}
              />
              ยอมรับกติกาการแข่งขัน
            </label>
          </div>

          <button type="submit">ลงทะเบียน</button>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <div className="footer-links">
            <a href="/schedule">ตารางการแข่งขัน</a>
            <a href="https://www.cuethong.com/snooker_rules_3.php" target="_blank" rel="noopener noreferrer">อ่านกติกา</a>

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
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #218838;
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

        .error-message {
          color: red;
          margin-top: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
