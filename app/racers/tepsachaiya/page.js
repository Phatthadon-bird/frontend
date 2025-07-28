"use client";

import Image from "next/image";
import Link from "next/link";

export default function TepsachaiyaPage() {
  return (
    <div className="container py-5 text-light">
      {/* ปุ่มย้อนกลับ */}
      <div className="mb-4">
        <Link href="/#racers" className="btn btn-outline-warning">
          ← กลับไปหน้านักแข่ง
        </Link>
      </div>

      {/* ส่วนเนื้อหา */}
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <Image
            src="/image/11.jpg"
            alt="เทพไชยา อุ่นหนู"
            width={400}
            height={400}
            className="rounded-4 shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-md-7">
          <h1 className="display-4 fw-bold text-warning">เทพไชยา อุ่นหนู</h1>
          <p className="fs-5 fst-italic text-light-emphasis">
            สุดยอดนักแข่งที่มีฝีมือและประสบการณ์มากมาย  
            ผู้ได้รับการยอมรับในวงการแข่งรถไทยและระดับภูมิภาค
          </p>

          <ul className="list-group bg-dark rounded-4 mt-4">
            <li className="list-group-item bg-dark text-light border-secondary">
              🏁 ชื่อจริง: เทพไชยา อุ่นหนู
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🎯 ฉายา: นักแข่งผู้มากประสบการณ์
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🏆 ผลงานเด่น: แชมป์หลายรายการระดับประเทศและภูมิภาค
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🚗 สไตล์: แข็งแกร่ง มีสมาธิสูง และเทคนิคยอดเยี่ยม
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
          เทพไชยา อุ่นหนู เป็นนักแข่งที่มีประสบการณ์ยาวนาน  
          เริ่มต้นเข้าสู่วงการแข่งรถตั้งแต่อายุยังน้อย  
          และได้พิสูจน์ฝีมือด้วยการคว้าแชมป์ระดับประเทศและภูมิภาคมากมาย
        </p>
        <p className="text-dark fs-5 lh-lg">
          ด้วยความมุ่งมั่นและเทคนิคเฉพาะตัว  
          เทพไชยาจึงเป็นหนึ่งในนักแข่งที่ได้รับความเคารพและยกย่องในวงการ  
          พร้อมมีเป้าหมายที่จะพัฒนาฝีมือและคว้าชัยชนะในเวทีระดับนานาชาติ
        </p>
      </div>

      {/* ไฮไลต์วิดีโอ */}
      <div className="mt-5 p-4 bg-dark rounded-4">
        <h3 className="text-warning mb-3 fw-bold">🎥 คลิปไฮไลต์</h3>
        <div className="ratio ratio-16x9 rounded-4 shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/EiAk08JasBo"
            title="Highlights of Tepsachaiya"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ปุ่มกลับหน้ารวม */}
      <div className="mt-5 text-center">
        <p className="text-light-emphasis">อยากรู้จักนักแข่งคนอื่น?</p>
        <Link href="/#racers" className="btn btn-outline-light">
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
      `}</style>
    </div>
  );
}
