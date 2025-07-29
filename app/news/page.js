'use client';

import Link from "next/link";

const newsList = [
  {
    id: 1,
    title: "รอนนี่ โอซุลลิแวน คว้าแชมป์โลกสมัยที่ 7",
    date: "2025-07-20",
    summary: "รอนนี่ โอซุลลิแวน นักสนุ๊กเกอร์ชื่อดังจากอังกฤษ คว้าแชมป์โลกครั้งล่าสุดอย่างยิ่งใหญ่...",
    image: "/image/31.jpg",
    slug: "ronnie-osullivan-world-champion-2025"
  },
  {
    id: 2,
    title: "มาร์ค เซลบี้ ยืนยันเข้าร่วมแข่งขันรายการใหญ่ปลายปีนี้",
    date: "2025-07-15",
    summary: "มาร์ค เซลบี้ เตรียมพร้อมลงแข่งขันในทัวร์นาเมนต์ระดับโลกที่กำลังจะมาถึงในอีกไม่กี่เดือน...",
    image: "/image/32.jpg",
    slug: "mark-selby-confirm-competition-2025"
  },
  {
    id: 3,
    title: "จัดด์ ทรัมป์ เปิดตัวเทคนิคใหม่สุดล้ำในเกมสนุ๊กเกอร์",
    date: "2025-07-10",
    summary: "จัดด์ ทรัมป์ เผยเทคนิคใหม่ในการเล่นที่ช่วยเพิ่มโอกาสชนะและทำคะแนนสูงขึ้นอย่างน่าทึ่ง...",
    image: "/image/33.jpeg",
    slug: "judd-trump-new-technique"
  },
  {
    id: 4,
    title: "โจว ซินถง โชว์ฟอร์มยอดเยี่ยมในทัวร์นาเมนต์ล่าสุด",
    date: "2025-07-25",
    summary: "โจว ซินถง นักสนุ๊กเกอร์ดาวรุ่งจากจีน ทำผลงานได้อย่างน่าประทับใจในรายการแข่งขันล่าสุด...",
    image: "/image/35.jpg",
    slug: "zhao-xintong-impressive-performance-2025"
  },
];

export default function NewsPage() {
  return (
    <div className="container py-5" style={{ maxWidth: 960 }}>
      <div className="mb-4">
        <Link href="/">
          <button
            className="btn btn-outline-warning"
            style={{ fontWeight: "600" }}
          >
            ← กลับหน้าหลัก
          </button>
        </Link>
      </div>

      <h1
        className="mb-5 text-center text-warning fw-bold"
        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)", fontSize: "2.5rem" }}
      >
        ข่าวสนุ๊กเกอร์ล่าสุด
      </h1>

      <div className="row g-4">
        {newsList.map(({ id, title, date, summary, image, slug }) => (
          <div key={id} className="col-12 col-md-6">
            <div
              className="card h-100 shadow-lg"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
                backgroundColor: "#1e1e1e",
                color: "#fff"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(255, 193, 7, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  width: "100%",
                  filter: "brightness(0.85)"
                }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ color: "#ffc107" }}>
                  {title}
                </h5>
                <p
                  className="card-text text-muted mb-2"
                  style={{ fontSize: "0.85rem", fontWeight: "600" }}
                >
                  {new Date(date).toLocaleDateString("th-TH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="card-text" style={{ lineHeight: 1.5, fontSize: "1rem" }}>
                  {summary}
                </p>
                <Link href={`/news/${slug}`}>
                  <button
                    className="btn btn-warning mt-3"
                    style={{ fontWeight: "600", boxShadow: "0 4px 12px #ffc107aa" }}
                  >
                    อ่านเพิ่มเติม
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
