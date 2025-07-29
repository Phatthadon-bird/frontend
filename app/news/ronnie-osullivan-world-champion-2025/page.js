'use client';

import { useRouter } from "next/navigation";

export default function RonnieNews() {
  const router = useRouter();

  return (
    <div
      className="container py-5"
      style={{
        maxWidth: 900,
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        padding: "2rem 3rem",
        boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        fontFamily: "'Sarabun', sans-serif",
        color: "#333",
      }}
    >
      <button
        className="btn btn-outline-warning mb-4"
        onClick={() => router.back()}
        style={{ fontWeight: "600" }}
      >
        ← กลับ
      </button>

      <h1
        className="mb-3 fw-bold"
        style={{
          borderBottom: "4px solid #ffc107",
          paddingBottom: "0.5rem",
          fontSize: "2.8rem",
          color: "#222",
          letterSpacing: "0.03em",
        }}
      >
        รอนนี่ โอซุลลิแวน คว้าแชมป์โลกสมัยที่ 7
      </h1>

      <p
        className="text-muted mb-4"
        style={{ fontSize: "1rem", fontWeight: "500", color: "#666" }}
      >
        20 กรกฎาคม 2025
      </p>

      <img
        src="/image/31.jpg"
        alt="รอนนี่ โอซุลลิแวน"
        className="img-fluid rounded mb-5"
        style={{
          objectFit: "cover",
          maxHeight: 450,
          width: "100%",
          boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
          borderRadius: "15px",
        }}
      />

      <div
        style={{
          whiteSpace: "pre-line",
          fontSize: "1.2rem",
          lineHeight: 1.8,
          color: "#444",
          letterSpacing: "0.015em",
        }}
      >
        รอนนี่ โอซุลลิแวน นักสนุ๊กเกอร์ชื่อดังจากอังกฤษได้สร้างประวัติศาสตร์ด้วยการคว้าแชมป์โลกสมัยที่ 7...
        รายละเอียดการแข่งขันและผลงานที่ยอดเยี่ยมของเขานั้นทำให้แฟนๆ ทั่วโลกต่างประทับใจ
      </div>
    </div>
  );
}
