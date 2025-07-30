'use client';

import Link from "next/link";

const podium = [
  {
    rank: 2,
    name: "มาร์ค เซลบี้",
    country: "อังกฤษ",
    points: 32000,
    image: "/image/45.jpg",
    slug: "mark-selby-confirm-competition-2025",
  },
  {
    rank: 1,
    name: "รอนนี่ โอซุลลิแวน",
    country: "อังกฤษ",
    points: 35000,
    image: "/image/42.jpg",
    slug: "ronnie-osullivan-world-champion-2025",
  },
  {
    rank: 3,
    name: "จัดด์ ทรัมป์",
    country: "อังกฤษ",
    points: 29000,
    image: "/image/44.jpeg",
    slug: "",
  },
  {
    rank: 4,
    name: "โจว ซินถง",
    country: "จีน",
    points: 27000,
    image: "/image/43.jpg",
    slug: "",
  },
  {
    rank: 5,
    name: "นีล โรเบิร์ตสัน",
    country: "ออสเตรเลีย",
    points: 25000,
    image: "/image/46.jpg",
    slug: null,
  },
];

export default function PodiumWithImages() {
  // เรียงลำดับตามที่ต้องการ: 5, 2, 1, 3, 4
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
        background: "#0f172a",
        color: "#fff",
        fontFamily: "'Sarabun', sans-serif",
        textAlign: "center",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "2rem",
          padding: "0.5rem 1.25rem",
          backgroundColor: "#f59e0b22",
          border: "2px solid #f59e0b",
          color: "#f59e0b",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← กลับหน้าหลัก
      </Link>

      <h1
        style={{
          fontSize: "2.75rem",
          marginBottom: "3rem",
          background: "linear-gradient(to right, #facc15, #f97316)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        🏆 5 อันดับนักสนุ๊กเกอร์โลก
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "1.5rem",
          maxWidth: 1200,
          margin: "0 auto",
          flexWrap: "nowrap",
          overflowX: "auto",
          paddingBottom: 16,
        }}
      >
        {orderedPodium.map((player) => {
          if (!player) return null;
          const { rank, name, country, points, image, slug } = player;

          let height = 200;
          let bgColor = "#fcd34d";
          let textColor = "#1e293b";

          switch (rank) {
            case 1:
              height = 280;
              bgColor = "#facc15";
              textColor = "#78350f";
              break;
            case 2:
              height = 220;
              bgColor = "#cbd5e1";
              textColor = "#1e293b";
              break;
            case 3:
              height = 200;
              bgColor = "#fcd34d";
              textColor = "#1e293b";
              break;
            case 4:
            case 5:
              height = 160;
              bgColor = "#475569";
              textColor = "#fbbf24";
              break;
          }

          return (
            <div
              key={rank}
              style={{
                width: rank <= 3 ? 220 : 180,
                height: height,
                backgroundColor: bgColor,
                color: textColor,
                borderRadius: 12,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "1rem",
                paddingTop: rank === 1 ? 80 : "1rem", // <-- เพิ่ม paddingTop อันดับ 1
                transition: "transform 0.3s ease",
                position: "relative",
                cursor: slug ? "pointer" : "default",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={image}
                alt={name}
                style={{
                  width: rank <= 3 ? 100 : 80,
                  height: rank <= 3 ? 100 : 80,
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: rank <= 3 ? "4px solid white" : "3px solid #fbbf24",
                  position: "absolute",
                  top: rank <= 3 ? -40 : -40, // <-- ลด top จาก -50 เป็น -40
                  boxShadow: rank <= 3
                    ? "0 0 12px rgba(255,255,255,0.3)"
                    : "0 0 8px rgba(251,191,36,0.7)",
                  backgroundColor: "#fff",
                }}
              />
              {/* ปรับ marginTop เล็กน้อย */}
              <div style={{ marginTop: rank === 1 ? 20 : rank <= 3 ? 60 : 50 }} />
              <div style={{ fontSize: rank <= 3 ? "2rem" : "1.5rem", fontWeight: "800" }}>
                #{rank}
              </div>
              <div
                style={{ fontSize: rank <= 3 ? "1.1rem" : "1rem", fontWeight: "600", marginTop: 4 }}
              >
                {slug ? (
                  <Link
                    href={`/news/${slug}`}
                    style={{
                      color: textColor,
                      textDecoration: "underline",
                    }}
                  >
                    {name}
                  </Link>
                ) : (
                  name
                )}
              </div>
              <div style={{ fontSize: rank <= 3 ? "0.95rem" : "0.85rem", marginTop: 4 }}>
                {country}
              </div>
              <div
                style={{ fontSize: rank <= 3 ? "1rem" : "0.9rem", fontWeight: "700", marginTop: 8 }}
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
