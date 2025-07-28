import React from "react";

export default function AboutSnooker() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "3rem auto",
        padding: "2rem",
        fontFamily: "'Sarabun', sans-serif",
        color: "#333",
        backgroundColor: "#f0f4f8",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0073e6",
          marginBottom: "2rem",
          fontWeight: "700",
          textShadow: "1px 1px 3px rgba(0, 115, 230, 0.4)",
        }}
      >
        เกี่ยวกับเรา - สนุ๊กเกอร์ไทยแลนด์
      </h1>

      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem 2.5rem",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
          lineHeight: "1.7",
          fontSize: "1.15rem",
          color: "#444",
        }}
      >
        <p style={{ marginBottom: "1.3rem" }}>
          สนุ๊กเกอร์ไทยแลนด์ คือเว็บไซต์ที่สร้างขึ้นมาเพื่อคนรักสนุ๊กเกอร์ทุกคน
          ไม่ว่าจะเป็นผู้เล่นมือใหม่ หรือผู้ที่ติดตามการแข่งขันระดับโลก
        </p>
        <p>
          เรามุ่งมั่นนำเสนอข่าวสาร บทความ เทคนิคการเล่น รวมถึงประวัติและข้อมูลของนักสนุ๊กเกอร์ชื่อดัง
          เพื่อช่วยให้คุณสนุกและพัฒนาฝีมือในกีฬาสนุ๊กเกอร์ได้อย่างเต็มที่
        </p>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2
          style={{
            color: "#0055aa",
            marginBottom: "1.2rem",
            borderBottom: "3px solid #0055aa",
            display: "inline-block",
            paddingBottom: "0.3rem",
          }}
        >
         นักแข่งดีเด่น
        </h2>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            fontSize: "1.1rem",
            color: "#222",
          }}
        >
          <li
            style={{
              marginBottom: "1rem",
              backgroundColor: "#e7f0ff",
              padding: "0.8rem 1rem",
              borderRadius: "8px",
              boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.05)",
              fontWeight: "600",
            }}
          >
            รอนนี่ โอซุลลิแวน - นักสนุ๊กเกอร์ระดับตำนานและที่ปรึกษาด้านเทคนิค
          </li>
          <li
            style={{
              marginBottom: "1rem",
              backgroundColor: "#e7f0ff",
              padding: "0.8rem 1rem",
              borderRadius: "8px",
              boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.05)",
              fontWeight: "600",
            }}
          >
            มาร์ค เซลบี้ - แชมป์โลกและนักวางแผนเกมชั้นยอด
          </li>
          <li
            style={{
              marginBottom: "1rem",
              backgroundColor: "#e7f0ff",
              padding: "0.8rem 1rem",
              borderRadius: "8px",
              boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.05)",
              fontWeight: "600",
            }}
          >
            จัดด์ ทรัมป์ - นักสนุ๊กเกอร์พรสวรรค์และดาวรุ่งพุ่งแรง
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "3rem", fontSize: "1.1rem", color: "#222" }}>
        <h2
          style={{
            color: "#0055aa",
            marginBottom: "1rem",
            borderBottom: "3px solid #0055aa",
            display: "inline-block",
            paddingBottom: "0.3rem",
          }}
        >
          ติดต่อเรา
        </h2>
        <p>
          หากมีข้อสงสัยหรืออยากติดต่อทีมงาน สามารถส่งอีเมลมาที่{" "}
          <a
            href="mailto:info@snookerthailand.com"
            style={{ color: "#0073e6", fontWeight: "600", textDecoration: "underline" }}
          >
            info@snookerthailand.com
          </a>
        </p>
      </section>
    </main>
  );
}
