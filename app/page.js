import Link from 'next/link'; // นำเข้า Link จาก Next.js

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    }}>
      {/* ส่วนเนื้อหาหลัก */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px',
      }}>
        <h1>Mr.Phatthadon Kachi</h1>
      </div>
    </div>
  );
}
