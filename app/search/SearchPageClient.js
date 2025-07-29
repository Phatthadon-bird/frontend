"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const players = [
  { nameTh: "รอนนี่ โอซุลลิแวน", nameEn: "ronnie-osullivan", country: "อังกฤษ" },
  { nameTh: "มิ้งค์ สระบุรี", nameEn: "mingsaraburi", country: "ไทย" },
  { nameTh: "เทพไชยา อุ่นหนู", nameEn: "F1", country: "ไทย" },
  { nameTh: "มาร์ค เซลบี้", nameEn: "mark-selby", country: "อังกฤษ" },
  { nameTh: "ดิง จุนหุย", nameEn: "ding-junhui", country: "จีน" },
  { nameTh: "จอห์น ฮิกกิ้นส์", nameEn: "john-higgins", country: "สกอตแลนด์" },
  { nameTh: "จัดด์ ทรัมป์", nameEn: "judd-trump", country: "อังกฤษ" },
  { nameTh: "นีล โรเบิร์ตสัน", nameEn: "neil-robertson", country: "ออสเตรเลีย" },
  { nameTh: "ฌอน เมอร์ฟี่", nameEn: "shaun-murphy", country: "อังกฤษ" },
  { nameTh: "โจว ซินถง", nameEn: "zhao-xintong", country: "จีน" },
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const filteredPlayers = useMemo(() => {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return players.filter((player) =>
      player.nameTh.toLowerCase().includes(lowerQuery) ||
      player.nameEn.toLowerCase().includes(lowerQuery) ||
      player.country.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="container py-5" style={{ maxWidth: 600 }}>
      <h1 className="mb-4 text-center text-primary fw-bold">
        ผลการค้นหา: <span className="text-secondary">"{query}"</span>
      </h1>

      {filteredPlayers.length > 0 ? (
        <ul className="list-group shadow-sm rounded">
          {filteredPlayers.map((player, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f8ff";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 123, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Link
                href={`/racers/${slugify(player.nameEn)}`}
                className="text-decoration-none fs-5"
                style={{
                  color: "#0d6efd",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "color 0.2s ease",
                }}
              >
                🎱 {player.nameTh}
              </Link>
              <span
                className="badge bg-info text-dark fs-6"
                style={{
                  transition: "transform 0.2s ease",
                }}
              >
                {player.country}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        query && (
          <p className="mt-3 text-center text-danger fs-5">
            ไม่พบผลลัพธ์ที่ตรงกับ "{query}"
          </p>
        )
      )}
    </div>
  );
}
