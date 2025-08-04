"use client";

import Image from "next/image";
import Link from "next/link";

export default function KenDoherty() {
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
            src="/image/68.jpg"
            alt="Ken Doherty"
            width={400}
            height={400}
            className="rounded-4 shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="display-4 fw-bold text-primary">Ken Doherty</h1>
          <p className="fs-5 fst-italic text-secondary">
            นักสนุกเกอร์ชาวไอริช เจ้าของฉายา "Crafty Potter"  
            ผู้มีทักษะและไหวพริบในการเล่นสูงมาก
          </p>
          <ul className="list-group bg-light rounded-4 mt-4 shadow-sm">
            <li className="list-group-item bg-light text-dark border-secondary">
              🏁 ชื่อเต็ม: Kenneth Doherty
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🏆 แชมป์โลก: 1 สมัย (1997)
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🎱 เซนจูรี่เบรก: มากกว่า 200 ครั้ง
            </li>
            <li className="list-group-item bg-light text-dark border-secondary">
              🚀 สไตล์: รอบคอบ มีไหวพริบ และเทคนิคเยี่ยม
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
          เคน โดเฮอร์ตี้ เกิดเมื่อวันที่ 17 มิถุนายน 1969 ที่ดับลิน ประเทศไอร์แลนด์  
          เขาก้าวเข้าสู่วงการนักสนุกเกอร์อาชีพในปี 1990 และโด่งดังในปี 1997 ด้วยการคว้าแชมป์โลก
        </p>
        <p className="text-dark fs-5 lh-lg">
          เขาได้รับการยกย่องในฐานะนักเล่นที่มีไหวพริบและกลยุทธ์ดีเยี่ยม รวมถึงการเล่นที่รัดกุมและใจเย็น
        </p>
      </div>

      {/* ไฮไลต์วิดีโอ */}
<div className="mt-5 rounded-4 shadow-lg video-container">
  <iframe
    src="https://www.youtube.com/embed/fucZRtmk1P8"
    title="YouTube video player"
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
          <li>💯 ทำแม็กซิมัมเบรก (147 แต้ม) หลายครั้งในทัวร์นาเมนต์ระดับมืออาชีพ</li>
          <li>🎯 แชมป์ Irish Masters 2 สมัย</li>
          <li>🎖️ ผู้เล่นที่มีการวางแผนและกลยุทธ์ยอดเยี่ยมในสนาม</li>
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
