"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

// ข้อมูลนักสนุกเกอร์
const players = [
  { nameTh: "รอนนี่ โอซุลลิแวน", nameEn: "ronnie", country: "อังกฤษ" },
  { nameTh: "มิ้งค์ สระบุรี", nameEn: "mingsaraburi", country: "ไทย" },
  { nameTh: "เทพไชยา อุ่นหนู", nameEn: "tepsachaiya", country: "ไทย", alias: ["f1", "เอฟวัน", "f-1"] },
  { nameTh: "มาร์ค เซลบี้", nameEn: "mark-selby", country: "อังกฤษ" },
  { nameTh: "ดิง จุนหุย", nameEn: "ding-junhui", country: "จีน" },
  { nameTh: "จอห์น ฮิกกิ้นส์", nameEn: "john-higgins", country: "สกอตแลนด์" },
  { nameTh: "จัดด์ ทรัมป์", nameEn: "judd-trump", country: "อังกฤษ" },
  { nameTh: "นีล โรเบิร์ตสัน", nameEn: "neil-robertson", country: "ออสเตรเลีย" },
  { nameTh: "ฌอน เมอร์ฟี่", nameEn: "shaun-murphy", country: "อังกฤษ" },
  { nameTh: "โจว ซินถง", nameEn: "zhao-xintong", country: "จีน" },
  { nameTh: "สตีเฟ่น เฮนดรี้", nameEn: "stephen-hendry", country: "สกอตแลนด์" },
  { nameTh: "สตีฟ เดวิส", nameEn: "steve-davis", country: "อังกฤษ" },
  { nameTh: "จิมมี่ ไวท์", nameEn: "jimmy-white", country: "อังกฤษ" },
  { nameTh: "คลิฟ ธอร์เบิร์น", nameEn: "cliff-thorburn", country: "แคนาดา" },
  { nameTh: "เคน โดเฮอร์ตี้", nameEn: "ken-doherty", country: "ไอร์แลนด์" },
  { nameTh: "อเล็กซ์ ฮิกกินส์", nameEn: "alex-higgins", country: "ไอร์แลนด์เหนือ", alias: ["hurricane"] },
  { nameTh: "เรย์ เรียร์ดอน", nameEn: "ray-reardon", country: "เวลส์" },
  { nameTh: "เทอร์รี่ กริฟฟิธส์", nameEn: "terry-griffiths", country: "เวลส์" },
  { nameTh: "ต๋อง ศิษย์ฉ่อย", nameEn: "james-wattana", country: "ไทย", alias: ["ต๋อง", "tong"] },
  { nameTh: "หมู ปากน้ำ", nameEn: "noppon-saengkham", country: "ไทย", alias: ["หมู", "ปากน้ำ"] },
];

// ข้อมูลเมนู
const pages = [
  { type: "page", title: "หน้าแรก", slug: "/" },
  { type: "page", title: "เกี่ยวกับเรา", slug: "/about" },
  { type: "page", title: "บริการของเรา", slug: "/services" },
  { type: "page", title: "ติดต่อเรา", slug: "/contect" },
  { type: "page", title: "นักแข่งสนุ๊กเกอร์", slug: "/racers" },
  { type: "page", title: "ข้อมูลเพิ่มเติม", slug: "/more-info" },
  { type: "page", title: "ตารางแข่ง", slug: "/schedule" },
  { type: "page", title: "ลงแข่ง", slug: "/compete" },
  { type: "page", title: "นักแข่งปัจจุบัน", slug: "/racers" },
  { type: "page", title: "ข่าวสนุ๊กเกอร์", slug: "/racers/legend" },
  { type: "page", title: "นักสนุกเกอร์ในตำนาน", slug: "/news" },
  { type: "page", title: "อันดับนักสนุ๊กเกอร์โลก", slug: "/rankings" },
  { type: "page", title: "ไฮไลท์การแข่ง", slug: "/highlights" },
  { type: "page", title: "admin", slug: "/admin/users" },
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function SearchPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query") || "";

  const [input, setInput] = useState(queryParam);

  // รวมข้อมูลนักแข่งและหน้าเพจ
  const data = [
    ...players.map((player) => ({
      type: "player",
      title: player.nameTh,
      slug: `/racers/${slugify(player.nameEn)}`,
      country: player.country,
      alias: player.alias || [],
    })),
    ...pages,
  ];

  // กรองผลลัพธ์ตาม query
  const filteredResults = useMemo(() => {
    if (queryParam.trim() === "") return [];
    const lowerQuery = queryParam.toLowerCase();

    return data.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(lowerQuery);
      const matchAlias =
        item.alias && item.alias.some((alias) => alias.toLowerCase().includes(lowerQuery));
      const matchCountry = item.country && item.country.toLowerCase().includes(lowerQuery);

      return matchTitle || matchAlias || matchCountry;
    });
  }, [queryParam]);

  // แบ่งผลลัพธ์เป็นนักแข่งและเพจ
  const playersResults = filteredResults.filter((i) => i.type === "player");
  const pagesResults = filteredResults.filter((i) => i.type !== "player");

  // แบ่งนักแข่งตามประเทศ
  const groupedByCountry = playersResults.reduce((groups, player) => {
    const country = player.country || "ไม่ระบุประเทศ";
    if (!groups[country]) groups[country] = [];
    groups[country].push(player);
    return groups;
  }, {});

  // ส่งไปยังหน้าผลการค้นหาใหม่
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
          placeholder="🔍 ค้นหา"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button type="submit" className="btn btn-primary">
          ค้นหา
        </button>
      </form>

      {queryParam.trim() === "" ? (
        <p className="mt-3 text-center text-muted fs-5">กรุณาพิมพ์คำค้นหาเพื่อเริ่มต้น</p>
      ) : filteredResults.length > 0 ? (
        <>
          {/* แสดงนักแข่งแยกตามประเทศ */}
          {Object.entries(groupedByCountry).map(([country, players]) => (
            <div key={country} style={{ marginBottom: 24 }}>
              <h3 style={{ borderBottom: "2px solid #0d6efd", paddingBottom: 6 }}>
                🏳️‍🌈 นักแข่งจากประเทศ: {country}
              </h3>
              <ul
                className="list-group shadow-sm rounded"
                style={{ padding: 0, listStyle: "none" }}
              >
                {players.map((item, idx) => (
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
                      href={item.slug}
                      className="text-decoration-none fs-5"
                      style={{
                        color: "#0d6efd",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: "color 0.2s ease",
                      }}
                    >
                      🎱 {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* แสดงผลเพจอื่น ๆ */}
          {pagesResults.length > 0 && (
            <div style={{ marginTop: 30 }}>
              <h3 style={{ borderBottom: "2px solid #198754", paddingBottom: 6 }}>
                📄 หน้าต่าง ๆ ที่เกี่ยวข้อง
              </h3>
              <ul
                className="list-group shadow-sm rounded"
                style={{ padding: 0, listStyle: "none" }}
              >
                {pagesResults.map((item, idx) => (
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
                      e.currentTarget.style.backgroundColor = "#e6ffed";
                      e.currentTarget.style.boxShadow = "0 4px 10px rgba(25, 135, 84, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Link
                      href={item.slug}
                      className="text-decoration-none fs-5"
                      style={{
                        color: "#198754",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: "color 0.2s ease",
                      }}
                    >
                      📄 {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p className="mt-3 text-center text-danger fs-5">
          ไม่พบผลลัพธ์ที่ตรงกับ "{queryParam}"
        </p>
      )}
    </div>
  );
}
