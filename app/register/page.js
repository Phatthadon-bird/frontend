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
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
          background-color: #f4f7fa;
        }

       .container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px; /* เพิ่ม padding เผื่อขอบ */
}


        .register-box {
          max-width: 300px;
          width: 100%;
          padding: 16px;
          background-color: #fff;
          border-radius: 6px;
          border: 1px solid #ddd;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .register-box h2 {
          text-align: center;
          margin-bottom: 16px;
          font-size: 22px;
          color: #333;
        }

        .form-group {
          margin-bottom: 14px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
          color: #555;
        }

        input[type="text"],
        input[type="password"],
        input[type="date"],
        select,
        textarea {
          width: 100%;
          padding: 8px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        textarea {
          resize: vertical;
          height: 60px;
        }

        .gender-group {
          display: flex;
          gap: 10px;
        }

        .gender-group label {
          font-size: 14px;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          font-size: 14px;
        }

        .checkbox-group input {
          margin-right: 6px;
        }

        button {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        .message {
          text-align: center;
          color: red;
          margin-top: 10px;
          font-size: 14px;
        }
      `}} />

      <div className="container">
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
    </div>
  );
}
