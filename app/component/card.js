"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Card() {
  const racers = [
    {
      id: 1,
      name: "Ronnie O'Sullivan",
      description: "เจ้าของสถิติเซนจูรี่เบรกมากที่สุดในโลก (1200+) และเบรก 147 ถึง 15 ครั้ง",
      link: "/racers/ronnie",
      image: "/image/47.jpg",
      centuryBreaks: "1200+",
      maxBreak: "147",
      achievement: "The Rocket",
      stats: [
        { icon: "🎯", label: "Century Breaks", value: "1200+" },
        { icon: "⚡", label: "Maximum 147s", value: "15" },
        { icon: "🏆", label: "World Titles", value: "7" }
      ]
    },
    {
      id: 2,
      name: "John Higgins",
      description: "จอมเก๋าชาวสกอตที่ทำเซนจูรี่เบรกกว่า 900 ครั้ง ตลอดเส้นทางอาชีพ",
      link: "/racers/john-higgins",
      image: "/image/48.jpg",
      centuryBreaks: "900+",
      maxBreak: "147",
      achievement: "The Wizard",
      stats: [
        { icon: "🎯", label: "Century Breaks", value: "900+" },
        { icon: "⚡", label: "Maximum 147s", value: "12" },
        { icon: "🏆", label: "World Titles", value: "4" }
      ]
    },
    {
      id: 3,
      name: "Neil Robertson",
      description: "นักแทงออสซี่ ผู้ทำเซนจูรี่เกิน 800 ครั้ง และแชมป์โลก 1 สมัย",
      link: "/racers/neil-robertson",
      image: "/image/49.jpg",
      centuryBreaks: "800+",
      maxBreak: "147",
      achievement: "The Thunder",
      stats: [
        { icon: "🎯", label: "Century Breaks", value: "800+" },
        { icon: "⚡", label: "Maximum 147s", value: "5" },
        { icon: "🏆", label: "World Titles", value: "1" }
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div 
      className="container-fluid py-5 position-relative"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d1117 100%)",
        minHeight: "100vh"
      }}
    >
      {/* Animated Background */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 87, 34, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(221, 36, 118, 0.1) 0%, transparent 50%)
          `,
          animation: "backgroundPulse 20s ease-in-out infinite",
          top: 0,
          left: 0,
          zIndex: 0
        }}
      ></div>

      {/* Header */}
      <motion.div 
        className="row mb-5 position-relative"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="col text-center">
          {/* Stats Badge */}
          <div 
            className="d-inline-block px-4 py-2 mb-4"
            style={{
              background: "rgba(255, 193, 7, 0.1)",
              border: "1px solid rgba(255, 193, 7, 0.3)",
              borderRadius: "30px",
              backdropFilter: "blur(10px)"
            }}
          >
            <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>📊</span>
            <span 
              className="text-warning fw-semibold"
              style={{ fontSize: "1.1rem", letterSpacing: "1px" }}
            >
              STATISTICS SHOWCASE
            </span>
          </div>

          <h3 
            className="fw-bold mb-4 position-relative d-inline-block"
            style={{ 
              fontSize: "3.5rem",
              background: "linear-gradient(45deg, #ffc107, #ff9800, #ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 8px rgba(255, 193, 7, 0.3)"
            }}
          >
            สถิติน่าสนใจ
            <div 
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{
                width: "120px",
                height: "4px",
                background: "linear-gradient(90deg, #ffc107, #ff9800, #ff5722)",
                borderRadius: "2px"
              }}
            ></div>
          </h3>
          
          <p 
            className="text-light mb-5"
            style={{ 
              fontSize: "1.3rem",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            เบรกสูงสุด และนักแม่นรูที่ทำเซนจูรี่มากที่สุด
          </p>
        </div>
      </motion.div>

      {/* Card Section */}
      <motion.div 
        className="row row-cols-1 row-cols-lg-3 g-5 position-relative"
        style={{ zIndex: 1 }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {racers.map((racer, idx) => (
          <motion.div
            className="col"
            key={racer.id}
            variants={cardVariants}
          >
            <div 
              className="card border-0 rounded-4 overflow-hidden position-relative h-100"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(255, 193, 7, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
              }}
            >
              {/* Rank Badge */}
              <div 
                className="position-absolute top-0 start-0 m-3"
                style={{ zIndex: 10 }}
              >
                <span 
                  className="badge fw-bold px-3 py-2"
                  style={{
                    background: idx === 0 
                      ? "linear-gradient(45deg, #ffd700, #ffb700)" 
                      : idx === 1 
                      ? "linear-gradient(45deg, #c0c0c0, #a8a8a8)"
                      : "linear-gradient(45deg, #cd7f32, #b8860b)",
                    color: "#000",
                    borderRadius: "15px",
                    fontSize: "0.9rem",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
                  }}
                >
                  {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"} #{idx + 1}
                </span>
              </div>

              {/* Achievement Badge */}
              <div 
                className="position-absolute top-0 end-0 m-3"
                style={{ zIndex: 10 }}
              >
                <span 
                  className="badge fw-bold px-3 py-2"
                  style={{
                    background: "rgba(255, 193, 7, 0.2)",
                    color: "#ffc107",
                    border: "1px solid rgba(255, 193, 7, 0.4)",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    backdropFilter: "blur(5px)"
                  }}
                >
                  {racer.achievement}
                </span>
              </div>

              {/* Image Container */}
              <div className="position-relative" style={{ height: "280px" }}>
                <Link href={racer.link} className="d-block h-100">
                  <Image
                    src={racer.image}
                    alt={racer.name}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={idx === 0}
                  />
                  <div 
                    className="position-absolute bottom-0 w-100"
                    style={{
                      background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                      height: "100px"
                    }}
                  ></div>
                  <div 
                    className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{
                      background: "rgba(255, 193, 7, 0.1)",
                      opacity: 0,
                      transition: "opacity 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = 1}
                    onMouseLeave={(e) => e.target.style.opacity = 0}
                  >
                    <span 
                      className="text-warning fw-bold"
                      style={{
                        fontSize: "1.2rem",
                        textShadow: "0 2px 4px rgba(0,0,0,0.8)"
                      }}
                    >
                      View Profile →
                    </span>
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className="card-body p-4">
                <h5 
                  className="card-title fw-bold mb-3 text-center"
                  style={{ 
                    color: "#ffc107",
                    fontSize: "1.4rem",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                  }}
                >
                  {racer.name}
                  <div 
                    className="mx-auto mt-2"
                    style={{
                      width: "60px",
                      height: "3px",
                      background: "linear-gradient(90deg, transparent, #ffc107, transparent)",
                      borderRadius: "2px"
                    }}
                  ></div>
                </h5>

                {/* Stats Grid */}
                <div className="row g-2 mb-4">
                  {racer.stats.map((stat, statIdx) => (
                    <div key={statIdx} className="col-4">
                      <div 
                        className="text-center p-2"
                        style={{
                          background: "rgba(255, 193, 7, 0.1)",
                          border: "1px solid rgba(255, 193, 7, 0.2)",
                          borderRadius: "10px"
                        }}
                      >
                        <div style={{ fontSize: "1.2rem" }}>{stat.icon}</div>
                        <div 
                          className="fw-bold text-warning"
                          style={{ fontSize: "1rem" }}
                        >
                          {stat.value}
                        </div>
                        <div 
                          className="text-muted"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p 
                  className="card-text text-light mb-4"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    opacity: 0.9
                  }}
                >
                  {racer.description}
                </p>

                <div className="text-center">
                  <Link 
                    href={racer.link} 
                    className="btn px-4 py-2 fw-semibold text-decoration-none"
                    style={{
                      background: "linear-gradient(45deg, #ffc107, #ff9800)",
                      color: "#000",
                      borderRadius: "25px",
                      border: "none",
                      transition: "all 0.3s ease",
                      fontSize: "0.95rem"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow = "0 8px 20px rgba(255, 193, 7, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    ดูโปรไฟล์ →
                  </Link>
                </div>
              </div>

              {/* Floating Particles Effect */}
              <div 
                className="position-absolute"
                style={{
                  top: "20%",
                  right: "10%",
                  width: "4px",
                  height: "4px",
                  background: "#ffc107",
                  borderRadius: "50%",
                  opacity: 0.6,
                  animation: "float 3s ease-in-out infinite"
                }}
              ></div>
              <div 
                className="position-absolute"
                style={{
                  top: "60%",
                  left: "15%",
                  width: "3px",
                  height: "3px",
                  background: "#ff9800",
                  borderRadius: "50%",
                  opacity: 0.4,
                  animation: "float 4s ease-in-out infinite reverse"
                }}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div 
        className="row mt-5 position-relative"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="col text-center">
          <div 
            className="d-inline-block px-4 py-3"
            style={{
              background: "rgba(255, 193, 7, 0.1)",
              border: "1px solid rgba(255, 193, 7, 0.3)",
              borderRadius: "50px",
              backdropFilter: "blur(10px)"
            }}
          >
            <span className="text-warning fw-bold me-2">⚡</span>
            <span className="text-light">สถิติเหล่านี้สร้างขึ้นจากความเป็นเลิศและการฝึกฝนอย่างไม่หยุดยั้ง</span>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes backgroundPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .card:hover .position-absolute:nth-last-child(3) {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}