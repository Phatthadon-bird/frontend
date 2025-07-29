'use client';

import Link from "next/link";

const rankings = [
  { rank: 1, name: "รอนนี่ โอซุลลิแวน", country: "อังกฤษ", points: 35000, slug: "ronnie-osullivan-world-champion-2025" },
  { rank: 2, name: "มาร์ค เซลบี้", country: "อังกฤษ", points: 32000, slug: "mark-selby-confirm-competition-2025" },
  { rank: 3, name: "จัดด์ ทรัมป์", country: "อังกฤษ", points: 29000, slug: "judd-trump-new-technique" },
  { rank: 4, name: "โจว ซินถง", country: "จีน", points: 27000, slug: "zhao-xintong-impressive-performance-2025" },
  { rank: 5, name: "นีล โรเบิร์ตสัน", country: "ออสเตรเลีย", points: 25000, slug: null },
];

export default function SnookerRankings() {
  return (
    <div
      className="container py-5"
      style={{
        maxWidth: 920,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: "3rem 3.5rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        fontFamily: "'Sarabun', sans-serif",
        color: "#333",
      }}
    >
      {/* ปุ่มกลับหน้าหลัก */}
      <div style={{ marginBottom: 24 }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.5rem 1.25rem",
            borderRadius: 6,
            border: "2px solid #f59e0b",
            color: "#f59e0b",
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#f59e0b";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#f59e0b";
          }}
        >
          ← กลับหน้าหลัก
        </Link>
      </div>

      <h1
        className="text-center mb-5"
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#f59e0b", // สีเหลืองทองสดใส
          letterSpacing: "0.05em",
          borderBottom: "4px solid #f59e0b",
          paddingBottom: "0.75rem",
          maxWidth: 400,
          margin: "0 auto",
          fontFamily: "'Sarabun', sans-serif",
          textShadow: "0 0 8px #f59e0b88",
        }}
      >
        อันดับโลกนักสนุ๊กเกอร์
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: "0 12px",
          fontSize: "1.15rem",
          color: "#444",
          fontWeight: "500",
        }}
      >
        <thead>
          <tr style={{ color: "#d97706", fontWeight: "700", fontSize: "1.1rem" }}>
            <th style={{ width: "10%", textAlign: "center" }}>อันดับ</th>
            <th style={{ width: "45%", textAlign: "left", paddingLeft: 20 }}>ชื่อ</th>
            <th style={{ width: "25%", textAlign: "left", paddingLeft: 20 }}>ประเทศ</th>
            <th style={{ width: "20%", textAlign: "right", paddingRight: 20 }}>คะแนน</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map(({ rank, name, country, points, slug }) => (
            <tr
              key={rank}
              tabIndex={slug ? 0 : -1}
              style={{
                backgroundColor: "#fef3c7", // สีพื้นเหลืองอ่อน
                borderRadius: 15,
                transition: "background-color 0.25s ease, box-shadow 0.25s ease",
                cursor: slug ? "pointer" : "default",
                boxShadow: "0 2px 8px rgba(245, 158, 11, 0.15)",
                outline: "none",
              }}
              onMouseEnter={e => {
                if (slug) e.currentTarget.style.backgroundColor = "#fde68a";
              }}
              onMouseLeave={e => {
                if (slug) e.currentTarget.style.backgroundColor = "#fef3c7";
              }}
              onFocus={e => {
                if (slug) e.currentTarget.style.backgroundColor = "#fde68a";
                if (slug) e.currentTarget.style.boxShadow = "0 4px 12px rgba(245, 158, 11, 0.6)";
              }}
              onBlur={e => {
                if (slug) e.currentTarget.style.backgroundColor = "#fef3c7";
                if (slug) e.currentTarget.style.boxShadow = "0 2px 8px rgba(245, 158, 11, 0.15)";
              }}
            >
              <td
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "1.15rem",
                  padding: "18px 0",
                  color: "#b45309",
                }}
              >
                {rank}
              </td>
              <td style={{ paddingLeft: 20, fontWeight: "600", fontSize: "1.15rem", color: "#92400e" }}>
                {slug ? (
                  <Link
                    href={`/news/${slug}`}
                    style={{
                      color: "#92400e",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#78350f")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#92400e")}
                  >
                    {name}
                  </Link>
                ) : (
                  name
                )}
              </td>
              <td
                style={{
                  paddingLeft: 20,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  color: "#78350f",
                  position: "relative",
                  paddingTop: 12,
                  paddingBottom: 12,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 6,
                    height: 30,
                    backgroundColor: "#f59e0b",
                    borderRadius: 3,
                    transition: "height 0.3s ease",
                    boxShadow: "0 0 6px #f59e0b66",
                  }}
                />
                {country}
              </td>
              <td
                style={{
                  textAlign: "right",
                  fontWeight: "700",
                  fontSize: "1.15rem",
                  paddingRight: 20,
                  color: "#b45309",
                  textShadow: "0 0 4px #f59e0b44",
                }}
              >
                {points.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
                