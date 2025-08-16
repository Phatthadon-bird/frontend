'use client';

import Link from "next/link";
import { useState } from "react";

const newsList = [
  {
    id: 1,
    title: "รอนนี่ โอซุลลิแวน คว้าแชมป์โลกสมัยที่ 7",
    date: "2025-07-20",
    summary: "รอนนี่ โอซุลลิแวน นักสนุ๊กเกอร์ชื่อดังจากอังกฤษ คว้าแชมป์โลกครั้งล่าสุดอย่างยิ่งใหญ่...",
    image: "/image/31.jpg",
    slug: "ronnie-osullivan-world-champion-2025",
    category: "แชมป์โลก",
    featured: true,
    views: 1250,
    readTime: 5
  },
  {
    id: 2,
    title: "มาร์ค เซลบี้ ยืนยันเข้าร่วมแข่งขันรายการใหญ่ปลายปีนี้",
    date: "2025-07-15",
    summary: "มาร์ค เซลบี้ เตรียมพร้อมลงแข่งขันในทัวร์นาเมนต์ระดับโลกที่กำลังจะมาถึงในอีกไม่กี่เดือน...",
    image: "/image/32.jpg",
    slug: "mark-selby-confirm-competition-2025",
    category: "ทัวร์นาเมนต์",
    featured: false,
    views: 890,
    readTime: 3
  },
  {
    id: 3,
    title: "จัดด์ ทรัมป์ เปิดตัวเทคนิคใหม่สุดล้ำในเกมสนุ๊กเกอร์",
    date: "2025-07-10",
    summary: "จัดด์ ทรัมป์ เผยเทคนิคใหม่ในการเล่นที่ช่วยเพิ่มโอกาสชนะและทำคะแนนสูงขึ้นอย่างน่าทึ่ง...",
    image: "/image/33.jpeg",
    slug: "judd-trump-new-technique",
    category: "เทคนิค",
    featured: false,
    views: 675,
    readTime: 4
  },
  {
    id: 4,
    title: "โจว ซินถง โชว์ฟอร์มยอดเยี่ยมในทัวร์นาเมนต์ล่าสุด",
    date: "2025-07-25",
    summary: "โจว ซินถง นักสนุ๊กเกอร์ดาวรุ่งจากจีน ทำผลงานได้อย่างน่าประทับใจในรายการแข่งขันล่าสุด...",
    image: "/image/35.jpg",
    slug: "zhao-xintong-impressive-performance-2025",
    category: "ผลงาน",
    featured: false,
    views: 1120,
    readTime: 6
  },
];

export default function NewsPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'แชมป์โลก', 'ทัวร์นาเมนต์', 'เทคนิค', 'ผลงาน'];
  
  const filteredNews = filter === 'all' 
    ? newsList 
    : newsList.filter(news => news.category === filter);

  const getCategoryColor = (category) => {
    const colors = {
      'แชมป์โลก': '#f59e0b',
      'ทัวร์นาเมนต์': '#10b981',
      'เทคนิค': '#8b5cf6',
      'ผลงาน': '#ef4444'
    };
    return colors[category] || '#6b7280';
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'k';
    }
    return views.toString();
  };

  return (
    <>
      <div className="news-page">
        {/* Animated Background */}
        <div className="bg-animation">
          <div className="floating-orbs">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`orb orb-${i}`}></div>
            ))}
          </div>
          <div className="geometric-shapes">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`geo-shape shape-${i}`}></div>
            ))}
          </div>
        </div>

        <div className="container">
          {/* Header Section */}
          <div className="header-section">
            <Link href="/">
              <button className="back-btn">
                <span className="btn-icon">🏠</span>
                <span className="btn-text">กลับหน้าหลัก</span>
                <div className="btn-glow"></div>
              </button>
            </Link>

            <div className="page-title">
              <div className="title-decoration">
                <div className="snooker-balls">
                  <div className="ball red"></div>
                  <div className="ball yellow"></div>
                  <div className="ball green"></div>
                  <div className="ball brown"></div>
                  <div className="ball blue"></div>
                  <div className="ball pink"></div>
                  <div className="ball black"></div>
                </div>
              </div>
              <h1 className="main-title">
                <span className="title-icon">🎱</span>
                ข่าวสนุกเกอร์ล่าสุด
                <span className="title-highlight">Latest Snooker News</span>
              </h1>
              <div className="title-underline">
                <div className="underline-animated"></div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="filter-section">
              <div className="filter-label">🏷️ หมวดหมู่:</div>
              <div className="filter-buttons">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn ${filter === cat ? 'active' : ''}`}
                    onClick={() => setFilter(cat)}
                    style={{
                      '--category-color': cat !== 'all' ? getCategoryColor(cat) : '#fbbf24'
                    }}
                  >
                    {cat === 'all' ? '🌟 ทั้งหมด' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="news-grid">
            {filteredNews.map((news, index) => (
              <div
                key={news.id}
                className={`news-card ${news.featured ? 'featured' : ''}`}
                style={{ 
                  '--delay': `${index * 0.1}s`,
                  '--category-color': getCategoryColor(news.category)
                }}
                onMouseEnter={() => setHoveredCard(news.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {news.featured && (
                  <div className="featured-badge">
                    <span className="badge-icon">⭐</span>
                    <span className="badge-text">เด่น</span>
                  </div>
                )}

                <div className="card-header">
                  <div className="image-container">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="news-image"
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <div className="category-badge" style={{ background: getCategoryColor(news.category) }}>
                          {news.category}
                        </div>
                        <div className="view-details">
                          <span className="details-icon">👁️</span>
                          <span className="details-text">ดูรายละเอียด</span>
                        </div>
                      </div>
                    </div>
                    <div className="image-shine"></div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="news-meta">
                    <div className="meta-item">
                      <span className="meta-icon">📅</span>
                      <span className="meta-text">
                        {new Date(news.date).toLocaleDateString("th-TH", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">👀</span>
                      <span className="meta-text">{formatViews(news.views)}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <span className="meta-text">{news.readTime} นาที</span>
                    </div>
                  </div>

                  <h2 className="news-title">{news.title}</h2>
                  <p className="news-summary">{news.summary}</p>

                  <div className="card-footer">
                    <Link href={`/news/${news.slug}`}>
                      <button className="read-more-btn">
                        <span className="btn-icon">📖</span>
                        <span className="btn-text">อ่านเพิ่มเติม</span>
                        <div className="btn-arrow">→</div>
                        <div className="btn-ripple"></div>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="card-glow"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-icon">📰</div>
                <div className="stat-number">{filteredNews.length}</div>
                <div className="stat-label">ข่าวทั้งหมด</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">{filteredNews.filter(n => n.featured).length}</div>
                <div className="stat-label">ข่าวเด่น</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">👀</div>
                <div className="stat-number">{formatViews(filteredNews.reduce((sum, n) => sum + n.views, 0))}</div>
                <div className="stat-label">การดูทั้งหมด</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">📚</div>
                <div className="stat-number">{Math.round(filteredNews.reduce((sum, n) => sum + n.readTime, 0) / filteredNews.length)}</div>
                <div className="stat-label">เวลาอ่านเฉลี่ย (นาที)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .news-page {
          min-height: 100vh;
          background: linear-gradient(135deg, 
            #0f0f23 0%, 
            #1a1a2e 25%, 
            #16213e 50%, 
            #0f3460 75%, 
            #533483 100%);
          background-size: 400% 400%;
          animation: gradientFlow 15s ease-in-out infinite;
          position: relative;
          overflow-x: hidden;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .bg-animation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-orbs {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 70%, transparent 100%);
          animation: floatOrbs 12s ease-in-out infinite;
        }

        .orb-0 { width: 80px; height: 80px; top: 10%; left: 10%; animation-delay: 0s; }
        .orb-1 { width: 120px; height: 120px; top: 20%; right: 15%; animation-delay: 2s; }
        .orb-2 { width: 60px; height: 60px; bottom: 30%; left: 20%; animation-delay: 4s; }
        .orb-3 { width: 100px; height: 100px; top: 60%; right: 25%; animation-delay: 6s; }

        @keyframes floatOrbs {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.6; }
          50% { transform: translate(-15px, 25px) scale(0.9); opacity: 0.4; }
          75% { transform: translate(25px, -15px) scale(1.05); opacity: 0.7; }
        }

        .geometric-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .geo-shape {
          position: absolute;
          background: rgba(255, 193, 7, 0.1);
          animation: rotateShapes 20s linear infinite;
        }

        .shape-0 { 
          width: 40px; height: 40px; 
          top: 15%; left: 80%; 
          transform: rotate(45deg);
          animation-delay: 0s;
        }
        .shape-1 { 
          width: 60px; height: 60px; 
          bottom: 20%; right: 10%; 
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation-delay: 5s;
        }

        @keyframes rotateShapes {
          from { transform: rotate(0deg); opacity: 0.2; }
          to { transform: rotate(360deg); opacity: 0.2; }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          position: relative;
          z-index: 2;
        }

        .header-section {
          margin-bottom: 60px;
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 193, 7, 0.3);
          color: #fbbf24;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
          position: relative;
          overflow: hidden;
        }

        .back-btn:hover {
          background: rgba(255, 193, 7, 0.2);
          border-color: rgba(255, 193, 7, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 193, 7, 0.3);
        }

        .btn-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 193, 7, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .back-btn:hover .btn-glow {
          left: 100%;
        }

        .page-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .title-decoration {
          margin-bottom: 30px;
          display: flex;
          justify-content: center;
        }

        .snooker-balls {
          display: flex;
          gap: 8px;
          animation: ballRoll 3s ease-in-out infinite;
        }

        .ball {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .ball.red { background: #dc2626; }
        .ball.yellow { background: #fbbf24; }
        .ball.green { background: #10b981; }
        .ball.brown { background: #a3542f; }
        .ball.blue { background: #3b82f6; }
        .ball.pink { background: #ec4899; }
        .ball.black { background: #1f2937; }

        @keyframes ballRoll {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }

        .main-title {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 40px;
          margin: 0;
          border: 2px solid rgba(255, 193, 7, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          color: white;
          font-size: 3rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          position: relative;
          overflow: hidden;
        }

        .main-title::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,193,7,0.1), transparent);
          animation: titleShimmer 4s infinite;
          transform: rotate(45deg);
        }

        @keyframes titleShimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .title-icon {
          font-size: 3.5rem;
          display: block;
          margin-bottom: 15px;
          animation: iconBounce 2s ease-in-out infinite;
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .title-highlight {
          display: block;
          font-size: 1.2rem;
          font-weight: 400;
          margin-top: 10px;
          opacity: 0.8;
          color: #fbbf24;
        }

        .title-underline {
          margin-top: 20px;
          height: 4px;
          background: rgba(255, 193, 7, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .underline-animated {
          height: 100%;
          background: linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24);
          background-size: 200% 100%;
          animation: underlineFlow 2s ease-in-out infinite;
          border-radius: 2px;
        }

        @keyframes underlineFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .filter-section {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
        }

        .filter-label {
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          flex: 1;
        }

        .filter-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: var(--category-color);
          color: var(--category-color);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: var(--category-color);
          border-color: var(--category-color);
          color: white;
          box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .news-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
          cursor: pointer;
          position: relative;
          animation: cardSlideUp 0.8s ease-out both;
          animation-delay: var(--delay);
        }

        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .news-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          border-color: var(--category-color);
        }

        .news-card.featured {
          border-color: #fbbf24;
          box-shadow: 0 15px 35px rgba(251, 191, 36, 0.2);
        }

        .news-card.featured:hover {
          box-shadow: 0 25px 50px rgba(251, 191, 36, 0.3);
        }

        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3);
        }

        .image-container {
          position: relative;
          overflow: hidden;
        }

        .news-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .news-card:hover .news-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
        }

        .news-card:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .category-badge {
          align-self: flex-start;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .view-details {
          align-self: center;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          padding: 12px 24px;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .image-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .news-card:hover .image-shine {
          left: 100%;
        }

        .card-body {
          padding: 30px;
          color: white;
        }

        .news-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 14px;
        }

        .meta-icon {
          font-size: 16px;
        }

        .meta-text {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .news-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .news-summary {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 25px;
          opacity: 0.9;
        }

        .card-footer {
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .read-more-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--category-color), var(--category-color));
          color: white;
          border: none;
          padding: 16px;
          border-radius: 15px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .read-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .btn-arrow {
          margin-left: auto;
          transition: transform 0.3s ease;
        }

        .btn-arrow {
          margin-left: auto;
          transition: transform 0.3s ease;
        }

        .read-more-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        .btn-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }

        .read-more-btn:active .btn-ripple {
          width: 200px;
          height: 200px;
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 25px;
          background: linear-gradient(135deg, transparent, var(--category-color), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: -1;
        }

        .news-card:hover .card-glow {
          opacity: 0.1;
        }

        .stats-section {
          animation: slideUp 0.8s ease-out 0.5s both;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stats-container {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 40px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .stat-item {
          text-align: center;
          color: white;
          position: relative;
          padding: 20px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.1);
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          animation: statFloat 3s ease-in-out infinite;
        }

        .stat-item:nth-child(2) .stat-icon { animation-delay: 0.5s; }
        .stat-item:nth-child(3) .stat-icon { animation-delay: 1s; }
        .stat-item:nth-child(4) .stat-icon { animation-delay: 1.5s; }

        @keyframes statFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fbbf24;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 30px 15px;
          }

          .main-title {
            font-size: 2.2rem;
            padding: 30px 20px;
          }

          .title-icon {
            font-size: 2.8rem;
          }

          .title-highlight {
            font-size: 1rem;
          }

          .news-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .news-card {
            margin: 0 10px;
          }

          .card-body {
            padding: 25px;
          }

          .news-title {
            font-size: 1.3rem;
          }

          .filter-section {
            flex-direction: column;
            align-items: stretch;
            gap: 15px;
          }

          .filter-buttons {
            justify-content: center;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 30px 20px;
          }

          .stat-icon {
            font-size: 2.5rem;
          }

          .stat-number {
            font-size: 2rem;
          }

          .snooker-balls {
            gap: 6px;
          }

          .ball {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.8rem;
            padding: 25px 15px;
          }

          .title-icon {
            font-size: 2.4rem;
          }

          .news-image {
            height: 200px;
          }

          .card-body {
            padding: 20px;
          }

          .news-title {
            font-size: 1.2rem;
          }

          .news-summary {
            font-size: 0.95rem;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 14px;
          }

          .stats-container {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 25px 15px;
          }

          .back-btn {
            padding: 10px 20px;
            font-size: 14px;
          }

          .snooker-balls {
            gap: 4px;
          }

          .ball {
            width: 14px;
            height: 14px;
          }
        }

        /* Additional animations for enhanced UX */
        .news-meta .meta-item {
          animation: fadeInUp 0.6s ease-out both;
        }

        .news-meta .meta-item:nth-child(1) { animation-delay: 0.1s; }
        .news-meta .meta-item:nth-child(2) { animation-delay: 0.2s; }
        .news-meta .meta-item:nth-child(3) { animation-delay: 0.3s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.5);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.7);
        }

        /* Loading animation for images */
        .news-image {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Enhanced hover effects */
        .news-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .news-card:hover::before {
          opacity: 1;
        }

        /* Pulse animation for featured cards */
        .news-card.featured::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24);
          background-size: 200% 200%;
          border-radius: 27px;
          z-index: -1;
          animation: featuredPulse 3s ease-in-out infinite;
        }

        @keyframes featuredPulse {
          0%, 100% { background-position: 0% 50%; opacity: 0.3; }
          50% { background-position: 100% 50%; opacity: 0.6; }
        }
      `}</style>
    </>
  )
}