"use client";

import Image from "next/image";
import Link from "next/link";

export default function MingsaraburiPage() {
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
            src="/image/10.jpg" // เปลี่ยนตามชื่อไฟล์จริง
            alt="มิ้งค์ สระบุรี"
            width={400}
            height={400}
            className="rounded-4 shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-md-7">
          <h1 className="display-4 fw-bold text-warning">มิ้งค์ สระบุรี</h1>
          <p className="fs-5 fst-italic text-light-emphasis">
            นักแข่งดาวรุ่งจากสระบุรี พร้อมสไตล์การขับขี่เฉียบคม  
            ที่กำลังเป็นที่จับตามองในวงการนักซิ่ง
          </p>

          <ul className="list-group bg-dark rounded-4 mt-4">
            <li className="list-group-item bg-dark text-light border-secondary">
              🏁 ชื่อจริง: ณัชชารัตน์ วงศ์หฤทัย
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🎯 ฉายา: ดาวรุ่งสระบุรี
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🏆 ผลงานเด่น: คว้าแชมป์ในรายการแข่งระดับภูมิภาค
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🚗 สไตล์: แม่นยำ รวดเร็ว และใจเย็น
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
          มิ้งค์ สระบุรี หรือชื่อจริง ณัชชารัตน์ วงศ์หฤทัย เป็นนักแข่งดาวรุ่ง  
          ที่เริ่มเข้าสู่วงการแข่งรถตั้งแต่อายุ 16 ปี  
          เธอโดดเด่นด้วยเทคนิคการขับที่เฉียบคมและจิตใจที่มุ่งมั่น  
          ทำให้ได้รับการจับตามองอย่างกว้างขวางในวงการนักแข่ง
        </p>
        <p className="text-dark fs-5 lh-lg">
          ด้วยพรสวรรค์และการฝึกฝนอย่างหนัก มิ้งค์ได้พิสูจน์ตัวเอง  
          ด้วยการคว้าแชมป์ในรายการแข่งระดับภูมิภาคหลายรายการ  
          และตั้งเป้าหมายที่จะก้าวขึ้นสู่เวทีระดับประเทศในอนาคตอันใกล้
        </p>
      </div>
    </div>
  );
}
