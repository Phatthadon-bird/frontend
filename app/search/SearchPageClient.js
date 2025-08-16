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

// Country flag mapping
const countryFlags = {
  "ไทย": "🇹🇭",
  "อังกฤษ": "🇬🇧",
  "จีน": "🇨🇳",
  "สกอตแลนด์": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "ออสเตรเลีย": "🇦🇺",
  "แคนาดา": "🇨🇦",
  "ไอร์แลนด์": "🇮🇪",
  "ไอร์แลนด์เหนือ": "🇬🇧",
  "เวลส์": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
};

const pageIcons = {
  "หน้าแรก": "🏠",
  "เกี่ยวกับเรา": "👥",
  "บริการของเรา": "🛎️",
  "ติดต่อเรา": "📞",
  "นักแข่งสนุ๊กเกอร์": "🎯",
  "ข้อมูลเพิ่มเติม": "📊",
  "ตารางแข่ง": "📅",
  "ลงแข่ง": "🏆",
  "นักแข่งปัจจุบัน": "⭐",
  "ข่าวสนุ๊กเกอร์": "📰",
  "นักสนุกเกอร์ในตำนาน": "🏅",
  "อันดับนักสนุ๊กเกอร์โลก": "🌐",
  "ไฮไลท์การแข่ง": "🎬",
  "admin": "⚙️"
};

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

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "2rem 0"
    },
    searchCard: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "24px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      padding: "2.5rem"
    },
    title: {
      background: "linear-gradient(45deg, #667eea, #764ba2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "2.5rem",
      fontWeight: "800",
      marginBottom: "2rem",
      textAlign: "center"
    },
    searchBox: {
      position: "relative",
      marginBottom: "2rem"
    },
    searchInput: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "2px solid transparent",
      borderRadius: "16px",
      padding: "1rem 1.5rem",
      fontSize: "1.1rem",
      width: "100%",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
    },
    searchButton: {
      background: "linear-gradient(45deg, #667eea, #764ba2)",
      border: "none",
      borderRadius: "16px",
      padding: "1rem 2rem",
      color: "white",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
      marginLeft: "1rem"
    },
    sectionHeader: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "1.5rem",
      padding: "1rem 0",
      borderRadius: "12px",
      textAlign: "center",
      color: "white",
      position: "relative",
      overflow: "hidden"
    },
    playersSection: {
      background: "linear-gradient(45deg, #11998e, #38ef7d)",
      boxShadow: "0 8px 25px rgba(17, 153, 142, 0.3)"
    },
    pagesSection: {
      background: "linear-gradient(45deg, #fc466b, #3f5efb)",
      boxShadow: "0 8px 25px rgba(252, 70, 107, 0.3)"
    },
    resultsList: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "16px",
      padding: "1rem",
      marginBottom: "2rem",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)"
    },
    listItem: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "none",
      borderRadius: "12px",
      margin: "0.5rem 0",
      padding: "1.25rem 1.5rem",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden"
    },
    playerLink: {
      color: "#11998e",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      transition: "all 0.3s ease"
    },
    pageLink: {
      color: "#fc466b",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      transition: "all 0.3s ease"
    },
    noResults: {
      textAlign: "center",
      fontSize: "1.3rem",
      color: "rgba(255, 255, 255, 0.9)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      padding: "3rem",
      borderRadius: "16px",
      backdropFilter: "blur(10px)"
    },
    emptyState: {
      textAlign: "center",
      fontSize: "1.3rem",
      color: "rgba(255, 255, 255, 0.8)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      padding: "3rem",
      borderRadius: "16px",
      backdropFilter: "blur(10px)"
    }
  };

  return (
    <div style={styles.container}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={styles.searchCard}>
          <h1 style={styles.title}>
            ค้นหาข้อมูลสนุกเกอร์
          </h1>

          <form onSubmit={handleSubmit} style={styles.searchBox}>
            <div className="d-flex">
              <input
                type="text"
                placeholder="🔍 ค้นหานักแข่ง หรือหน้าต่างๆ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={styles.searchInput}
                autoFocus
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 1)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 30px rgba(102, 126, 234, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "transparent";
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
                }}
              />
              <button
                type="submit"
                style={styles.searchButton}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 30px rgba(102, 126, 234, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 20px rgba(102, 126, 234, 0.3)";
                }}
              >
                ค้นหา
              </button>
            </div>
          </form>

          {queryParam.trim() && (
            <div style={{ marginBottom: "2rem", textAlign: "center" }}>
              <span style={{ 
                fontSize: "1.1rem", 
                color: "#666",
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                border: "1px solid rgba(102, 126, 234, 0.2)"
              }}>
                ผลการค้นหา: "<strong>{queryParam}</strong>"
              </span>
            </div>
          )}

          {queryParam.trim() === "" ? (
            <div style={styles.emptyState}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎱</div>
              <p>กรุณาพิมพ์คำค้นหาเพื่อเริ่มต้น</p>
              <p style={{ fontSize: "1rem", opacity: "0.7" }}>
                ค้นหาได้ทั้งนักแข่งสนุกเกอร์และหน้าต่างๆ ในเว็บไซต์
              </p>
            </div>
          ) : filteredResults.length > 0 ? (
            <>
              {/* แสดงนักแข่งแยกตามประเทศ */}
              {Object.entries(groupedByCountry).map(([country, players]) => (
                <div key={country} style={{ marginBottom: "2rem" }}>
                  <div style={{...styles.sectionHeader, ...styles.playersSection}}>
                    {countryFlags[country] || "🏳️"} นักแข่งจากประเทศ{country}
                  </div>
                  <div style={styles.resultsList}>
                    {players.map((item, idx) => (
                      <div
                        key={idx}
                        style={styles.listItem}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                          e.currentTarget.style.backgroundColor = "rgba(17, 153, 142, 0.1)";
                          e.currentTarget.style.boxShadow = "0 12px 35px rgba(17, 153, 142, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <Link href={item.slug} style={styles.playerLink}>
                          <span style={{ fontSize: "1.5rem" }}>🎯</span>
                          <span>{item.title}</span>
                          <span style={{ 
                            fontSize: "0.9rem", 
                            opacity: "0.7",
                            backgroundColor: "rgba(17, 153, 142, 0.1)",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "8px",
                            marginLeft: "auto"
                          }}>
                            {countryFlags[item.country]} {item.country}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* แสดงผลเพจอื่น ๆ */}
              {pagesResults.length > 0 && (
                <div style={{ marginTop: "2rem" }}>
                  <div style={{...styles.sectionHeader, ...styles.pagesSection}}>
                    📄 หน้าต่าง ๆ ที่เกี่ยวข้อง
                  </div>
                  <div style={styles.resultsList}>
                    {pagesResults.map((item, idx) => (
                      <div
                        key={idx}
                        style={styles.listItem}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                          e.currentTarget.style.backgroundColor = "rgba(252, 70, 107, 0.1)";
                          e.currentTarget.style.boxShadow = "0 12px 35px rgba(252, 70, 107, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <Link href={item.slug} style={styles.pageLink}>
                          <span style={{ fontSize: "1.3rem" }}>
                            {pageIcons[item.title] || "📄"}
                          </span>
                          <span>{item.title}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div style={styles.noResults}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>😔</div>
              <p>ไม่พบผลลัพธ์ที่ตรงกับ "<strong>{queryParam}</strong>"</p>
              <p style={{ fontSize: "1rem", opacity: "0.7" }}>
                ลองใช้คำค้นหาอื่น หรือตรวจสอบการสะกดคำ
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}