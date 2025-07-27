"use client";

import Image from "next/image";
import Link from "next/link";

export default function RonniePage() {
  return (
    <div className="container py-5 text-light">
      {/* ปุ่มย้อนกลับ */}
      <div className="mb-4">
        <Link href="/#racers" className="btn btn-outline-warning">
          ← กลับไปหน้านักแข่ง
        </Link>
      </div>

      {/* เนื้อหา */}
      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <Image
            src="/image/9.jpg"
            alt="Ronnie O'Sullivan"
            width={400}
            height={400}
            className="rounded-4 shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h1 className="display-4 fw-bold text-warning">Ronnie O'Sullivan</h1>
          <p className="fs-5 fst-italic text-light-emphasis">
            เจ้าของฉายา "The Rocket" นักสนุกเกอร์มืออาชีพชาวอังกฤษ
            ที่ได้รับการยกย่องว่าเก่งที่สุดในประวัติศาสตร์วงการสนุกเกอร์
          </p>
          <ul className="list-group bg-dark rounded-4 mt-4">
            <li className="list-group-item bg-dark text-light border-secondary">
              🏁 ชื่อเต็ม: Ronnie Antonio O'Sullivan
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🎯 ฉายา: The Rocket
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🏆 แชมป์โลก: 7 สมัย (เทียบเท่า Stephen Hendry)
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🎱 เซนจูรี่เบรก: มากกว่า 1,200 ครั้ง (มากที่สุดในโลก)
            </li>
            <li className="list-group-item bg-dark text-light border-secondary">
              🚀 สไตล์: รวดเร็ว แม่นยำ จิตวิทยาแน่น
            </li>
          </ul>
        </div>
      </div>

      {/* เพิ่มเติม */}
     <div className="mt-5 p-4 rounded-4 bg-light shadow-sm">
  <h2 className="text-warning mb-4 fw-bold border-start border-4 border-warning ps-3">
    ประวัติโดยย่อ
  </h2>
  <p className="text-dark fs-5 lh-lg mb-3">
    รอนนี่เกิดเมื่อวันที่ 5 ธันวาคม 1975 ที่เมืองเวิร์ดฟอร์ด ประเทศอังกฤษ  
    เขาเริ่มเล่นสนุกเกอร์ตั้งแต่อายุ 7 ปี และเข้าสู่การเป็นนักอาชีพในปี 1992  
    ด้วยสไตล์การเล่นที่รวดเร็วและแม่นยำ เขาจึงได้ฉายาว่า "The Rocket"
  </p>
  <p className="text-dark fs-5 lh-lg">
    เขาได้รับการยอมรับว่าเป็นนักสนุกเกอร์ที่มีพรสวรรค์สูงที่สุด  
    และเป็นขวัญใจของแฟนๆ ทั่วโลก
  </p>
</div>
    </div>
  );
}
