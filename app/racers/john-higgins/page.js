"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JohnHigginsPage() {
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
            src="/image/25.jpg"
            alt="John Higgins"
            width={400}
            height={550}
            className="img-fluid rounded-4 border border-3 border-primary"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="mb-3 text-primary fw-bold">John Higgins</h1>
          <p className="fs-5"><strong>ประเทศ:</strong> สก็อตแลนด์</p>
          <p className="text-secondary mb-4">
            John Higgins เป็นนักสนุกเกอร์มืออาชีพจากสก็อตแลนด์ที่มีประสบการณ์ยาวนาน 
            เขาเป็นหนึ่งในนักสนุกเกอร์ที่ประสบความสำเร็จสูงสุดในวงการ ด้วยความนิ่งและการเล่นที่ชาญฉลาด
          </p>
          <p className="text-secondary mb-4">
            เขาคว้าแชมป์โลกถึง 4 สมัยและชนะรายการใหญ่มากมาย เช่น UK Championship และ The Masters
          </p>

          {/* สถิติ */}
          <div className="mb-4">
            <h5 className="fw-semibold text-primary mb-3">สถิติและรางวัลเด่น</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์โลก
                <span className="badge bg-success rounded-pill">4 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                UK Championship
                <span className="badge bg-info text-dark rounded-pill">3 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                The Masters
                <span className="badge bg-warning text-dark rounded-pill">3 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Century Breaks
                <span className="badge bg-primary rounded-pill">800+</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="badge bg-success me-2 fs-6">4x World Champion</span>
            <span className="badge bg-info text-dark me-2 fs-6">UK Championship</span>
            <span className="badge bg-warning text-dark fs-6">Masters Winner</span>
          </div>
        </div>
      </div>
    </div>
  );
}
