'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';  // <-- import sweetalert2

const tables = [
  { id: 'table1', label: 'โต๊ะ 1', img: '/image/table1.jpg' },
  { id: 'table2', label: 'โต๊ะ 2', img: '/image/table2.jpg' },
  { id: 'table3', label: 'โต๊ะ 3', img: '/image/table3.jpg' },
];

export default function TableRentalBooking() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    table: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectTable = (tableId, label) => {
    setForm({ ...form, table: label });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.table) {
      alert('กรุณาเลือกโต๊ะก่อนจอง');
      return;
    }

    await Swal.fire({
  icon: 'success',
  title: 'จองโต๊ะสำเร็จ!',
  text: `โต๊ะที่จอง: ${form.table}`,
  confirmButtonText: 'กลับไปยังหน้าหลัก',
}).then(() => {
  router.push('/');  // เปลี่ยน '/' เป็น path หน้าหลักของคุณ
});

    console.log('Booking data:', form);

    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        router.push('/table-rental'); // เปลี่ยน path ตามจริงของคุณ
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>จองเช่าโต๊ะสนุ๊กเกอร์</h2>

      <div style={styles.tableMap}>
        {tables.map((t) => (
          <div
            key={t.id}
            onClick={() => selectTable(t.id, t.label)}
            style={{
              ...styles.table,
              border: form.table === t.label ? '3px solid #27ae60' : '2px solid #999',
              boxShadow: form.table === t.label ? '0 0 10px #27ae60' : 'none',
              cursor: 'pointer',
            }}
            title={t.label}
          >
            <img
              src={t.img}
              alt={t.label}
              style={styles.tableImage}
            />
            <div style={styles.tableLabel}>{t.label}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>

        <label style={styles.label}>
          ชื่อ-นามสกุล:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="กรอกชื่อของคุณ"
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          เบอร์โทรศัพท์:
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="0812345678"
            pattern="[0-9]{9,10}"
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          วันที่ต้องการเช่า:
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          เวลา:
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">-- เลือกเวลา --</option>
            <option value="10:00-12:00">10:00 - 12:00</option>
            <option value="12:00-14:00">12:00 - 14:00</option>
            <option value="14:00-16:00">14:00 - 16:00</option>
            <option value="16:00-18:00">16:00 - 18:00</option>
            <option value="18:00-20:00">18:00 - 20:00</option>
          </select>
        </label>

        <button type="submit" style={styles.button}>จองโต๊ะ</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '480px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
    backgroundColor: '#f9f9f9',
    fontFamily: "'Sarabun', sans-serif",
    color: '#333',
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '24px',
    fontWeight: '700',
    color: '#2c3e50',
  },
  tableMap: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px',
  },
  table: {
    width: '130px',
    textAlign: 'center',
    borderRadius: '12px',
    border: '2px solid #999',
    padding: '10px',
    userSelect: 'none',
    transition: 'all 0.3s ease',
  },
  tableImage: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  tableLabel: {
    marginTop: '8px',
    fontWeight: '700',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '18px',
    fontWeight: '600',
    fontSize: '15px',
  },
  input: {
    marginTop: '6px',
    padding: '10px 12px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '1.5px solid #ccc',
    outlineColor: '#3498db',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 0',
    backgroundColor: '#27ae60',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '700',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  message: {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '15px',
  }
};
