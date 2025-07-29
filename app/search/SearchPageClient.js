"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const players = [
  { nameTh: "รอนนี่ โอซุลลิแวน", nameEn: "ronnie", country: "อังกฤษ" },
  { nameTh: "มิ้งค์ สระบุรี", nameEn: "mingsaraburi", country: "ไทย" },
  {
    nameTh: "เทพไชยา อุ่นหนู",
    nameEn: "tepsachaiya",
    country: "ไทย",
    alias: ["f1", "เอฟวัน", "f-1"]
  },
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query") || "";

  const [input, setInput] = useState(queryParam);

  const filteredPlayers = useMemo(() => {
    if (queryParam.trim() === "") return []; // ❗เปลี่ยนจากแสดงทั้งหมดเป็นไม่แสดงเลย
    const lowerQuery = queryParam.toLowerCase();
    return players.filter((player) =>
      player.nameTh.toLowerCase().includes(lowerQuery) ||
      player.nameEn.toLowerCase().includes(lowerQuery) ||
      player.country.toLowerCase().includes(lowerQuery) ||
      (player.alias && player.alias.some(alias => alias.toLowerCase().includes(lowerQuery)))
    );
  }, [queryParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${encodeURIComponent(input.trim())}`);
  };

  return (
    <div className="container py-5" style={{ maxWidth: 600 }}>
      <h1 className="mb-4 text-center text-primary fw-bold">
        ผลการค้นหา:{" "}
        <span className="text-secondary">
          "{queryParam === "" ? "ยังไม่ค้นหา" : queryParam}"
        </span>
      </h1>

      <form onSubmit={handleSubmit} className="mb-4 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="🔍 พิมพ์คำค้นหาที่คุณต้องการ"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">ค้นหา</button>
      </form>

      {queryParam.trim() === "" ? (
        <p className="mt-3 text-center text-muted fs-5">
        </p>
      ) : filteredPlayers.length > 0 ? (
        <ul className="list-group shadow-sm rounded" style={{ padding: 0, listStyle: "none" }}>
          {filteredPlayers.map((player, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "none",
                padding: "12px 20px",
                borderBottom: "1px solid #ddd",
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
              <span className="badge bg-info text-dark fs-6">
                {player.country}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-center text-danger fs-5">
          ไม่พบผลลัพธ์ที่ตรงกับ "{queryParam}"
        </p>
      )}
    </div>
  );
}
