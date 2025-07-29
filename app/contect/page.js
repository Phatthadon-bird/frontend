"use client";

import { useState } from "react";

export default function ContactUs() {
  const [hover, setHover] = useState(false);

  return (
    <main
      style={{
        maxWidth: 600,
        margin: "3rem auto",
        padding: "2rem",
        fontFamily: "'Sarabun', sans-serif",
        backgroundColor: "#f0f4f8",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        color: "#222",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d47a1",
          fontWeight: "700",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          textShadow: "1px 1px 2px rgba(13, 71, 161, 0.3)",
        }}
      >
        ติดต่อเรา
      </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("ขอบคุณที่ติดต่อเรานะครับ! เราจะติดต่อกลับเร็วๆ นี้");
        }}
      >
        <label
          htmlFor="name"
          style={{ fontWeight: "600", fontSize: "1.1rem", color: "#0d47a1" }}
        >
          ชื่อ-นามสกุล
          <input
            id="name"
            name="name"
            type="text"
            placeholder="กรอกชื่อของคุณ"
            required
            style={{
              marginTop: 6,
              padding: "0.8rem 1rem",
              fontSize: "1rem",
              borderRadius: 12,
              border: "2px solid #90caf9",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0d47a1")}
            onBlur={(e) => (e.target.style.borderColor = "#90caf9")}
          />
        </label>

        <label
          htmlFor="email"
          style={{ fontWeight: "600", fontSize: "1.1rem", color: "#0d47a1" }}
        >
          อีเมล
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            required
            style={{
              marginTop: 6,
              padding: "0.8rem 1rem",
              fontSize: "1rem",
              borderRadius: 12,
              border: "2px solid #90caf9",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0d47a1")}
            onBlur={(e) => (e.target.style.borderColor = "#90caf9")}
          />
        </label>

        <label
          htmlFor="message"
          style={{ fontWeight: "600", fontSize: "1.1rem", color: "#0d47a1" }}
        >
          ข้อความ
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="พิมพ์ข้อความของคุณที่นี่..."
            required
            style={{
              marginTop: 6,
              padding: "1rem",
              fontSize: "1rem",
              borderRadius: 12,
              border: "2px solid #90caf9",
              outline: "none",
              resize: "vertical",
              transition: "border-color 0.3s",
              fontFamily: "'Sarabun', sans-serif",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0d47a1")}
            onBlur={(e) => (e.target.style.borderColor = "#90caf9")}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: hover ? "#0b3d91" : "#1565c0",
            color: "white",
            padding: "1rem",
            fontSize: "1.25rem",
            fontWeight: "700",
            border: "none",
            borderRadius: 16,
            cursor: "pointer",
            boxShadow: hover
              ? "0 8px 20px rgba(21, 101, 192, 0.6)"
              : "0 6px 15px rgba(21, 101, 192, 0.4)",
            transition: "all 0.3s ease",
            letterSpacing: 1,
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          ส่งข้อความ
        </button>
      </form>

      <section
        style={{
          marginTop: "3rem",
          paddingTop: "1rem",
          borderTop: "2px solid #90caf9",
          color: "#444",
          fontSize: "1rem",
          lineHeight: 1.6,
        }}
      >
        <h2 style={{ color: "#0d47a1", fontWeight: "700", marginBottom: "0.5rem" }}>
          ข้อมูลติดต่อเพิ่มเติม
        </h2>
        <p>📞 โทรศัพท์: 061-xxx-7x8x</p>
        <p>📧 อีเมล: BIRD@snookerthailand.com</p>
        <p>📍 ที่อยู่: 123 ถนนเวียงแก้ว เชียงใหม่</p>
      </section>
    </main>
  );
}
