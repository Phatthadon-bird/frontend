'use client'

import { useState } from 'react';

export default function Register() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    prefix: '',
    fullname: '',
    address: '',
    gender: '',
    birthdate: '',
    accept: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.accept) {
      setMessage('สมัครสมาชิกเรียบร้อยแล้ว');
    } else {
      setMessage('กรุณายอมรับเงื่อนไขการใช้งาน');
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>หน้าลงทะเบียน</title>
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background-color: #f4f7fa;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .register-box {
          max-width: 500px;
          width: 100%;
          padding: 40px;
          background-color: #fff;
          border-radius: 8px;
          border: 1px solid #ddd;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .register-box h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 28px;
          color: #333;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #555;
        }

        input[type="text"],
        input[type="password"],
        input[type="date"],
        select,
        textarea {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          transition: border 0.3s;
        }

        input[type="text"]:focus,
        input[type="password"]:focus,
        input[type="date"]:focus,
        select:focus,
        textarea:focus {
          border-color: #007bff;
          outline: none;
        }

        textarea {
          resize: vertical;
          height: 80px;
        }

        .gender-group {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .gender-group label {
          font-size: 16px;
          color: #555;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }

        .checkbox-group input {
          margin-right: 10px;
        }

        button {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }

        .message {
          text-align: center;
          color: red;
          margin-top: 10px;
        }
      `}} />
      <div className="register-box">
        <h2>ลงทะเบียน</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="prefix">คำนำหน้าชื่อ</label>
            <select
              id="prefix"
              name="prefix"
              value={formData.prefix}
              onChange={handleInputChange}
              required
            >
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นางสาว">นางสาว</option>
              <option value="นาง">นาง</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fullname">ชื่อ</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">ที่อยู่</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>เพศ</label>
            <div className="gender-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="ชาย"
                  checked={formData.gender === 'ชาย'}
                  onChange={handleInputChange}
                /> ชาย
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="หญิง"
                  checked={formData.gender === 'หญิง'}
                  onChange={handleInputChange}
                /> หญิง
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="อื่นๆ"
                  checked={formData.gender === 'อื่นๆ'}
                  onChange={handleInputChange}
                /> อื่นๆ
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">วันเกิด</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={formData.accept}
              onChange={handleInputChange}
            />
            <label htmlFor="accept">ฉันยอมรับเงื่อนไข</label>
          </div>
          <button type="submit">สมัครสมาชิก</button>
        </form>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}
