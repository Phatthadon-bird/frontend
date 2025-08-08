'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import bcrypt from 'bcryptjs'

export default function RegisterPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',
    fullname: '',
    lastname: '',
    address: '',
    sex: '',
    birthdate: '',
    phone: '',
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
          phone: formData.phone,
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
          phone: '',
          accept: false,
        })

        router.push('/')
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
      <div className="register-container">
        <h2>สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit} noValidate>
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
              placeholder="ตั้งรหัสผ่าน"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={6}
            />
            <span className="tooltip">อย่างน้อย 6 ตัวอักษร</span>
          </div>

          <div className="input-group">
            <label htmlFor="username">ชื่อเล่น</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="เช่น สมชาย"
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
              placeholder="กรอกชื่อจริง"
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
              placeholder="กรอกนามสกุล"
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
              placeholder="กรอกที่อยู่"
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
                <label key={g} className="radio-label">
                  <input
                    type="radio"
                    name="sex"
                    value={g}
                    checked={formData.sex === g}
                    onChange={handleInputChange}
                    required
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

          <div className="input-group">
            <label htmlFor="phone">เบอร์โทรศัพท์</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="08x-xxx-xxxx"
              value={formData.phone}
              onChange={handleInputChange}
              required
              pattern="[0-9]{9,10}"
              title="กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง"
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
            <label htmlFor="accept" className="checkbox-label">
              ฉันยอมรับเงื่อนไขการใช้งาน
            </label>
          </div>

          <button type="submit" className="btn-submit">
            สมัครสมาชิก
          </button>
        </form>

        <div className="back-home-container">
          <button
            type="button"
            className="btn-back-home"
            onClick={() => router.push('/')}
            aria-label="กลับหน้าหลัก"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-home"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            กลับหน้าหลัก
          </button>
        </div>
      </div>

      <style jsx>{`
        .register-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 20px;
          font-family: 'Poppins', sans-serif;
          color: #f0f0f0;
        }

        .register-container {
          background: #1f1f2e;
          padding: 40px 40px 50px;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
          max-width: 500px;
          width: 100%;
          position: relative;
        }

        h2 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 32px;
          font-weight: 700;
          color: #f39c12;
          text-shadow: 0 0 10px #f39c12;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        .input-group {
          position: relative;
          margin-bottom: 22px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #f0db99;
          text-shadow: 0 0 3px #f39c12;
          cursor: pointer;
        }

        input[type='text'],
        input[type='password'],
        input[type='tel'],
        input[type='date'],
        select,
        textarea {
          width: 100%;
          padding: 14px 18px;
          font-size: 16px;
          border-radius: 12px;
          border: 2px solid transparent;
          background-color: #2a2a3d;
          color: #f0f0f0;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: inset 0 0 8px rgba(243, 156, 18, 0.4);
          outline-offset: 2px;
        }

        input[type='text']:focus,
        input[type='password']:focus,
        input[type='tel']:focus,
        input[type='date']:focus,
        select:focus,
        textarea:focus {
          border-color: #f39c12;
          box-shadow: 0 0 15px #f39c12;
          background-color: #3a3a52;
          outline: none;
        }

        textarea {
          resize: vertical;
          min-height: 80px;
        }

        .tooltip {
          position: absolute;
          right: 12px;
          top: 38px;
          font-size: 12px;
          color: #ffd66a;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        input[type='password']:focus + .tooltip {
          opacity: 1;
        }

        .gender-options {
          display: flex;
          gap: 20px;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: 600;
          color: #f0db99;
          text-shadow: 0 0 4px #f39c12;
        }

        input[type='radio'] {
          cursor: pointer;
          width: 20px;
          height: 20px;
          accent-color: #f39c12;
          transition: transform 0.3s ease;
        }
        input[type='radio']:focus {
          transform: scale(1.2);
          outline: none;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .checkbox-label {
          font-weight: 600;
          cursor: pointer;
          user-select: none;
          color: #f0db99;
          text-shadow: 0 0 4px #f39c12;
          transition: color 0.3s ease;
        }

        input[type='checkbox'] {
          cursor: pointer;
          width: 20px;
          height: 20px;
          accent-color: #f39c12;
          transform: scale(1.3);
          transition: box-shadow 0.3s ease;
        }
        input[type='checkbox']:focus {
          box-shadow: 0 0 8px #f39c12;
          outline: none;
        }

        .btn-submit {
          background: linear-gradient(90deg, #f39c12, #e67e22);
          border: none;
          padding: 16px 0;
          border-radius: 25px;
          font-size: 20px;
          font-weight: 700;
          color: white;
          cursor: pointer;
          transition: background 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 6px 15px rgba(230, 126, 34, 0.8);
          letter-spacing: 1px;
        }

        .btn-submit:hover {
          background: linear-gradient(90deg, #e67e22, #f39c12);
          box-shadow: 0 8px 22px rgba(230, 126, 34, 1);
        }

        .back-home-container {
          margin-top: 20px;
          text-align: center;
        }

        .btn-back-home {
          background: transparent;
          border: 2px solid #f39c12;
          color: #f39c12;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px transparent;
        }

        .btn-back-home:hover {
          background: #f39c12;
          color: white;
          box-shadow: 0 0 15px #f39c12;
        }

        .icon-home {
          width: 20px;
          height: 20px;
          stroke: currentColor;
          stroke-width: 2.5;
        }

        /* Responsive */
        @media (max-width: 540px) {
          .register-container {
            padding: 30px 25px 40px;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
