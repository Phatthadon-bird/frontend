"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NopponSaengkhamPage() {
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
            src="/image/63.jpeg"
            alt="Noppon Saengkham"
            width={400}
            height={550}
            className="img-fluid rounded-4 border border-3 border-success"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="mb-3 text-success fw-bold">Noppon Saengkham</h1>
          <p className="fs-5"><strong>ประเทศ:</strong> ไทย</p>
          <p className="text-secondary mb-4">
            นพพร แสงคำ นักสนุกเกอร์มืออาชีพชาวไทย ผู้มีเทคนิคและความนิ่งในเกมสูง  
            เขาเป็นตัวแทนประเทศไทยในเวทีระดับโลกและได้รับความนิยมจากแฟนสนุกเกอร์ชาวไทยอย่างมาก
          </p>
          <p className="text-secondary mb-4">
            นพพรมีผลงานที่โดดเด่นในทัวร์นาเมนต์ต่างๆ และเป็นหนึ่งในนักสนุกเกอร์ไทยที่น่าจับตามองมากที่สุด
          </p>

          {/* สถิติ */}
          <div className="mb-4">
            <h5 className="fw-semibold text-success mb-3">สถิติและรางวัลเด่น</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                รอบลึกทัวร์นาเมนต์ระดับโลก
                <span className="badge bg-success rounded-pill">หลายครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Century Breaks
                <span className="badge bg-primary rounded-pill">50+</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                ผู้เล่นไทยในทัวร์โปรมืออาชีพ
                <span className="badge bg-info text-dark rounded-pill">ต่อเนื่อง</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="badge bg-success me-2 fs-6">นักสนุกเกอร์ไทยมืออาชีพ</span>
            <span className="badge bg-primary fs-6">Century Break Maker</span>
          </div>
        </div>
      </div>
    </div>
  );
}
