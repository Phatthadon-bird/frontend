"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JuddTrumpPage() {
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
            src="/image/23.jpg"
            alt="Judd Trump"
            width={400}
            height={550}
            className="img-fluid rounded-4 border border-3 border-primary"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="mb-3 text-primary fw-bold">Judd Trump</h1>
          <p className="fs-5"><strong>ประเทศ:</strong> อังกฤษ</p>
          <p className="text-secondary mb-3">
            Judd Trump เป็นนักสนุกเกอร์มืออาชีพที่มีสไตล์การเล่นดุดัน โจมตีรวดเร็ว และมีความมั่นใจสูง 
            เขาเป็นหนึ่งในผู้เล่นรุ่นใหม่ที่เปลี่ยนแปลงภาพลักษณ์ของสนุกเกอร์ให้ทันสมัยและเร้าใจมากขึ้น
          </p>
          <p className="text-secondary mb-4">
            เขาคว้าแชมป์โลกในปี 2019 และยังชนะรายการ Triple Crown ครบถ้วน ได้แก่ UK Championship, The Masters และ World Championship
          </p>

          {/* สถิติและรางวัล */}
          <div className="mb-3">
            <h5 className="fw-semibold text-primary mb-3">สถิติเด่น</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์โลก
                <span className="badge bg-danger rounded-pill">1 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์ UK Championship
                <span className="badge bg-info text-dark rounded-pill">2 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                The Masters
                <span className="badge bg-warning text-dark rounded-pill">2 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                เบรกสูงสุด (Century Breaks)
                <span className="badge bg-primary rounded-pill">600+</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="badge bg-danger me-2 fs-6">World Champion</span>
            <span className="badge bg-info text-dark me-2 fs-6">UK Championship</span>
            <span className="badge bg-warning text-dark fs-6">Masters Winner</span>
          </div>
        </div>
      </div>
    </div>
  );
}
