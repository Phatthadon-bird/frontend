'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'
import bcrypt from 'bcryptjs'  // เพิ่ม import bcryptjs

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullname: '',     // ชื่อจริง
    lastname: '',
    address: '',
    sex: '',
    birthdate: '',
    accept: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.accept) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณายอมรับเงื่อนไขการใช้งาน',
      })
      return
    }

    try {
      // เข้ารหัสรหัสผ่านก่อนส่ง
      const hashedPassword = await bcrypt.hash(formData.password, 10)

      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: hashedPassword,       // ส่งรหัสผ่านที่เข้ารหัสแล้ว
          firstname: formData.firstname,   // ส่งชื่อเล่นไปที่ firstname
          fullname: formData.fullname,    // ส่งชื่อจริงไปที่ fullname
          lastname: formData.lastname,
          address: formData.address,
          sex: formData.sex,
          birthday: formData.birthdate,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ',
          text: 'คุณสามารถเข้าสู่ระบบได้แล้ว',
        })
        setFormData({
          username: '',
          password: '',
          fullname: '',
          lastname: '',
          address: '',
          sex: '',
          birthdate: '',
          accept: false,
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: data.message || 'ไม่สามารถสมัครสมาชิกได้',
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      })
    }
  }

  return (
    <div className="register-page">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>หน้าลงทะเบียน</title>

      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="logo">
          กลับสู่หน้าหลัก
        </a>
      </nav>

      {/* Register Form */}
      <div className="register-container">
        <h2>สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit}>

          <div className="input-group">
  <label htmlFor="firstname">คำนำหน้าชื่อ</label>
  <select
    id="firstname"
    name="firstname"
    value={formData.firstname}
    onChange={handleInputChange}
    required
  >
    <option value="">-- เลือก --</option>
    <option value="นาย">นาย</option>
    <option value="นางสาว">นางสาว</option>
    <option value="นาง">นาง</option>
  </select>
</div>
          <div className="input-group">
            <label htmlFor="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="กรุณากรอกรหัสผ่าน"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="username">ชื่อเล่น</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="กรุณากรอกชื่อเล่น"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="fullname">ชื่อจริง</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="กรุณากรอกชื่อจริง"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastname">นามสกุล</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="กรุณากรอกนามสกุล"
              value={formData.lastname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="address">ที่อยู่</label>
            <textarea
              id="address"
              name="address"
              placeholder="กรุณากรอกที่อยู่"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              required
            />
          </div>

          <div className="input-group">
            <label>เพศ</label>
            <div className="gender-options">
              {['ชาย', 'หญิง', 'อื่นๆ'].map((g) => (
                <label key={g} className="inline-flex items-center gap-1">
                  <input
                    type="radio"
                    name="sex"
                    value={g}
                    checked={formData.sex === g}
                    onChange={handleInputChange}
                    required
                    className="form-radio"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div className="input-group">
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

          <div className="input-group checkbox-group">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={formData.accept}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="accept">ฉันยอมรับเงื่อนไข</label>
          </div>

          <button type="submit">สมัครสมาชิก</button>
        </form>
      </div>



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
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f2f5;
          padding-top: 60px; /* navbar height */
          box-sizing: border-box;
          overflow-y: auto;
        }

        .register-container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .register-container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .input-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          font-size: 14px;
          color: #555;
          margin-bottom: 6px;
        }

        input[type='text'],
        input[type='password'],
        select,
        input[type='date'],
        textarea {
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }

        input[type='text']:focus,
        input[type='password']:focus,
        select:focus,
        input[type='date']:focus,
        textarea:focus {
          border-color: #007bff;
          outline: none;
        }

        textarea {
          resize: vertical;
        }

        .gender-options {
          display: flex;
          gap: 20px;
          font-size: 14px;
          color: #555;
        }

        .gender-options label {
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }

        input[type='radio'] {
          cursor: pointer;
        }

        .checkbox-group {
          flex-direction: row;
          align-items: center;
          gap: 8px;
          display: flex;
        }

        input[type='checkbox'] {
          width: auto;
          cursor: pointer;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  )
}
