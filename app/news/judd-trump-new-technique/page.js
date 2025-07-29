'use client';

import { useRouter } from "next/navigation";

export default function JuddTrumpNews() {
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
        จัดด์ ทรัมป์ เปิดตัวเทคนิคใหม่สุดล้ำในเกมสนุ๊กเกอร์
      </h1>

      <p
        className="text-muted mb-4"
        style={{ fontSize: "1rem", fontWeight: "500", color: "#666" }}
      >
        10 กรกฎาคม 2025
      </p>

      <img
        src="/image/33.jpeg"
        alt="จัดด์ ทรัมป์"
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
        จัดด์ ทรัมป์ เผยเทคนิคใหม่ในการเล่นสนุ๊กเกอร์ ที่ช่วยเพิ่มโอกาสชนะและทำคะแนนสูงขึ้นอย่างน่าทึ่ง เทคนิคนี้ได้รับการพัฒนาจากประสบการณ์และการฝึกซ้อมอย่างหนัก...
        ส่งผลให้เขายังคงเป็นนักแข่งที่น่าจับตามองในวงการสนุ๊กเกอร์โลก
      </div>
    </div>
  );
}
