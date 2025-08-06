'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'   // เพิ่มตรงนี้
import Swal from 'sweetalert2'
import bcrypt from 'bcryptjs'

export default function RegisterPage() {
  const router = useRouter()   // สร้าง router instance

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',     // เพิ่มตัวนี้ด้วย เพราะส่งข้อมูลนี้ไป API
    fullname: '',
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
      const hashedPassword = await bcrypt.hash(formData.password, 10)

      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: hashedPassword,
          firstname: formData.firstname,
          fullname: formData.fullname,
          lastname: formData.lastname,
          address: formData.address,
          sex: formData.sex,
          birthday: formData.birthdate,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        await Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ',
          text: 'คุณสามารถเข้าสู่ระบบได้แล้ว',
          timer: 2000,
          showConfirmButton: false,
        })

        setFormData({
          username: '',
          password: '',
          firstname: '',
          fullname: '',
          lastname: '',
          address: '',
          sex: '',
          birthdate: '',
          accept: false,
        })

        router.push('/')  // เปลี่ยนหน้าไปหน้าหลัก
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
          background-color: #121212;
          color: #eee;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: #1f1f1f;
          color: white;
          padding: 15px 0;
          text-align: center;
          box-shadow: 0 2px 5px rgba(255 255 255 / 0.1);
          z-index: 10;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .navbar .logo {
          font-size: 24px;
          font-weight: bold;
          color: #fca311;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .navbar .logo:hover {
          color: #ffba08;
        }

        .register-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding-top: 60px; /* navbar height */
          box-sizing: border-box;
          background: linear-gradient(135deg, #0b3c49, #1f1f1f);
          overflow: hidden;
        }

        .register-container {
          background: rgba(252, 163, 17, 0.15);
          padding: 30px 30px 40px;
          border-radius: 15px;
          box-shadow: 0 0 20px rgb(252 163 17 / 0.3);
          width: 100%;
          max-width: 450px;
          max-height: calc(100vh - 80px); /* ลบ navbar */
          overflow-y: auto;
          backdrop-filter: blur(15px);
          border: 1.5px solid #fca311;
          color: #fff;
          scrollbar-width: thin;
          scrollbar-color: #fca311 transparent;
        }

        .register-container::-webkit-scrollbar {
          width: 8px;
        }
        .register-container::-webkit-scrollbar-thumb {
          background-color: #fca311;
          border-radius: 4px;
        }
        .register-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .register-container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #ffba08;
          font-weight: 700;
          text-shadow: 0 0 5px #fca311;
        }

        .input-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          font-size: 14px;
          color: #f0e68c;
          margin-bottom: 6px;
          font-weight: 600;
          text-shadow: 0 0 3px #fca311;
        }

        input[type='text'],
        input[type='password'],
        select,
        input[type='date'],
        textarea {
          padding: 10px;
          font-size: 14px;
          border: 1px solid #fca311;
          border-radius: 8px;
          box-sizing: border-box;
          background-color: #222;
          color: #fff;
          transition: border-color 0.3s ease;
          box-shadow: inset 0 0 5px #fca311;
        }

        input[type='text']:focus,
        input[type='password']:focus,
        select:focus,
        input[type='date']:focus,
        textarea:focus {
          border-color: #ffba08;
          outline: none;
          box-shadow: 0 0 8px #ffba08;
          background-color: #1a1a1a;
        }

        textarea {
          resize: vertical;
        }

        .gender-options {
          display: flex;
          gap: 20px;
          font-size: 14px;
          color: #f0e68c;
        }

        .gender-options label {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          font-weight: 600;
          text-shadow: 0 0 3px #fca311;
        }

        input[type='radio'] {
          cursor: pointer;
          accent-color: #fca311;
          width: 18px;
          height: 18px;
        }

        .checkbox-group {
          flex-direction: row;
          align-items: center;
          gap: 8px;
          display: flex;
          font-weight: 600;
          color: #f0e68c;
          text-shadow: 0 0 3px #fca311;
        }

        input[type='checkbox'] {
          width: auto;
          cursor: pointer;
          accent-color: #fca311;
          transform: scale(1.2);
        }

        button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(45deg, #fca311, #ffba08);
          color: #1f1f1f;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 0 15px #fca311;
          transition: background 0.4s ease;
          letter-spacing: 1px;
        }

        button:hover {
          background: linear-gradient(45deg, #ffba08, #fca311);
          box-shadow: 0 0 20px #ffba08;
        }
      `}</style>
    </div>
  )
}
