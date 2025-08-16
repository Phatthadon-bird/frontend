'use client';

import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaVideo, FaPlay, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";

const highlights = [
  {
    id: 1,
    match: "Zhao Xintong vs Ronnie O'Sullivan",
    date: "2025-05-02",
    venue: "World Snooker Championship (Semi‑final)",
    summary: "Zhao ทำ session 2 ชนะรวด 8‑0 พร้อมเซนจูรี่หลายครั้ง ก่อนชนะ Ronnie O'Sullivan 17‑7",
    slug: "https://www.youtube.com/watch?v=QgNjRn2n1CQ",
    image: "/image/40.jpg",
    score: "17-7",
    category: "Semi-final"
  },
  {
    id: 2,
    match: "Mark Williams vs Judd Trump",
    date: "2025-05-03",
    venue: "World Snooker Championship (Semi‑final)",
    summary: "Williams พลิกแซง Trump จากสถานะตามหลัง 7‑3 จนชนะ 17‑14 เพื่อเข้าสู่รอบชิงฯ",
    slug: "https://www.youtube.com/watch?v=k7Hy9CBr7h4",
    image: "/image/38.jpg",
    score: "17-14",
    category: "Semi-final"
  },
  {
    id: 3,
    match: "Zhao Xintong vs Mark Williams",
    date: "2025-05-05",
    venue: "World Snooker Championship (Final)",
    summary: "Zhao กลายเป็นแชมป์โลกคนแรกของจีน ด้วยชัยชนะเหนือ Williams 18‑12",
    slug: "https://www.youtube.com/watch?v=9L3I5y6OhiU",
    image: "/image/41.jpg",
    score: "18-12",
    category: "Final"
  },
];

export default function HighlightsPage() {
  return (
    <div className="page-wrapper">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-ball ball-1"></div>
        <div className="floating-ball ball-2"></div>
        <div className="floating-ball ball-3"></div>
        <div className="floating-ball ball-4"></div>
        <div className="floating-ball ball-5"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <Link href="/" className="back-button">
            <FaArrowLeft />
            <span>กลับหน้าหลัก</span>
          </Link>

          <div className="title-section">
            <div className="title-icon">
              <FaVideo />
            </div>
            <h1 className="main-title">ไฮไลต์การแข่งขันจริง</h1>
            <p className="subtitle">รีวิวโมเมนต์สำคัญจากการแข่งขันสนุกเกอร์ระดับโลก</p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="highlights-grid">
          {highlights.map(({ id, match, date, venue, summary, slug, image, score, category }, index) => (
            <div key={id} className="highlight-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-inner">
                {/* Category Badge */}
                <div className={`category-badge ${category === 'Final' ? 'final' : 'semifinal'}`}>
                  <FaTrophy />
                  {category}
                </div>

                {/* Image Container */}
                <div className="image-container">
                  <Image
                    src={image}
                    alt={match}
                    width={500}
                    height={280}
                    className="match-image"
                    quality={100}
                  />
                  <div className="image-overlay">
                    <div className="play-button">
                      <FaPlay />
                    </div>
                  </div>
                  <div className="score-overlay">
                    {score}
                  </div>
                </div>

                {/* Content */}
                <div className="card-content">
                  <div className="match-info">
                    <div className="date-venue">
                      <div className="info-item">
                        <FaCalendarAlt />
                        <span>{new Date(date).toLocaleDateString("th-TH", { 
                          year: "numeric", 
                          month: "short", 
                          day: "numeric" 
                        })}</span>
                      </div>
                      <div className="info-item">
                        <FaMapMarkerAlt />
                        <span>{venue}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="match-title">
                    {match}
                  </h3>

                  <p className="match-summary">
                    {summary}
                  </p>

                  <a 
                    href={slug} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="watch-button"
                  >
                    <FaPlay />
                    <span>ชมวิดีโอการแข่งขัน</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f4c75 0%, #3282b8 50%, #bbe1fa 100%);
          position: relative;
          overflow-x: hidden;
          font-family: 'Sarabun', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-ball {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
        }

        .ball-1 {
          width: 120px;
          height: 120px;
          background: #ff6b6b;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .ball-2 {
          width: 80px;
          height: 80px;
          background: #4ecdc4;
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .ball-3 {
          width: 100px;
          height: 100px;
          background: #45b7d1;
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }

        .ball-4 {
          width: 60px;
          height: 60px;
          background: #f9ca24;
          top: 30%;
          right: 20%;
          animation-delay: 1s;
        }

        .ball-5 {
          width: 90px;
          height: 90px;
          background: #6c5ce7;
          bottom: 40%;
          right: 5%;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-30px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-40px) rotate(270deg); 
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        .header-section {
          text-align: center;
          margin-bottom: 4rem;
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
          color: white;
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 25px rgba(255, 107, 107, 0.4),
            0 0 0 2px rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.5);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .back-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .back-button:hover::before {
          left: 100%;
        }

        .back-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(255, 107, 107, 0.6),
            0 0 0 3px rgba(255, 255, 255, 0.4);
          background: linear-gradient(135deg, #ff5252, #e53e3e);
          color: white;
          text-decoration: none;
        }

        .back-button:active {
          transform: translateY(-2px) scale(1.02);
        }

        .back-button svg {
          font-size: 1.2rem;
          filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
        }

        .title-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          padding: 3rem 2rem;
          margin: 2rem auto;
          max-width: 800px;
        }

        .title-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
          color: white;
          border-radius: 50%;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin: 0 0 1rem 0;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.02em;
        }

        .subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 400;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .highlight-card {
          animation: fadeInUp 0.8s ease-out both;
          transform-origin: center bottom;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-inner {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .card-inner:hover {
          transform: translateY(-15px) rotateX(5deg);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }

        .category-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          color: white;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .category-badge.final {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #8b4513;
          text-shadow: none;
        }

        .category-badge.semifinal {
          background: linear-gradient(135deg, #c0392b, #e74c3c);
        }

        .image-container {
          position: relative;
          overflow: hidden;
        }

        .match-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-inner:hover .match-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card-inner:hover .image-overlay {
          opacity: 1;
        }

        .play-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.9);
          color: #0f4c75;
          border-radius: 50%;
          font-size: 2rem;
          transition: all 0.3s ease;
        }

        .play-button:hover {
          transform: scale(1.1);
          background: white;
        }

        .score-overlay {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #0f4c75, #3282b8);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          padding: 2rem;
        }

        .date-venue {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .info-item svg {
          color: #3282b8;
        }

        .match-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f4c75;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }

        .match-summary {
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .watch-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #0f4c75, #3282b8);
          color: white;
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 6px 20px rgba(15, 76, 117, 0.3);
          position: relative;
          overflow: hidden;
        }

        .watch-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .watch-button:hover::before {
          left: 100%;
        }

        .watch-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(15, 76, 117, 0.4);
          color: white;
          text-decoration: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .title-section {
            padding: 2rem 1.5rem;
          }

          .card-content {
            padding: 1.5rem;
          }

          .match-title {
            font-size: 1.3rem;
          }

          .card-inner:hover {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .card-content {
            padding: 1rem;
          }

          .date-venue {
            gap: 0.3rem;
          }

          .info-item {
            font-size: 0.8rem;
          }

          .floating-ball {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}