// AboutSnooker.js (React/Next.js ตัวอย่าง)
import React from "react";

export default function AboutSnooker() {
  return (
    <main style={{ maxWidth: 900, margin: "2rem auto", padding: "1rem", fontFamily: "Sarabun, sans-serif", color: "#222" }}>
      <h1 style={{ textAlign: "center", color: "#0055aa", marginBottom: "1.5rem" }}>
        เกี่ยวกับเรา - สนุ๊กเกอร์ไทยแลนด์
      </h1>

      <section style={{ backgroundColor: "#f7f9fc", padding: "1.5rem 2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "1rem" }}>
          สนุ๊กเกอร์ไทยแลนด์ คือเว็บไซต์ที่สร้างขึ้นมาเพื่อคนรักสนุ๊กเกอร์ทุกคน ไม่ว่าจะเป็นผู้เล่นมือใหม่ หรือผู้ที่ติดตามการแข่งขันระดับโลก
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          เรามุ่งมั่นนำเสนอข่าวสาร บทความ เทคนิคการเล่น รวมถึงประวัติและข้อมูลของนักสนุ๊กเกอร์ชื่อดัง เพื่อช่วยให้คุณสนุกและพัฒนาฝีมือในกีฬาสนุ๊กเกอร์ได้อย่างเต็มที่
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#0073e6", marginBottom: "1rem" }}>ทีมงานของเรา</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "0.8rem" }}>
            <strong>รอนนี่ โอซุลลิแวน</strong> - นักสนุ๊กเกอร์ระดับตำนานและที่ปรึกษาด้านเทคนิค
          </li>
          <li style={{ marginBottom: "0.8rem" }}>
           
          </li>
          <li>
          
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ color: "#0073e6", marginBottom: "1rem" }}>ติดต่อเรา</h2>
        <p>หากมีข้อสงสัยหรืออยากติดต่อทีมงาน สามารถส่งอีเมลมาที่ <a href="mailto:info@snookerthailand.com" style={{ color: "#0055aa" }}>info@snookerthailand.com</a></p>
      </section>
    </main>
  );
}
