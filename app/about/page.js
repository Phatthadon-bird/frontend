import Image from "next/image";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    }}>
      {/* แถบเมนูด้านบน */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around', // จัดเรียงให้เท่ากัน
        alignItems: 'center',
        backgroundColor: '#333', // สีพื้นหลังของแถบเมนู
        color: '#fff', // สีตัวอักษร
        padding: '10px 0', // ระยะห่างในแนวตั้ง
        fontSize: '18px', // ขนาดตัวอักษร
        fontWeight: 'bold', // ทำให้ตัวอักษรหนา
      }}>
        <div style={{ cursor: 'pointer' }}>หน้าแรก</div>
        <div style={{ cursor: 'pointer' }}>เกี่ยวกับฉัน</div>
        <div style={{ cursor: 'pointer' }}>ติดต่อ</div>
        <div style={{ cursor: 'pointer' }}>บริการของเรา</div>
      </div>

      {/* ส่วนเนื้อหาหลัก */}
      <div style={{
        display: 'flex',
        flexDirection: 'column', // ให้เนื้อหาภายในจัดเรียงในแนวตั้ง
        justifyContent: 'center',
        alignItems: 'center', // จัดให้อยู่ตรงกลาง
        height: 'calc(100vh - 60px)', // พื้นที่ของเนื้อหาหลักลดลงจากพื้นที่แถบเมนู
        fontSize: '24px',
      }}>
        <h1>Phatthadonkachi</h1>
      </div>
    </div>
  );
}
