"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ZhaoXintongPage() {
  return (
    <div className="container py-5">
      {/* ปุ่มย้อนกลับ */}
      <div className="mb-4">
        <Link href="/racers" className="btn btn-outline-primary shadow-sm">
          ← กลับไปหน้านักแข่ง
        </Link>
      </div>

      {/* ข้อมูลนักสนุกเกอร์ */}
      <div className="row align-items-center bg-light rounded shadow p-4">
        <div className="col-lg-5 mb-4 mb-lg-0 text-center">
          <Image
            src="/image/28.jpg"
            alt="Zhao Xintong"
            width={400}
            height={550}
            className="img-fluid rounded-4 border border-3 border-primary"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="mb-3 text-primary fw-bold">Zhao Xintong</h1>
          <p className="fs-5"><strong>ประเทศ:</strong> จีน</p>
          <p className="text-secondary mb-3">
            Zhao Xintong เป็นนักสนุกเกอร์ดาวรุ่งจากจีนที่เริ่มโดดเด่นในวงการสนุกเกอร์โลก
            ด้วยสไตล์การเล่นที่รวดเร็วและแม่นยำ เขาได้รับการจับตามองว่าเป็นหนึ่งในดาวรุ่งที่มีศักยภาพสูง
          </p>
          <p className="text-secondary mb-4">
            เขาคว้าแชมป์รายการใหญ่หลายรายการ และกำลังพัฒนาไปสู่ระดับแถวหน้าของวงการ
          </p>

          {/* สถิติ */}
          <div className="mb-4">
            <h5 className="fw-semibold text-primary mb-3">สถิติและไฮไลต์</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์ Ranking Titles
                <span className="badge bg-success rounded-pill">3 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                เบรกสูงสุด (Century Breaks)
                <span className="badge bg-info text-dark rounded-pill">150+</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                รางวัล Rising Star
                <span className="badge bg-warning text-dark rounded-pill">2023</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="badge bg-success me-2 fs-6">Multiple Ranking Titles</span>
            <span className="badge bg-info text-dark me-2 fs-6">Rising Star</span>
            <span className="badge bg-warning text-dark fs-6">Future Contender</span>
          </div>
        </div>
      </div>
    </div>
  );
}
