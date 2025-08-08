"use client";

import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Swal from 'sweetalert2'; // ✅ เพิ่ม SweetAlert2

export default function ContactUs() {
  const [hover, setHover] = useState(false);

  return (
    <main
      style={{
        maxWidth: 700,
        margin: "4rem auto",
        padding: "2.5rem",
        fontFamily: "'Sarabun', sans-serif",
        background: "linear-gradient(to right, #e3f2fd, #bbdefb)",
        borderRadius: 20,
        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        animation: "fadeIn 1.5s ease-in-out",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input:focus, textarea:focus {
          outline: none !important;
        }
      `}</style>

      <h1
        style={{
          textAlign: "center",
          color: "#0d47a1",
          fontWeight: "900",
          fontSize: "2.8rem",
          marginBottom: "2rem",
          textShadow: "2px 2px 5px rgba(13, 71, 161, 0.3)",
        }}
      >
        📬 ติดต่อเรา
      </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.6rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          // ✅ SweetAlert2 แสดง popup แทน alert()
          Swal.fire({
            title: 'ส่งข้อความสำเร็จ!',
            text: 'ขอบคุณที่ติดต่อเรานะครับ เราจะติดต่อกลับโดยเร็วที่สุด 😊',
            icon: 'success',
            confirmButtonText: 'ตกลง',
            confirmButtonColor: '#1976d2',
          });
        }}
      >
        {/* Name Field */}
        <label htmlFor="name" style={{ fontWeight: "600", color: "#0d47a1" }}>
          ชื่อ-นามสกุล
          <input
            id="name"
            name="name"
            type="text"
            placeholder="กรอกชื่อของคุณ"
            required
            style={{
              marginTop: 6,
              padding: "0.9rem 1.2rem",
              fontSize: "1rem",
              borderRadius: 12,
              border: "2px solid #90caf9",
              transition: "border-color 0.3s, box-shadow 0.3s",
              width: "100%",
              boxShadow: "inset 0 1px 4px rgba(0,0,0,0.1)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1565c0")}
            onBlur={(e) => (e.target.style.borderColor = "#90caf9")}
          />
        </label>

        {/* Email Field */}
        <label htmlFor="email" style={{ fontWeight: "600", color: "#0d47a1" }}>
          อีเมล
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            required
            style={{
              marginTop: 6,
              padding: "0.9rem 1.2rem",
              fontSize: "1rem",
              borderRadius: 12,
              border: "2px solid #90caf9",
              transition: "border-color 0.3s, box-shadow 0.3s",
              width: "100%",
              boxShadow: "inset 0 1px 4px rgba(0,0,0,0.1)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1565c0")}
            onBlur={(e) => (e.target.style.borderColor = "#90caf9")}
          />
        </label>

        {/* Message Field */}
        <label htmlFor="message" style={{ fontWeight: "600", color: "#0d47a1" }}>
          ข้อความ
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="พิมพ์ข้อความของคุณที่นี่..."
            required
            style={{
              marginTop: 6,
              padding: "1.1rem",
              fontSize: "1rem",
              borderRadius: 12,
              border: "2px solid #90caf9",
              resize: "vertical",
              transition: "border-color 0.3s",
              fontFamily: "'Sarabun', sans-serif",
              width: "100%",
              boxShadow: "inset 0 1px 6px rgba(0,0,0,0.08)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1565c0")}
            onBlur={(e) => (e.target.style.borderColor = "#90caf9")}
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            background: hover
              ? "linear-gradient(to right, #0d47a1, #1565c0)"
              : "linear-gradient(to right, #1976d2, #42a5f5)",
            color: "#fff",
            padding: "1rem",
            fontSize: "1.2rem",
            fontWeight: "700",
            border: "none",
            borderRadius: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
            boxShadow: hover
              ? "0 8px 20px rgba(21, 101, 192, 0.6)"
              : "0 5px 12px rgba(21, 101, 192, 0.4)",
            transition: "all 0.3s ease",
            letterSpacing: "1px",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <FaPaperPlane />
          ส่งข้อความ
        </button>
      </form>

      {/* Contact Info */}
      <section
        style={{
          marginTop: "3rem",
          paddingTop: "1.2rem",
          borderTop: "2px solid #90caf9",
          color: "#0d47a1",
          fontSize: "1.05rem",
          lineHeight: 1.7,
        }}
      >
        <h2 style={{ fontWeight: "700", marginBottom: "0.8rem" }}>
          📞 ข้อมูลติดต่อเพิ่มเติม
        </h2>
        <p>
          <FaPhoneAlt style={{ marginRight: 8 }} />
          โทรศัพท์: <strong style={{ color: "#222" }}>061-xxx-7x8x</strong>
        </p>
        <p>
          <FaEnvelope style={{ marginRight: 8 }} />
          อีเมล:{" "}
          <strong style={{ color: "#222" }}>BIRD@snookerthailand.com</strong>
        </p>
        <p>
          <FaMapMarkerAlt style={{ marginRight: 8 }} />
          ที่อยู่: <strong style={{ color: "#222" }}>123 ถนนเวียงแก้ว เชียงใหม่</strong>
        </p>
      </section>
    </main>
  );
}
