'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // <-- เพิ่มตรงนี้
import Swal from 'sweetalert2';

export default function EditUserPage({ params }) {
  const { id } = params;
  const router = useRouter(); // <-- เพิ่มตรงนี้

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
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();

        setFormData({
          firstname: data.firstname || 'นาย',
          fullname: data.fullname || '',
          lastname: data.lastname || '',
          username: data.username || '',
          password: data.password || '',
          address: data.address || '',
          sex: data.sex || '',
          birthday: data.birthday ? data.birthday.slice(0, 10) : '',
        });
      } catch (error) {
        console.error('Error fetching user:', error);
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'ไม่สามารถโหลดข้อมูลผู้ใช้ได้',
        });
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

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...formData }),
      });

      const result = await res.json();

      if (res.ok) {
        await Swal.fire({
          icon: 'success',
          title: 'อัปเดตข้อมูลเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/admin/users');  // <-- เด้งไปหน้า /admin/users หลังโชว์ Swal
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: result.message || 'ไม่สามารถอัปเดตข้อมูลได้',
        });
      }
    } catch (error) {
      console.error('Error updating user:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาดในการเชื่อมต่อ',
        text: 'กรุณาลองใหม่อีกครั้ง',
      });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="card">
        <h3 className="card-title">แก้ไขข้อมูลสมาชิก</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="firstname">คำนำหน้า (Firstname)</label>
            <select
              id="firstname"
              name="firstname"
              className="form-control"
              value={formData.firstname}
              onChange={handleChange}
              required
            >
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="fullname">ชื่อจริง (Fullname)</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="form-control"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="กรอกชื่อจริง"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="lastname">นามสกุล (Lastname)</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="form-control"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="กรอกนามสกุล"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="username">ชื่อเล่น (Username)</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              placeholder="กรอกชื่อเล่น"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">รหัสผ่าน (Password)</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="กรอกรหัสผ่าน"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="address">ที่อยู่ (Address)</label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              placeholder="กรอกที่อยู่"
            />
          </div>

          <div className="form-row">
            <label htmlFor="sex">เพศ (Sex)</label>
            <select
              id="sex"
              name="sex"
              className="form-control"
              value={formData.sex}
              onChange={handleChange}
            >
              <option value="">-- เลือก --</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="อื่นๆ">อื่นๆ</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="birthday">วันเกิด (Birthday)</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="form-control"
              value={formData.birthday}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-submit">
            บันทึกข้อมูล
          </button>
        </form>
      </div>

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .card {
          background-color: #fff;
          border-radius: 15px;
          padding: 30px 40px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          color: #333;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          transition: box-shadow 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 25px 40px rgba(0, 0, 0, 0.3);
        }

        .card-title {
          text-align: center;
          margin-bottom: 25px;
          font-weight: 700;
          font-size: 28px;
          color: #2575fc;
          letter-spacing: 1.5px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: flex;
          flex-direction: column;
        }

        label {
          font-weight: 600;
          margin-bottom: 6px;
          font-size: 15px;
          color: #444;
        }

        input[type='text'],
        input[type='password'],
        input[type='date'],
        select {
          padding: 12px 14px;
          font-size: 16px;
          border: 2px solid #ccc;
          border-radius: 10px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          outline: none;
          font-weight: 500;
        }

        input[type='text']:focus,
        input[type='password']:focus,
        input[type='date']:focus,
        select:focus {
          border-color: #2575fc;
          box-shadow: 0 0 8px #2575fc;
        }

        .btn-submit {
          margin-top: 15px;
          padding: 14px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          background: linear-gradient(90deg, #2575fc, #6a11cb);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 8px 15px rgba(37, 117, 252, 0.5);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-submit:hover {
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          box-shadow: 0 10px 20px rgba(106, 17, 203, 0.7);
        }

        @media (max-width: 500px) {
          .card {
            padding: 20px 25px;
          }

          .card-title {
            font-size: 24px;
          }

          input[type='text'],
          input[type='password'],
          input[type='date'],
          select {
            font-size: 14px;
            padding: 10px 12px;
          }

          .btn-submit {
            font-size: 16px;
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
}
