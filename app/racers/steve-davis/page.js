"use client";

import Image from "next/image";
import Link from "next/link";

export default function SteveDavis() {
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

      {/* ข้อมูลหลัก */}
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <Image
            src="/image/72.jpg"
            alt="Steve Davis"
            width={400}
            height={400}
            className="rounded-4 shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="display-4 fw-bold text-danger">Steve Davis</h1>
          <p className="fs-5 fst-italic text-secondary">
            แชมป์โลก 6 สมัย ผู้ครองยุคทองของสนุกเกอร์ในช่วงทศวรรษ 1980s
            และเป็นหนึ่งในตำนานของวงการ
          </p>
          <ul className="list-group bg-light rounded-4 mt-4 shadow-sm">
            <li className="list-group-item bg-light text-dark border-secondary">
              🏁 ชื่อเต็ม: Steve Davis OBE
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🏆 แชมป์โลก: 6 สมัย (1981, 1983, 1984, 1987, 1988, 1989)
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🎱 เซนจูรี่เบรก: มากกว่า 350 ครั้ง
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🎯 สไตล์: แม่นยำ ควบคุมจังหวะเกม และใจเย็น
            </li>
          </ul>
        </div>
      </div>

      {/* ประวัติโดยย่อ */}
      <div className="mt-5 p-4 rounded-4 bg-danger bg-opacity-10 shadow-sm">
        <h2 className="text-danger mb-4 fw-bold border-start border-4 border-danger ps-3">
          ประวัติโดยย่อ
        </h2>
        <p className="text-dark fs-5 lh-lg mb-3">
          สตีฟ เดวิส เกิดเมื่อวันที่ 22 สิงหาคม ค.ศ. 1957 ที่เมืองลอนดอน ประเทศอังกฤษ
          เขาเข้าสู่วงการสนุกเกอร์อย่างจริงจังในช่วงปลายยุค 70s
          และกลายเป็นนักสนุกเกอร์อันดับ 1 ของโลกในยุค 1980s
        </p>
        <p className="text-dark fs-5 lh-lg">
          ด้วยสไตล์การเล่นที่แม่นยำและมีระเบียบ
          เขาได้กลายเป็นนักกีฬาคนแรกที่ได้รับรางวัล BBC Sports Personality of the Year
          สำหรับกีฬาสนุกเกอร์
        </p>
      </div>

      {/* ไฮไลต์วิดีโอ */}
<div className="mt-5 rounded-4 shadow-lg video-container">
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/mdzd0rNCHAk"
    title="Steve Davis Highlights"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen

        />
      </div>

      {/* สถิติที่น่าสนใจ */}
      <div className="mt-5 p-4 rounded-4 bg-danger bg-gradient text-light">
        <h3 className="fw-bold mb-4">📊 สถิติที่น่าจดจำ</h3>
        <ul className="list-unstyled fs-5">
          <li>💯 แม็กซิมัมเบรก: 1 ครั้ง</li>
          <li>🏅 ชนะรายการสะสมคะแนนรวม 28 รายการ</li>
          <li>🏆 แชมป์ UK Championship 6 ครั้ง</li>
        </ul>
      </div>

      {/* ปุ่มกลับหน้ารวม */}
      <div className="mt-5 text-center">
        <p className="text-secondary">อยากรู้จักนักแข่งคนอื่น?</p>
        <Link href="/racers" className="btn btn-outline-danger custom-back-btn">
          ← กลับไปหน้ารวมโปรไฟล์นักแข่ง
        </Link>
      </div>

      {/* CSS */}
      <style jsx>{`
        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          padding-top: 25px;
          height: 0;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 0 20px rgba(220, 53, 69, 0.6);
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
          color: #dc3545 !important;
          background-color: rgba(220, 53, 69, 0.1) !important;
          border: 2px solid #dc3545 !important;
          box-shadow: 0 0 8px #dc3545;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          font-size: 1.1rem;
          transition: all 0.3s ease-in-out;
        }
        .custom-back-btn:hover {
          background-color: #dc3545 !important;
          color: #fff !important;
          box-shadow: 0 0 15px #dc3545;
          transform: scale(1.05);
          text-decoration: none;
        }

        .custom-btn {
          font-weight: 600;
          font-size: 1.1rem;
          padding: 0.55rem 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(220, 53, 69, 0.5);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .custom-btn:hover {
          background-color: #dc3545;
          color: white !important;
          box-shadow: 0 8px 20px rgba(220, 53, 69, 0.7);
          transform: translateY(-2px);
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
