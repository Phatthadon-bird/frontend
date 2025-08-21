'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs'; // เพิ่มตรงนี้

export default function EditUserPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    password: '',
    address: '',
    sex: '',
    birthday: '',
  });

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      try {
        const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`);
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();

        setFormData({
          firstname: data.firstname || 'นาย',
          fullname: data.fullname || '',
          lastname: data.lastname || '',
          username: data.username || '',
          password: '',
          address: data.address || '',
          sex: data.sex || '',
          birthday: data.birthday ? data.birthday.slice(0, 10) : '',
        });
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const updateData = { ...formData, id };

      // ถ้ามีการกรอกรหัสผ่านใหม่ ให้ hash ก่อน
      if (formData.password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(formData.password, salt);
      } else {
        delete updateData.password; // ไม่อัปเดตรหัสถ้าไม่กรอก
      }

      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });

      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สำเร็จ!',
          text: 'อัปเดตข้อมูลเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/admin/users');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: result.message || 'ไม่สามารถอัปเดตข้อมูลได้',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'กรุณาลองใหม่อีกครั้ง',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading)
    return (
      <div className="loading-wrapper">
        <p>กำลังโหลดข้อมูล...</p>
      </div>
    );

  return (
    <div className="page-wrapper">
      <div className="card">
        <h2 className="card-title">แก้ไขข้อมูลสมาชิก</h2>
        <p className="card-subtitle">กรุณากรอกข้อมูลให้ครบถ้วน</p>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label>คำนำหน้า</label>
            <select name="firstname" value={formData.firstname} onChange={handleChange} required>
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>
          <div className="form-group">
            <label>ชื่อจริง</label>
            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>นามสกุล</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>รหัสผ่าน</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="กรอกรหัสผ่านใหม่" />
          </div>
          <div className="form-group">
            <label>ที่อยู่</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>เพศ</label>
            <select name="sex" value={formData.sex} onChange={handleChange}>
              <option value="">-- เลือก --</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="อื่นๆ">อื่นๆ</option>
            </select>
          </div>
          <div className="form-group">
            <label>วันเกิด</label>
            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-submit">
            {isSubmitting ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
          </button>
        </form>
      </div>
      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          width: 100%;
          max-width: 700px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .card-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .card-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 24px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        label {
          font-weight: 600;
          margin-bottom: 6px;
        }
        input, select {
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 16px;
        }
        .btn-submit {
          grid-column: 1 / -1;
          margin-top: 20px;
          padding: 14px;
          font-size: 18px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
        @media (max-width: 768px) {
          .form-grid 
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
