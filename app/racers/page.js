'use client';

import Link from "next/link";

export default function Racers() {
  const currentRacers = [
    { id: 1, name: "Ronnie O'Sullivan", country: "England", image: "/image/12.jpg", slug: "ronnie", ranking: "1", titles: "39" },
    { id: 2, name: "Mark Selby", country: "England", image: "/image/15.jpg", slug: "mark-selby", ranking: "2", titles: "22" },
    { id: 3, name: "Judd Trump", country: "England", image: "/image/16.jpg", slug: "judd-trump", ranking: "3", titles: "28" },
    { id: 4, name: "Neil Robertson", country: "Australia", image: "/image/17.jpg", slug: "neil-robertson", ranking: "4", titles: "23" },
    { id: 5, name: "John Higgins", country: "Scotland", image: "/image/18.jpg", slug: "john-higgins", ranking: "5", titles: "31" },
    { id: 6, name: "Shaun Murphy", country: "England", image: "/image/19.jpg", slug: "shaun-murphy", ranking: "6", titles: "10" },
    { id: 7, name: "Ding Junhui", country: "China", image: "/image/20.jpg", slug: "ding-junhui", ranking: "7", titles: "14" },
    { id: 8, name: "Zhao Xintong", country: "China", image: "/image/28.jpg", slug: "zhao-xintong", ranking: "8", titles: "5" },
    { id: 9, name: "Mink Saraburi", country: "Thailand", image: "/image/29.jpg", slug: "mingsaraburi", ranking: "9", titles: "2" },
    { id: 10, name: "Thepchaiya Un-Nooh", country: "Thailand", image: "/image/30.jpg", slug: "tepsachaiya", ranking: "10", titles: "3" },
    { id: 11, name: "Noppon Saengkham", country: "Thailand", image: "/image/58.jpg", slug: "noppon-saengkham", ranking: "11", titles: "1" },
    { id: 12, name: "James Wattana", country: "Thailand", image: "/image/59.jpg", slug: "james-wattana", ranking: "12", titles: "8" },
  ];

  const getCountryFlag = (country) => {
    const flags = {
      "England": "🏴",
      "Scotland": "🏴",
      "Australia": "🇦🇺",
      "China": "🇨🇳",
      "Thailand": "🇹🇭"
    };
    return flags[country] || "🌍";
  };

  const renderRacerCards = (racers) =>
    racers.map((racer) => (
      <div key={racer.id} className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
        <Link href={`/racers/${racer.slug}`} className="text-decoration-none">
          <div
            className="card h-100 border-0 position-relative overflow-hidden"
            style={{ 
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              borderRadius: "20px",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(255, 193, 7, 0.1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 193, 7, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(255, 193, 7, 0.1)";
            }}
          >
            {/* Ranking Badge */}
            <div 
              className="position-absolute top-0 start-0 m-3"
              style={{ zIndex: 10 }}
            >
              <span 
                className="badge fw-bold px-3 py-2"
                style={{
                  background: "linear-gradient(45deg, #ffc107, #ff9800)",
                  color: "#000",
                  borderRadius: "15px",
                  fontSize: "0.9rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
                }}
              >
                #{racer.ranking}
              </span>
            </div>

            {/* Image Container with Overlay */}
            <div className="position-relative">
              <img
                src={racer.image}
                className="card-img-top"
                alt={racer.name}
                style={{ 
                  height: "300px", 
                  objectFit: "cover",
                  filter: "brightness(0.9) contrast(1.1)"
                }}
              />
              <div 
                className="position-absolute bottom-0 w-100"
                style={{
                  background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                  height: "80px"
                }}
              ></div>
            </div>

            <div className="card-body text-center p-4">
              <h5 
                className="card-title fw-bold mb-3"
                style={{ 
                  color: "#ffc107",
                  fontSize: "1.3rem",
                  textShadow: "0 2px 6px rgba(0,0,0,0.7)"
                }}
              >
                {racer.name}
              </h5>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <span style={{ fontSize: "1.2rem", marginRight: "8px" }}>
                    {getCountryFlag(racer.country)}
                  </span>
                  <span 
                    style={{ 
                      color: "#fff",
                      fontSize: "0.95rem", 
                      letterSpacing: "0.5px",
                      textShadow: "0 1px 3px rgba(0,0,0,0.6)"
                    }}
                  >
                    {racer.country}
                  </span>
                </div>
                <div 
                  className="badge px-2 py-1"
                  style={{
                    background: "rgba(255, 193, 7, 0.25)",
                    color: "#000",
                    border: "1px solid rgba(255, 193, 7, 0.5)",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textShadow: "0 1px 2px rgba(0,0,0,0.5)"
                  }}
                >
                  🏆 {racer.titles} titles
                </div>
              </div>

              <div 
                className="mx-auto mb-3"
                style={{
                  height: "2px",
                  width: "60px",
                  background: "linear-gradient(90deg, transparent, #ffc107, transparent)",
                  borderRadius: "1px"
                }}
              ></div>

              <p 
                className="card-text mb-0"
                style={{ 
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontStyle: "italic",
                  textShadow: "0 1px 3px rgba(0,0,0,0.5)"
                }}
              >
                World Professional Player
              </p>
            </div>

            {/* Hover Effect Overlay */}
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
              style={{
                background: "rgba(255, 193, 7, 0.15)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                borderRadius: "20px"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
            >
              <div 
                className="text-warning fw-bold"
                style={{
                  fontSize: "1.1rem",
                  textShadow: "0 2px 4px rgba(0,0,0,0.8)"
                }}
              >
                View Profile →
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));

  return (
    <div 
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d1117 100%)",
        position: "relative"
      }}
    >
      {/* Animated Background Pattern */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 193, 7, 0.05) 0%, transparent 50%)
          `,
          animation: "float 20s ease-in-out infinite",
          zIndex: 0
        }}
      ></div>

      <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="mb-4">
            <Link 
              href="/" 
              className="btn px-4 py-3 fw-semibold text-decoration-none d-inline-flex align-items-center"
              style={{
                background: "linear-gradient(45deg, #ffc107, #ff9800)",
                color: "#000",
                borderRadius: "25px",
                border: "none",
                boxShadow: "0 4px 15px rgba(255, 193, 7, 0.3)",
                transition: "all 0.3s ease",
                fontSize: "1rem"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 193, 7, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 193, 7, 0.3)";
              }}
            >
              ← กลับหน้าหลัก
            </Link>
          </div>

          <h1 
            className="mb-4 fw-bold position-relative d-inline-block"
            style={{ 
              color: "#ffc107",
              fontSize: "3.5rem",
              textShadow: "0 4px 8px rgba(0,0,0,0.5)",
              letterSpacing: "2px"
            }}
          >
            นักสนุกเกอร์ปัจจุบัน
            <div 
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(90deg, transparent, #ffc107, transparent)",
                borderRadius: "2px"
              }}
            ></div>
          </h1>
          
          <p 
            style={{ 
              color: "#fff",
              fontSize: "1.2rem",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            รวมรวมนักสนุกเกอร์ชั้นนำจากทั่วโลก พร้อมข้อมูลการจัดอันดับและผลงาน
          </p>
        </div>

        {/* Stats Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-auto">
            <div 
              className="d-flex align-items-center px-4 py-3"
              style={{
                background: "rgba(255, 193, 7, 0.2)",
                border: "1px solid rgba(255, 193, 7, 0.5)",
                borderRadius: "50px",
                backdropFilter: "blur(10px)",
                color: "#000",
                fontWeight: "600"
              }}
            >
              <span className="me-2">🎯</span>
              <span>ทั้งหมด {currentRacers.length} นักกีฬา</span>
            </div>
          </div>
        </div>

        {/* Racers Grid */}
        <div className="row justify-content-center g-4">
          {renderRacerCards(currentRacers)}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        .card:hover .position-absolute:last-child {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
