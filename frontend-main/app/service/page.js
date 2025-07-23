export default function Service() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
    }}>
      <h1>บริการของเรา</h1>
      <p>เรามีบริการที่หลากหลายเพื่อช่วยให้คุณบรรลุเป้าหมายของคุณ</p>
      <ul>
        <li>บริการ A</li>
        <li>บริการ B</li>
        <li>บริการ C</li>
      </ul>
    </div>
  );
}
