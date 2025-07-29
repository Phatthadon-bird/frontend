"use client";

import Image from "next/image";
import Link from "next/link";

export default function RonniePage() {
  return (
    <div className="container py-5 text-light">
      {/* ปุ่มย้อนกลับ */}
      <div className="mb-4">
        <Link href="/racers" className="btn btn-outline-primary shadow-sm">
  ← กลับไปหน้านักแข่ง
</Link>

      </div>

      {/* เนื้อหา */}
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <Image
            src="/image/9.jpg"
            alt="Ronnie O'Sullivan"
            width={400}
            height={400}
            className="rounded-4 shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="display-4 fw-bold text-warning">Ronnie O'Sullivan</h1>
          <p className="fs-5 fst-italic text-light-emphasis">
            เจ้าของฉายา "The Rocket" นักสนุกเกอร์มืออาชีพชาวอังกฤษ
            ที่ได้รับการยกย่องว่าเก่งที่สุดในประวัติศาสตร์วงการสนุกเกอร์
          </p>
          <ul className="list-group bg-dark rounded-4 mt-4">
            <li className="list-group-item bg-dark text-light border-secondary">
              🏁 ชื่อเต็ม: Ronnie Antonio O'Sullivan
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🎯 ฉายา: The Rocket
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🏆 แชมป์โลก: 7 สมัย (เทียบเท่า Stephen Hendry)
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🎱 เซนจูรี่เบรก: มากกว่า 1,200 ครั้ง (มากที่สุดในโลก)
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🚀 สไตล์: รวดเร็ว แม่นยำ จิตวิทยาแน่น
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
          รอนนี่เกิดเมื่อวันที่ 5 ธันวาคม 1975 ที่เมืองเวิร์ดฟอร์ด ประเทศอังกฤษ  
          เขาเริ่มเล่นสนุกเกอร์ตั้งแต่อายุ 7 ปี และเข้าสู่การเป็นนักอาชีพในปี 1992  
          ด้วยสไตล์การเล่นที่รวดเร็วและแม่นยำ เขาจึงได้ฉายาว่า "The Rocket"
        </p>
        <p className="text-dark fs-5 lh-lg">
          เขาได้รับการยอมรับว่าเป็นนักสนุกเกอร์ที่มีพรสวรรค์สูงที่สุด  
          และเป็นขวัญใจของแฟนๆ ทั่วโลก
        </p>
      </div>

      {/* ไฮไลต์วิดีโอ */}
      <div className="mt-5 rounded-4 shadow-lg video-container">
        <iframe
          src="https://www.youtube.com/embed/S53cI3e7z6g"
          title="Ronnie O'Sullivan Highlights"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* สถิติที่น่าสนใจ */}
      <div className="mt-5 p-4 rounded-4 bg-secondary bg-gradient text-light">
        <h3 className="fw-bold mb-4">🏅 สถิติที่น่าสนใจ</h3>
        <ul className="list-unstyled fs-5">
          <li>💯 ทำแม็กซิมัมเบรก (147 แต้ม) ได้ 15 ครั้ง</li>
          <li>⏱️ ทำ 147 เร็วที่สุดในโลก: 5 นาที 20 วินาที</li>
          <li>🎖️ ได้รับ OBE จากราชวงศ์อังกฤษ</li>
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
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          padding-top: 25px;
          height: 0;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 0 20px rgba(255, 193, 7, 0.6);
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
          color: #fff !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
          border: 2px solid #ffc107 !important;
          box-shadow: 0 0 8px #ffc107;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          font-size: 1.1rem;
          transition: all 0.3s ease-in-out;
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
