'use client';

import Link from "next/link";

const podium = [
  { rank: 2, name: "มาร์ค เซลบี้", country: "อังกฤษ", points: 32000, image: "/image/45.jpg", slug: "mark-selby-confirm-competition-2025" },
  { rank: 1, name: "รอนนี่ โอซุลลิแวน", country: "อังกฤษ", points: 35000, image: "/image/42.jpg", slug: "ronnie-osullivan-world-champion-2025" },
  { rank: 3, name: "จัดด์ ทรัมป์", country: "อังกฤษ", points: 29000, image: "/image/44.jpeg", slug: "" },
  { rank: 4, name: "โจว ซินถง", country: "จีน", points: 27000, image: "/image/43.jpg", slug: "" },
  { rank: 5, name: "นีล โรเบิร์ตสัน", country: "ออสเตรเลีย", points: 25000, image: "/image/46.jpg", slug: null },
];

export default function PodiumWithImages() {
  const orderedPodium = [
    podium.find((p) => p.rank === 5),
    podium.find((p) => p.rank === 2),
    podium.find((p) => p.rank === 1),
    podium.find((p) => p.rank === 3),
    podium.find((p) => p.rank === 4),
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "3rem 1rem",
        backgroundColor: "#121212",
        color: "#fff",
        fontFamily: "'Sarabun', sans-serif",
        textAlign: "center",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "2.5rem",
          padding: "0.6rem 1.5rem",
          backgroundColor: "#1f1f1f",
          border: "2px solid #d4af37",
          color: "#d4af37",
          borderRadius: 12,
          textDecoration: "none",
          fontWeight: "700",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#d4af37"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#1f1f1f"}
      >
        ← กลับหน้าหลัก
      </Link>

      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "3rem",
          color: "#d4af37",
          fontWeight: "900",
          userSelect: "none",
          textShadow: "0 0 6px #d4af37",
        }}
      >
        🏆 5 อันดับนักสนุ๊กเกอร์โลก
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "2rem",
          maxWidth: 1200,
          margin: "0 auto",
          flexWrap: "nowrap",
          overflowX: "auto",
          paddingBottom: 24,
          paddingLeft: 8,
          paddingRight: 8,
          position: "relative", // เพิ่มตรงนี้
        }}
      >
        {orderedPodium.map((player) => {
          if (!player) return null;
          const { rank, name, country, points, image, slug } = player;

          const sizes = { 1: 300, 2: 250, 3: 220, 4: 180, 5: 180 };
          const width = sizes[rank] || 180;
          const height = width * 1.3;

          return (
            <div
              key={rank}
              style={{
                width,
                height,
                backgroundColor: "#1f1f1f",
                borderRadius: 20,
                border: "3px solid transparent",
                boxShadow: "0 6px 20px rgba(0,0,0,0.7)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "1.2rem",
                paddingTop: rank === 1 ? 120 : "1.2rem",
                transition: "transform 0.3s ease, border-color 0.3s ease",
                position: "relative",
                cursor: slug ? "pointer" : "default",
                flexShrink: 0,
                userSelect: "none",
                zIndex: rank === 1 ? 10 : 1, // เพิ่ม zIndex ให้รอนนี่เด่น
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                e.currentTarget.style.borderColor = "#d4af37";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(212,175,55,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.7)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: rank === 1 ? -55 : -45,
                  width: rank === 1 ? 130 : 100,
                  height: rank === 1 ? 130 : 100,
                  borderRadius: "50%",
                  border: "4px solid #d4af37",
                  overflow: "hidden",
                  boxShadow: "0 0 15px #d4af37",
                  backgroundColor: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    filter: "drop-shadow(0 0 5px #d4af37)",
                  }}
                />
              </div>

              <div style={{ marginTop: rank === 1 ? 55 : 70 }} />
              <div
                style={{
                  fontSize: rank <= 3 ? "2.3rem" : "1.7rem",
                  fontWeight: "900",
                  color: "#d4af37",
                  textShadow: "0 0 8px #d4af37",
                }}
              >
                #{rank}
              </div>
              <div
                style={{
                  fontSize: rank <= 3 ? "1.3rem" : "1.1rem",
                  fontWeight: "700",
                  marginTop: 6,
                  color: "#fff",
                }}
              >
                {slug ? (
                  <Link
                    href={`/news/${slug}`}
                    style={{
                      color: "#d4af37",
                      textDecoration: "underline",
                      userSelect: "text",
                    }}
                  >
                    {name}
                  </Link>
                ) : (
                  name
                )}
              </div>
              <div
                style={{
                  fontSize: rank <= 3 ? "1.1rem" : "1rem",
                  marginTop: 4,
                  fontWeight: "500",
                  color: "#cfcfcf",
                }}
              >
                {country}
              </div>
              <div
                style={{
                  fontSize: rank <= 3 ? "1.2rem" : "1rem",
                  fontWeight: "800",
                  marginTop: 10,
                  color: "#d4af37",
                  userSelect: "text",
                }}
              >
                {points.toLocaleString()} คะแนน
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
