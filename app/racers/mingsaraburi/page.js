"use client";

import Image from "next/image";
import Link from "next/link";

export default function MingsaraburiPage() {
  return (
    <div className="container py-5 text-light">
      {/* ปุ่มย้อนกลับ */}
      <div className="mb-4 d-flex justify-content-start gap-3 flex-wrap">
        <Link href="/" className="btn btn-outline-info shadow-sm">
          🏠 กลับหน้าหลัก
        </Link>

        <Link href="/racers" className="btn btn-outline-primary shadow-sm">
          กลับไปหน้านักแข่ง
        </Link>
      </div>

      {/* เนื้อหา */}
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <Image
            src="/image/10.jpg"
            alt="มิ้งค์ สระบุรี"
            width={400}
            height={400}
            className="rounded-4 shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="display-4 fw-bold text-warning">มิ้งค์ สระบุรี</h1>
          <p className="fs-5 fst-italic text-light-emphasis">
            นักสนุกเกอร์หญิงมือ 1 ของโลกจากประเทศไทย
          </p>
          <ul className="list-group bg-dark rounded-4 mt-4">
            <li className="list-group-item bg-dark text-light border-secondary">
              🏁 ชื่อจริง: ณัชชารัตน์ วงศ์หฤทัย
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🎯 ฉายา: มิ้งค์ สระบุรี
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🏆 แชมป์โลก: 1 สมัย (2022)
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🌍 อันดับโลก: มือ 1 ของโลก
            </li>
          </ul>
        </div>
      </div>

      {/* ประวัติโดยย่อ */}
      <div className="mt-5 p-4 rounded-4 bg-light shadow-sm">
        <h2 className="text-warning mb-4 fw-bold border-start border-4 border-warning ps-3">
          ประวัติโดยย่อ
        </h2>
        <p className="text-dark fs-5 lh-lg mb-3">
          มิ้งค์ สระบุรี หรือ ณัชชารัตน์ วงศ์หฤทัย เป็นนักสนุกเกอร์หญิงมือ 1 ของโลกจากประเทศไทย
          เธอเริ่มเล่นสนุกเกอร์ตั้งแต่อายุ 7 ปี และเข้าสู่วงการอาชีพในปี 2016
          ด้วยความมุ่งมั่นและความสามารถ เธอสามารถคว้าแชมป์โลกในปี 2022 และขึ้นเป็นมือ 1 ของโลกในปี 2023
        </p>
      </div>

      {/* ไฮไลต์วิดีโอ */}
      <div className="mt-5 p-4 bg-dark rounded-4">
        <h3 className="text-warning mb-3 fw-bold">🎥 คลิปไฮไลต์</h3>
        <div className="ratio ratio-16x9 rounded-4 shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/jpXSb3pZTPg"
            title="Mingsaraburi Highlights"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* สถิติที่น่าสนใจ */}
      <div className="mt-5 p-4 rounded-4 bg-secondary bg-gradient text-light">
        <h3 className="fw-bold mb-4">🏅 สถิติที่น่าสนใจ</h3>
        <ul className="list-unstyled fs-5">
          <li>🏆 คว้าแชมป์แข่งระดับภูมิภาคหลายรายการ</li>
          <li>🚗 สไตล์ขับขี่เฉียบคม แม่นยำ และใจเย็น</li>
          <li>🎯 กำลังเป็นดาวรุ่งที่น่าจับตามองในวงการซิ่งไทย</li>
        </ul>
      </div>

      {/* ปุ่มกลับหน้ารวม */}
      <div className="mt-5 text-center">
        <p className="text-light-emphasis">อยากรู้จักนักแข่งคนอื่น?</p>
        <Link href="/#racers" className="btn btn-outline-light custom-back-btn">
          ← กลับไปหน้ารวมโปรไฟล์นักแข่ง
        </Link>
      </div>

      {/* CSS */}
      <style jsx>{`
        .ratio {
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(255, 193, 7, 0.4);
        }

        .custom-back-btn {
          color: #fff !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
          border: 2px solid #ffc107 !important;
          box-shadow: 0 0 8px #ffc107;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          font-size: 1.1rem;
          transition: all 0.3s ease-in-out;
          display: inline-block;
        }
        .custom-back-btn:hover {
          background-color: #ffc107 !important;
          color: #000 !important;
          box-shadow: 0 0 15px #ffc107;
          transform: scale(1.05);
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
