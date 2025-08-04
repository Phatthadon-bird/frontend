"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JamesWattanaPage() {
  return (
    <div className="container py-5">
      {/* ปุ่มย้อนกลับ */}
      <div className="mb-4 d-flex justify-content-start gap-3 flex-wrap">
        <Link href="/" className="btn btn-outline-info shadow-sm">
          🏠 กลับหน้าหลัก
        </Link>

        <Link href="/racers" className="btn btn-outline-primary shadow-sm">
          กลับไปหน้านักแข่ง
        </Link>
      </div>

      {/* ข้อมูลนักสนุกเกอร์ */}
      <div className="row align-items-center bg-light rounded shadow p-4">
        <div className="col-lg-5 mb-4 mb-lg-0 text-center">
          <Image
            src="/image/61.jpg"
            alt="James Wattana"
            width={400}
            height={550}
            className="img-fluid rounded-4 border border-3 border-danger"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="mb-3 text-danger fw-bold">James Wattana</h1>
          <p className="fs-5"><strong>ประเทศ:</strong> ไทย</p>
          <p className="text-secondary mb-4">
            เจมส์ วัฒนานนท์ นักสนุกเกอร์ชาวไทยผู้โด่งดังระดับโลก  
            เขาเป็นนักสนุกเกอร์ไทยคนแรกที่ประสบความสำเร็จในเวทีระดับโลก และเป็นที่รู้จักอย่างกว้างขวาง
          </p>
          <p className="text-secondary mb-4">
            เจมส์มีสไตล์การเล่นที่เฉียบคมและมีผลงานมากมาย รวมถึงเคยติดท็อปแรงกิงโลกและได้รับการยกย่องจากแฟนสนุกเกอร์ทั่วโลก
          </p>

          {/* สถิติ */}
          <div className="mb-4">
            <h5 className="fw-semibold text-danger mb-3">สถิติและรางวัลเด่น</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์ทัวร์โปร
                <span className="badge bg-danger rounded-pill">3 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Century Breaks
                <span className="badge bg-primary rounded-pill">100+</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                นักสนุกเกอร์ไทยคนแรกในท็อป 16 โลก
                <span className="badge bg-info text-dark rounded-pill">สำเร็จ</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="badge bg-danger me-2 fs-6">3x โปรทัวร์แชมป์</span>
            <span className="badge bg-primary fs-6">Century Break Maker</span>
          </div>
        </div>
      </div>
    </div>
  );
}
