"use client";

import Image from "next/image";
import Link from "next/link";

export default function MarkSelbyPage() {
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
            src="/image/22.jpg"
            alt="Mark Selby"
            width={400}
            height={550}
            className="img-fluid rounded-4 border border-3 border-primary"
          />
        </div>
        <div className="col-lg-7">
          <h1 className="mb-3 text-primary fw-bold">Mark Selby</h1>
          <p className="fs-5 mb-3">
            <em>“The Jester from Leicester”</em> — Mark Selby คือหนึ่งในนักสนุกเกอร์ที่ประสบความสำเร็จที่สุดในยุคปัจจุบัน ด้วยสไตล์การเล่นที่นิ่ง เฉียบคม และเน้นการควบคุมเกมที่เหนือชั้น
          </p>
          <p className="text-secondary mb-4">
            เขาคว้าแชมป์โลกหลายสมัย และได้รับการยกย่องในด้านการป้องกันอันยอดเยี่ยมและจิตใจที่แข็งแกร่ง ผลงานเด่น ได้แก่การคว้าแชมป์รายการ World Championship, UK Championship และ The Masters
          </p>

          {/* สถิติ */}
          <div className="mb-4">
            <h5 className="fw-semibold text-primary mb-3">สถิติและความสำเร็จ</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์โลก
                <span className="badge bg-primary rounded-pill">4 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                แชมป์ UK Championship
                <span className="badge bg-success rounded-pill">3 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                The Masters
                <span className="badge bg-warning text-dark rounded-pill">2 ครั้ง</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                เบรกสูงสุด (Century Breaks)
                <span className="badge bg-info text-dark rounded-pill">700+</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="badge bg-primary me-2 fs-6">World Champion</span>
            <span className="badge bg-success me-2 fs-6">UK Championship</span>
            <span className="badge bg-warning text-dark fs-6">Masters Winner</span>
          </div>
        </div>
      </div>
    </div>
  );
}
