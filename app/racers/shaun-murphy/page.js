"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShaunMurphyPage() {
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
            src="/image/26.jpg"
            alt="Shaun Murphy"
            width={400}
            height={550}
            className="img-fluid rounded-4 border border-3 border-primary"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="mb-3 text-primary fw-bold">Shaun Murphy</h1>
          <p className="fs-5"><strong>ประเทศ:</strong> อังกฤษ</p>
          <p className="text-secondary mb-3">
            Shaun Murphy เป็นนักสนุกเกอร์มืออาชีพที่มีสไตล์การเล่นที่ละเอียดและแม่นยำ
            เขาคว้าแชมป์โลกในปี 2005 และมีผลงานโดดเด่นในรายการใหญ่มากมาย
          </p>
          <p className="text-secondary mb-4">
            เขามีชื่อเสียงในเรื่องการทำเบรกสูงและความนิ่งในสนามแข่งขัน ทำให้เขาเป็นหนึ่งในผู้เล่นระดับแนวหน้าของโลก
          </p>

          {/* สถิติ */}
          <div className="mb-4">
            <h5 className="fw-semibold text-primary mb-3">สถิติและความสำเร็จ</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์โลก
                <span className="badge bg-success rounded-pill">2005</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์ UK Championship
                <span className="badge bg-info text-dark rounded-pill">2 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                The Masters
                <span className="badge bg-warning text-dark rounded-pill">1 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                เบรกสูงสุด (Century Breaks)
                <span className="badge bg-primary rounded-pill">700+</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="badge bg-success me-2 fs-6">World Champion 2005</span>
            <span className="badge bg-info text-dark me-2 fs-6">UK Championship</span>
            <span className="badge bg-warning text-dark fs-6">Masters Winner</span>
          </div>
        </div>
      </div>
    </div>
  );
}
