import Image from "next/image";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start', // อยู่ด้านบน
      height: '100vh',
      paddingTop: '20px', // ระยะห่างจากขอบบน
      fontSize: '24px'
    }}>
      Mr.Phatthadon kachi
    </div>
  );
}
