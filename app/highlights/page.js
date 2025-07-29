'use client';

import Link from "next/link";
import Image from "next/image";  // <-- import Image จาก next/image
import { FaArrowLeft, FaVideo } from "react-icons/fa";

const highlights = [
  {
    id: 1,
    match: "Zhao Xintong vs Ronnie O'Sullivan",
    date: "2025-05-02",
    venue: "World Snooker Championship (Semi‑final)",
    summary: "Zhao ทำ session 2 ชนะรวด 8‑0 พร้อมเซนจูรี่หลายครั้ง ก่อนชนะ Ronnie O'Sullivan 17‑7",
    slug: "https://www.youtube.com/watch?v=QgNjRn2n1CQ",
    image: "/image/40.jpg",
  },
  {
    id: 2,
    match: "Mark Williams vs Judd Trump",
    date: "2025-05-03",
    venue: "World Snooker Championship (Semi‑final)",
    summary: "Williams พลิกแซง Trump จากสถานะตามหลัง 7‑3 จนชนะ 17‑14 เพื่อเข้าสู่รอบชิงฯ",
    slug: "https://www.youtube.com/watch?v=k7Hy9CBr7h4",
    image: "/image/38.jpg",
  },
  {
    id: 3,
    match: "Zhao Xintong vs Mark Williams",
    date: "2025-05-05",
    venue: "World Snooker Championship (Final)",
    summary: "Zhao กลายเป็นแชมป์โลกคนแรกของจีน ด้วยชัยชนะเหนือ Williams 18‑12",
    slug: "https://www.youtube.com/watch?v=9L3I5y6OhiU",
    image: "/image/41.jpg",
  },
];

export default function HighlightsPage() {
  return (
    <div className="container py-5" style={{ maxWidth: 1000, fontFamily: "'Sarabun', sans-serif" }}>
      <Link href="/" className="btn btn-outline-dark mb-4 d-inline-flex align-items-center gap-2">
        <FaArrowLeft />
        กลับหน้าหลัก
      </Link>

      <h1 className="text-center mb-5" style={{
        fontSize: "3rem", fontWeight: "800", color: "#2c3e50",
        borderBottom: "4px solid #3498db", maxWidth: 500, margin: "0 auto",
        paddingBottom: 12, textShadow: "0 0 5px #3498db55"
      }}>
        <FaVideo style={{ marginRight: 12 }} />
        ไฮไลต์การแข่งขันจริง
      </h1>

      <div className="row g-4">
        {highlights.map(({ id, match, date, venue, summary, slug, image }) => (
          <div key={id} className="col-12 col-md-6">
            <div className="highlight-card" style={{
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              backdropFilter: "blur(6px)",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
              animation: "fadeInUp 0.5s ease forwards",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              }}
            >
              <Image
                src={image}
                alt={match}
                width={400}     // กำหนดขนาดภาพ
                height={220}
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  width: "100%",  // ให้ responsive
                  height: "220px",
                }}
                quality={100}  // คุณภาพสูงสุด
                onMouseEnter={e => {
  e.currentTarget.style.transform = "scale(1.05)";
}}

                onMouseLeave={e => {
                 e.currentTarget.style.transform = "scale(1)";

                }}
              />

              <div style={{ padding: "1rem 1.5rem" }}>
                <h3 style={{ fontWeight: "700", fontSize: "1.4rem", color: "#1f3a93" }}>
                  <a
                    href={slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#1f3a93" }}
                  >
                    {match}
                  </a>
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#2c3e50", marginBottom: 4 }}>
                  {new Date(date).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })} | {venue}
                </p>
                <p style={{ fontSize: "1rem", color: "#555" }}>{summary}</p>
                <a href={slug} target="_blank" rel="noopener noreferrer">
                  <button
                    style={{
                      marginTop: 12,
                      backgroundColor: "#3498db",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "0.5rem 1.4rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      boxShadow: "0 4px 10px #3498db66",
                      transition: "background-color 0.3s, transform 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = "#2980b9";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "#3498db";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    ▶ ชมวิดีโอการแข่งขัน
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* เพิ่มความคมชัดของภาพ */
        .highlight-card :global(img) {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}
