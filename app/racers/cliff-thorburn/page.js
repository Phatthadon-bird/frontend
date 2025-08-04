"use client";

import Image from "next/image";
import Link from "next/link";

export default function CliffThorburn() {
  return (
    <div
      className="container py-5 text-dark"
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* ปุ่มย้อนกลับ */}
      <div className="mb-4 d-flex justify-content-start gap-3 flex-wrap">
        <Link href="/" className="btn btn-outline-secondary shadow-sm">
          🏠 กลับหน้าหลัก
        </Link>

        <Link
          href="/racers/legend"
          className="btn btn-outline-primary shadow-sm d-flex align-items-center gap-2 custom-btn"
        >
          กลับไปหน้านักแข่ง
        </Link>
      </div>

      {/* เนื้อหา */}
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <Image
            src="/image/66.jpg" // เตรียมรูปภาพนี้ไว้ใน public/image/
            alt="Cliff Thorburn"
            width={400}
            height={400}
            className="rounded-4 shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="display-4 fw-bold text-primary">Cliff Thorburn</h1>
          <p className="fs-5 fst-italic text-secondary">
            นักสนุกเกอร์ชาวแคนาดาผู้โด่งดัง เจ้าของฉายา "The Grinder"  
            ที่มีชื่อเสียงเรื่องความอดทนและการเล่นอย่างตั้งใจ
          </p>
          <ul className="list-group bg-light rounded-4 mt-4 shadow-sm">
            <li className="list-group-item bg-light text-dark border-secondary">
              🏁 ชื่อเต็ม: Clifford Charles Thorburn
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🏆 แชมป์โลก: 1 สมัย (1980)
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🎱 เซนจูรี่เบรก: มากกว่า 200 ครั้ง
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🚀 สไตล์: อดทน, รอบคอบ และใจเย็น
            </li>
          </ul>
        </div>
      </div>

      {/* ประวัติโดยย่อ */}
      <div className="mt-5 p-4 rounded-4 bg-primary bg-opacity-10 shadow-sm">
        <h2 className="text-primary mb-4 fw-bold border-start border-4 border-primary ps-3">
          ประวัติโดยย่อ
        </h2>
        <p className="text-dark fs-5 lh-lg mb-3">
          คลิฟฟ์ ธอร์เบิร์น เกิดเมื่อวันที่ 16 มกราคม 1948 ที่เมืองวินนิพีค  
          ประเทศแคนาดา เขาเริ่มเล่นสนุกเกอร์ตั้งแต่เด็กและกลายเป็นนักสนุกเกอร์มืออาชีพในปี 1972
        </p>
        <p className="text-dark fs-5 lh-lg">
          เขาเป็นนักสนุกเกอร์ชาวแคนาดาคนแรกที่คว้าแชมป์โลก และมีชื่อเสียงจากสไตล์การเล่นที่เน้นความอดทนและความแม่นยำ
        </p>
      </div>

      {/* ไฮไลต์วิดีโอ */}
<div className="mt-5 rounded-4 shadow-lg video-container">
  <iframe
    src="https://www.youtube.com/embed/kvGvLNdwUUI"
    title="Cliff Thorburn Highlights"
    frameBorder="0"
    width="100%"
    height="400"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen

        />
      </div>

      {/* สถิติที่น่าสนใจ */}
      <div className="mt-5 p-4 rounded-4 bg-primary bg-gradient text-light">
        <h3 className="fw-bold mb-4">🏅 สถิติที่น่าสนใจ</h3>
        <ul className="list-unstyled fs-5">
          <li>💯 ทำแม็กซิมัมเบรก (147 แต้ม) ครั้งแรกในการแข่งขันระดับโลก (1983)</li>
          <li>🎯 แชมป์ World Snooker Championship 1 สมัย (1980)</li>
          <li>🎖️ เข้ารอบชิง UK Championship หลายครั้ง</li>
        </ul>
      </div>

      {/* ปุ่มกลับหน้ารวม */}
      <div className="mt-5 text-center">
        <p className="text-secondary">อยากรู้จักนักแข่งคนอื่น?</p>
        <Link href="/racers" className="btn btn-outline-primary custom-back-btn">
          ← กลับไปหน้ารวมโปรไฟล์นักแข่ง
        </Link>
      </div>

      {/* CSS */}
      <style jsx>{`
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          padding-top: 25px;
          height: 0;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.6);
          margin-top: 1.5rem;
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
        }

        .custom-back-btn {
          color: #007bff !important;
          background-color: rgba(0, 123, 255, 0.1) !important;
          border: 2px solid #007bff !important;
          box-shadow: 0 0 8px #007bff;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          font-size: 1.1rem;
          transition: all 0.3s ease-in-out;
        }
        .custom-back-btn:hover {
          background-color: #007bff !important;
          color: #fff !important;
          box-shadow: 0 0 15px #007bff;
          transform: scale(1.05);
          text-decoration: none;
        }

        .custom-btn {
          font-weight: 600;
          font-size: 1.1rem;
          padding: 0.55rem 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 123, 255, 0.5);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .custom-btn:hover {
          background-color: #007bff;
          color: white !important;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.7);
          transform: translateY(-2px);
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
