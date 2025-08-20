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
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="..."
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
    color: #fff;
  }

  .register-container {
    background: rgba(31, 31, 46, 0.9);
    backdrop-filter: blur(10px);
    padding: 40px 35px;
    border-radius: 20px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    max-width: 480px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  h2 {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    color: #f39c12;
    margin-bottom: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .input-group {
    margin-bottom: 18px;
  }

  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #f0db99;
    cursor: pointer;
  }

  input[type='text'],
  input[type='password'],
  input[type='tel'],
  input[type='date'],
  select,
  textarea {
    width: 100%;
    padding: 12px 15px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #555;
    background-color: #2a2a3d;
    color: #fff;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: #f39c12;
    outline: none;
    box-shadow: 0 0 8px #f39c12;
  }

  textarea { resize: vertical; min-height: 80px; }

  .gender-options {
    display: flex;
    gap: 15px;
  }

  .radio-label {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  input[type='radio'],
  input[type='checkbox'] {
    cursor: pointer;
    accent-color: #f39c12;
  }

  .btn-submit {
    background: #f39c12;
    border: none;
    padding: 14px 0;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
  }

  .btn-submit:hover {
    background: #e67e22;
    box-shadow: 0 4px 15px rgba(230,126,34,0.6);
  }

  .back-home-container {
    margin-top: 20px;
    text-align: center;
  }

  .btn-back-home {
    background: transparent;
    border: 2px solid #f39c12;
    color: #f39c12;
    padding: 10px 25px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  .btn-back-home:hover {
    background: #f39c12;
    color: #fff;
  }

  @media (max-width: 540px) {
    .register-container { padding: 30px 20px; }
  }
`}</style>

    </div>
  )
}
