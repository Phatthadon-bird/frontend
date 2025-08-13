'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectTable = (tableId, label) => {
    setForm({ ...form, table: label });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.table) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณาเลือกโต๊ะ',
        text: 'กรุณาเลือกโต๊ะก่อนทำการจอง',
        confirmButtonText: 'รับทราบ',
        buttonsStyling: false,
        customClass: {
          confirmButton: 'swal-custom-btn'
        }
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    await Swal.fire({
      icon: 'success',
      title: 'จองโต๊ะสำเร็จ! 🎉',
      html: `
        <div style="text-align: left; margin: 20px 0;">
          <p><strong>รายละเอียดการจอง:</strong></p>
          <p>👤 <strong>ชื่อ:</strong> ${form.name}</p>
          <p>📞 <strong>เบอร์โทร:</strong> ${form.phone}</p>
          <p>🎱 <strong>โต๊ะ:</strong> ${form.table}</p>
          <p>📅 <strong>วันที่:</strong> ${form.date}</p>
          <p>🕐 <strong>เวลา:</strong> ${form.time}</p>
        </div>
      `,
      confirmButtonText: 'กลับไปยังหน้าหลัก',
      buttonsStyling: false,
      customClass: {
        popup: 'swal-custom-popup',
        confirmButton: 'swal-custom-btn'
      }
    }).then(() => {
      router.push('/table-rental');
    });

    console.log('Booking data:', form);
    setIsLoading(false);
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        router.push('/table-rental');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&display=swap');
        
        .swal-custom-popup {
          border-radius: 20px !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
        }
        
        .swal-custom-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          border: none !important;
          border-radius: 25px !important;
          padding: 12px 30px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
        }
        
        .swal-custom-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4) !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
      `}</style>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.titleIcon}>🎱</div>
          <h2 style={styles.title}>จองเช่าโต๊ะสนุ๊กเกอร์</h2>
          <p style={styles.subtitle}>เลือกโต๊ะและกรอกข้อมูลเพื่อจองเลย</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <span style={styles.sectionIcon}>🎯</span>
            เลือกโต๊ะ
          </h3>
          <div style={styles.tableMap}>
            {tables.map((t, index) => (
              <div
                key={t.id}
                onClick={() => selectTable(t.id, t.label)}
                style={{
                  ...styles.table,
                  ...(form.table === t.label ? styles.tableSelected : {}),
                  animationDelay: `${index * 0.1}s`
                }}
                title={t.label}
              >
                <div style={styles.tableImageContainer}>
                  <img
                    src={t.img}
                    alt={t.label}
                    style={styles.tableImage}
                  />
                  {form.table === t.label && (
                    <div style={styles.selectedOverlay}>
                      <span style={styles.checkIcon}>✓</span>
                    </div>
                  )}
                </div>
                <div style={styles.tableLabel}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>
            <span style={styles.sectionIcon}>📝</span>
            ข้อมูลการจอง
          </h3>
          
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}>👤</span>
                ชื่อ-นามสกุล
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="กรอกชื่อของคุณ"
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}>📞</span>
                เบอร์โทรศัพท์
              </label>
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
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}>📅</span>
                วันที่ต้องการเช่า
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <span style={styles.labelIcon}>🕐</span>
                เวลา
              </label>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                style={styles.input}
              >
                <option value="">-- เลือกเวลา --</option>
                <option value="10:00-12:00">10:00 - 12:00 (2 ชั่วโมง)</option>
                <option value="12:00-14:00">12:00 - 14:00 (2 ชั่วโมง)</option>
                <option value="14:00-16:00">14:00 - 16:00 (2 ชั่วโมง)</option>
                <option value="16:00-18:00">16:00 - 18:00 (2 ชั่วโมง)</option>
                <option value="18:00-20:00">18:00 - 20:00 (2 ชั่วโมง)</option>
              </select>
            </div>

            <button 
              type="submit" 
              style={{
                ...styles.button,
                ...(isLoading ? styles.buttonLoading : {})
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <span style={styles.buttonLoadingContent}>
                  <span style={styles.spinner}></span>
                  กำลังจอง...
                </span>
              ) : (
                <>🎱 จองโต๊ะเลย</>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '0 20px',
    fontFamily: "'Sarabun', sans-serif",
    color: '#2c3e50',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    animation: 'fadeInUp 0.8s ease',
  },
  titleIcon: {
    fontSize: '48px',
    marginBottom: '15px',
    animation: 'float 3s ease-in-out infinite',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#7f8c8d',
    margin: 0,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '25px',
    marginBottom: '25px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    animation: 'fadeInUp 0.8s ease',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  sectionIcon: {
    fontSize: '22px',
  },
  tableMap: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    flexWrap: 'wrap',
  },
  table: {
    flex: '1',
    minWidth: '140px',
    textAlign: 'center',
    borderRadius: '16px',
    border: '3px solid #e8f4fd',
    padding: '15px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'hidden',
    animation: 'fadeInUp 0.6s ease both',
  },
  tableSelected: {
    border: '3px solid #667eea',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
    transform: 'translateY(-5px) scale(1.02)',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
  },
  tableImageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    marginBottom: '12px',
  },
  tableImage: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '12px',
    transition: 'transform 0.3s ease',
  },
  selectedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(102, 126, 234, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
  },
  checkIcon: {
    color: 'white',
    fontSize: '32px',
    fontWeight: 'bold',
    animation: 'pulse 0.6s ease',
  },
  tableLabel: {
    fontWeight: '700',
    fontSize: '16px',
    color: '#2c3e50',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontWeight: '600',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#34495e',
  },
  labelIcon: {
    fontSize: '18px',
  },
  input: {
    padding: '15px 18px',
    fontSize: '16px',
    borderRadius: '12px',
    border: '2px solid #e8f4fd',
    backgroundColor: '#f8fafc',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    outline: 'none',
  },
  button: {
    padding: '18px 0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontSize: '18px',
    fontWeight: '700',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  buttonLoading: {
    background: 'linear-gradient(135deg, #bdc3c7 0%, #95a5a6 100%)',
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  buttonLoadingContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  spinner: {
    width: '18px',
    height: '18px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

// Add CSS keyframes for spinner
const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject spinner keyframes
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}