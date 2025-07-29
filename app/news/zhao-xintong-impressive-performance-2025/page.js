'use client';

import { useRouter } from "next/navigation";

export default function ZhaoXintongNews() {
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
        โจว ซินถง โชว์ฟอร์มยอดเยี่ยมในทัวร์นาเมนต์ล่าสุด
      </h1>

      <p
        className="text-muted mb-4"
        style={{ fontSize: "1rem", fontWeight: "500", color: "#666" }}
      >
        25 กรกฎาคม 2025
      </p>

      <img
        src="/image/35.jpg"
        alt="โจว ซินถง"
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
        โจว ซินถง นักสนุ๊กเกอร์ดาวรุ่งจากจีน ทำผลงานได้อย่างน่าประทับใจในรายการแข่งขันล่าสุด ด้วยการควบคุมเกมและการเล่นที่เฉียบคม โชว์ฟอร์มการเล่นที่แข็งแกร่งต่อเนื่อง
        ส่งผลให้เขากลายเป็นหนึ่งในผู้เล่นที่น่าจับตามองในวงการสนุ๊กเกอร์โลกในเวลานี้
      </div>
    </div>
  );
}
