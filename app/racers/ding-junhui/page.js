"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DingJunhuiPage() {
  return (
    <div className="container py-5">
      {/* ปุ่มย้อนกลับ */}
      <div className="mb-4">
        <Link href="/racers" className="btn btn-outline-primary shadow-sm">
          ← กลับไปหน้านักแข่ง
        </Link>
      </div>

      {/* การ์ดข้อมูลนักสนุกเกอร์ */}
      <div className="row bg-light rounded shadow p-4">
        <div className="col-lg-5 mb-4 mb-lg-0 text-center">
          <Image
            src="/image/27.jpg"
            alt="Ding Junhui"
            width={400}
            height={550}
            className="img-fluid rounded-4 border border-3 border-primary"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="mb-3 text-primary fw-bold">Ding Junhui</h1>
          <p className="fs-5"><strong>ประเทศ:</strong> จีน</p>
          <p className="text-secondary mb-4">
            Ding Junhui เป็นนักสนุกเกอร์มืออาชีพจากจีน ที่มีชื่อเสียงระดับโลก
            เขาเป็นนักสนุกเกอร์เอเชียคนแรกที่คว้าแชมป์รายการใหญ่อย่าง UK Championship และ Masters
          </p>
          <p className="text-secondary mb-4">
            ด้วยสไตล์การเล่นที่ราบรื่น แม่นยำ และมีเทคนิคยอดเยี่ยมในยุคนี้
            Ding ได้รับการยกย่องว่าเป็นหนึ่งในผู้เล่นที่ทรงพลังที่สุดในวงการสนุกเกอร์โลก
          </p>

          {/* สถิติและรางวัล */}
          <div className="mb-4">
            <h5 className="fw-semibold text-primary mb-3">สถิติและรางวัลเด่น</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                จำนวนแชมป์อาชีพ
                <span className="badge bg-success rounded-pill">15+</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์ UK Championship
                <span className="badge bg-info text-dark rounded-pill">3 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์ Masters
                <span className="badge bg-warning text-dark rounded-pill">1 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                เบรกสูงสุด (Century Breaks)
                <span className="badge bg-primary rounded-pill">500+</span>
              </li>
            </ul>
          </div>

          {/* แท็กความสำเร็จ */}
          <div className="mt-3">
            <span className="badge bg-success me-2 fs-6">UK Champion</span>
            <span className="badge bg-info text-dark me-2 fs-6">Masters Winner</span>
            <span className="badge bg-warning text-dark fs-6">Multiple Ranking Titles</span>
          </div>
        </div>
      </div>
    </div>
  );
}
