"use client";

import React from "react";
import { FaUserTie, FaCrown, FaStar, FaEnvelope } from "react-icons/fa";

export default function AboutSnooker() {
  return (
    <main
      style={{
        maxWidth: 1000,
        margin: "3rem auto",
        padding: "2.5rem",
        fontFamily: "'Sarabun', sans-serif",
        color: "#fff",
        background: "linear-gradient(135deg, #001f3f, #0074D9)",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>

      <h1
        style={{
          textAlign: "center",
          color: "#FFD700",
          marginBottom: "2rem",
          fontWeight: "900",
          fontSize: "2.8rem",
          textShadow: "2px 2px 5px rgba(255, 255, 255, 0.4)",
        }}
      >
        🎱 เกี่ยวกับเรา - สนุ๊กเกอร์ไทยแลนด์
      </h1>

      <section
        style={{
          backgroundColor: "#ffffffdd",
          padding: "2rem 2.5rem",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          lineHeight: "1.8",
          fontSize: "1.2rem",
          color: "#222",
          animation: "fadeIn 1.8s ease-in-out",
        }}
      >
        <p style={{ marginBottom: "1.5rem" }}>
          สนุ๊กเกอร์ไทยแลนด์ คือเว็บไซต์ที่สร้างขึ้นมาเพื่อคนรักสนุ๊กเกอร์ทุกคน
          ไม่ว่าจะเป็นผู้เล่นมือใหม่ หรือผู้ที่ติดตามการแข่งขันระดับโลก
        </p>
        <p>
          เรามุ่งมั่นนำเสนอข่าวสาร บทความ เทคนิคการเล่น รวมถึงประวัติและข้อมูลของนักสนุ๊กเกอร์ชื่อดัง
          เพื่อช่วยให้คุณสนุกและพัฒนาฝีมือในกีฬาสนุ๊กเกอร์ได้อย่างเต็มที่
        </p>
      </section>

      <section style={{ marginTop: "3rem", animation: "fadeIn 2s ease-in-out" }}>
        <h2
          style={{
            color: "#00d9ff",
            marginBottom: "1.2rem",
            borderBottom: "4px solid #00d9ff",
            display: "inline-block",
            paddingBottom: "0.4rem",
            fontSize: "1.8rem",
          }}
        >
          🏆 นักแข่งดีเด่น
        </h2>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            fontSize: "1.15rem",
            color: "#000",
          }}
        >
          {[
            {
              name: "รอนนี่ โอซุลลิแวน",
              role: "นักสนุ๊กเกอร์ระดับตำนานและที่ปรึกษาด้านเทคนิค",
              icon: <FaCrown style={{ color: "#FFD700" }} />,
            },
            {
              name: "มาร์ค เซลบี้",
              role: "แชมป์โลกและนักวางแผนเกมชั้นยอด",
              icon: <FaUserTie style={{ color: "#0055aa" }} />,
            },
            {
              name: "จัดด์ ทรัมป์",
              role: "นักสนุ๊กเกอร์พรสวรรค์และดาวรุ่งพุ่งแรง",
              icon: <FaStar style={{ color: "#ff5e00" }} />,
            },
          ].map((player, index) => (
            <li
              key={index}
              style={{
                marginBottom: "1.2rem",
                background: "linear-gradient(to right, #e0f7ff, #cceeff)",
                padding: "1rem 1.3rem",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              {player.icon}
              <span>
                {player.name} - <span style={{ fontWeight: 400 }}>{player.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "3rem", fontSize: "1.15rem", color: "#fff", animation: "fadeIn 2.2s ease-in-out" }}>
        <h2
          style={{
            color: "#00e0ff",
            marginBottom: "1rem",
            borderBottom: "3px solid #00e0ff",
            display: "inline-block",
            paddingBottom: "0.3rem",
            fontSize: "1.7rem",
          }}
        >
          📩 ติดต่อเรา
        </h2>
        <p>
          หากมีข้อสงสัยหรืออยากติดต่อทีมงาน สามารถส่งอีเมลมาที่{" "}
          <a
            href="mailto:info@snookerthailand.com"
            style={{
              color: "#FFD700",
              fontWeight: "700",
              textDecoration: "underline dotted",
            }}
          >
            <FaEnvelope style={{ marginRight: "0.4rem" }} />
            BIRD@snookerthailand.com
          </a>
        </p>
      </section>
    </main>
  );
}
