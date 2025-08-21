'use client'
import Link from 'next/link'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'  // เพิ่มตรงนี้

export default function Register() {
  const router = useRouter() // เพิ่มตรงนี้

  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [sex, setSex] = useState('')
  const [birthday, setBirthday] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'รหัสผ่านไม่ตรงกัน',
        text: 'กรุณากรอกรหัสผ่านให้ตรงกัน',
      })
      setIsSubmitting(false)
      return
    }

    if (!agreed) {
      Swal.fire({
        icon: 'warning',
        title: 'ยังไม่ยอมรับเงื่อนไข',
        text: 'กรุณายอมรับเงื่อนไขก่อนสมัครสมาชิก',
      })
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          fullname,
          username,
          password,
          address,
          sex,
          birthday,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ',
          text: 'คุณสามารถเข้าสู่ระบบได้แล้ว',
          confirmButtonText: 'ไปที่หน้า Login',
        }).then(() => {
          // Reset
          setFirstname('')
          setFullname('')
          setLastname('')
          setUsername('')
          setPassword('')
          setConfirmPassword('')
          setAddress('')
          setSex('')
          setBirthday('')
          setAgreed(false)

          // Navigate to /login1
          router.push('/login1')
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
        title: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
        text: 'กรุณาลองใหม่ภายหลัง',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-wrapper">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div className="card">
        <div className="card-header">
          <div className="icon-wrapper">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="m22 21-3-3m0 0a4 4 0 0 0 0-6 4 4 0 0 0 0 6z"></path>
            </svg>
          </div>
          <h3 className="card-title">Create Account</h3>
          <p className="card-subtitle">กรุณากรอกข้อมูลให้ครบถ้วน</p>
        </div>
        
        <div className="form-container">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstname">
                <span className="label-icon">👤</span>
                Firstname
              </label>
              <div className="input-wrapper">
                <select
                  id="firstname"
                  name="firstname"
                  className="form-control select-control"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>Select Firstname</option>
                  <option value="Mr.">นาย</option>
                  <option value="Ms.">นาง</option>
                  <option value="Mrs.">นางสาว</option>
                  <option value="Other">อื่นๆ</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fullname">
                <span className="label-icon">✏️</span>
                Full Name
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="form-control"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="lastname">
                <span className="label-icon">📝</span>
                Last Name
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="username">
                <span className="label-icon">🏷️</span>
                Username
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <span className="label-icon">🔐</span>
                Password
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                <span className="label-icon">🔒</span>
                Confirm Password
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">
                <span className="label-icon">🏠</span>
                Address
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sex">
                <span className="label-icon">⚥</span>
                Sex
              </label>
              <div className="input-wrapper">
                <select
                  id="sex"
                  name="sex"
                  className="form-control select-control"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>Select sex</option>
                  <option value="Male">ชาย</option>
                  <option value="Female">หญิง</option>
                  <option value="Other">อื่นๆ</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="birthday">
                <span className="label-icon">🎂</span>
                Birthday
              </label>
              <div className="input-wrapper">
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="form-control"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-text">ฉันยอมรับข้อกำหนดและเงื่อนไข</span>
            </label>
          </div>

          <div className="button-container">
            <button 
              type="button"
              onClick={handleSubmit}
              className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="button-spinner"></span>
                  กำลังสมัครสมาชิก...
                </>
              ) : (
                <>
                  <span className="button-icon">🚀</span>
                  สมัครสมาชิก!
                </>
              )}
            </button>
          </div>

      <div className="login-link-container">
  <p className="login-text">
    คุณมีบัญชีแล้วใช่ไหม?{" "}
    <Link href="/login1" className="login-link">
      กลับไปที่หน้า Login
    </Link>
  </p>
</div>
        </div>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          top: 70%;
          left: 80%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 60px;
          height: 60px;
          top: 20%;
          left: 85%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 100px;
          height: 100px;
          top: 80%;
          left: 15%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          padding: 0;
          max-width: 700px;
          width: 100%;
          box-shadow: 
            0 25px 45px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          position: relative;
          z-index: 2;
          overflow: hidden;
          animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 32px;
          text-align: center;
          position: relative;
        }

        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2), transparent 50%);
          pointer-events: none;
        }

        .icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          margin-bottom: 16px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        .card-title {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 8px 0;
          letter-spacing: 0.5px;
        }

        .card-subtitle {
          font-size: 16px;
          opacity: 0.9;
          margin: 0;
          font-weight: 300;
        }

        .form-container {
          padding: 32px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        label {
          display: flex;
          align-items: center;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 16px;
          color: #4a5568;
          gap: 8px;
        }

        .label-icon {
          font-size: 18px;
        }

        .input-wrapper {
          position: relative;
        }

        .form-control {
          width: 100%;
          padding: 16px 20px;
          font-size: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
          font-weight: 500;
          background: #fff;
          color: #2d3748;
        }

        .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
        }

        .form-control::placeholder {
          color: #a0aec0;
          font-weight: 400;
        }

        .select-control {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 16px center;
          background-repeat: no-repeat;
          background-size: 16px;
          padding-right: 48px;
        }

        .checkbox-group {
          margin-bottom: 32px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          font-size: 16px;
          color: #4a5568;
          font-weight: 500;
        }

        .checkbox-input {
          display: none;
        }

        .checkbox-custom {
          width: 24px;
          height: 24px;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          position: relative;
          transition: all 0.3s ease;
          background: #fff;
        }

        .checkbox-input:checked + .checkbox-custom {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: #667eea;
        }

        .checkbox-input:checked + .checkbox-custom::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 14px;
          font-weight: bold;
        }

        .checkbox-text {
          flex: 1;
        }

        .button-container {
          text-align: center;
          margin-bottom: 24px;
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 48px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 
            0 10px 25px rgba(102, 126, 234, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          min-width: 200px;
          min-height: 56px;
        }

        .btn-submit::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .btn-submit:hover::before {
          left: 100%;
        }

        .btn-submit:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 20px 35px rgba(102, 126, 234, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .btn-submit:active {
          transform: translateY(-1px);
        }

        .btn-submit.submitting {
          pointer-events: none;
          opacity: 0.8;
        }

        .button-icon {
          font-size: 20px;
        }

        .button-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .login-link-container {
          text-align: center;
        }

        .login-text {
          color: #718096;
          font-size: 16px;
          margin: 0;
        }

        .login-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .login-link:hover {
          color: #764ba2;
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .page-wrapper {
            padding: 16px;
          }

          .card {
            max-width: 100%;
          }

          .card-header {
            padding: 24px;
          }

          .card-title {
            font-size: 28px;
          }

          .form-container {
            padding: 24px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .form-group.full-width {
            grid-column: 1;
          }

          .btn-submit {
            padding: 16px 32px;
            font-size: 16px;
            min-width: 180px;
          }

          .shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .card-header {
            padding: 20px;
          }

          .card-title {
            font-size: 24px;
          }

          .form-container {
            padding: 20px;
          }

          .form-control {
            padding: 14px 16px;
            font-size: 15px;
          }

          .btn-submit {
            padding: 14px 28px;
            font-size: 15px;
            min-width: 160px;
          }
        }
      `}</style>
    </div>
  )
}