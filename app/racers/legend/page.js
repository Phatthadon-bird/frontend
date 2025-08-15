'use client';

import Link from "next/link";

export default function LegendaryRacers() {
  const legendaryRacers = [
    {
      id: 11,
      name: "Steve Davis",
      country: "England",
      image: "/image/50.jpg",
      slug: "steve-davis",
      era: "1980s-1990s",
      worldTitles: "6",
      nickname: "The Nugget"
    },
    {
      id: 12,
      name: "Stephen Hendry",
      country: "Scotland",
      image: "/image/51.jpg",
      slug: "stephen-hendry",
      era: "1990s-2000s",
      worldTitles: "7",
      nickname: "The King of the Crucible"
    },
    {
      id: 13,
      name: "Jimmy White",
      country: "England",
      image: "/image/74.jpg",
      slug: "jimmy-white",
      era: "1980s-2000s",
      worldTitles: "0*",
      nickname: "The Whirlwind"
    },
    {
      id: 14,
      name: "Cliff Thorburn",
      country: "Canada",
      image: "/image/53.jpg",
      slug: "cliff-thorburn",
      era: "1970s-1980s",
      worldTitles: "1",
      nickname: "The Grinder"
    },
    {
      id: 15,
      name: "Ken Doherty",
      country: "Ireland",
      image: "/image/54.jpg",
      slug: "ken-doherty",
      era: "1990s-2000s",
      worldTitles: "1",
      nickname: "The Darling of Dublin"
    },
    {
      id: 16,
      name: "Alex Higgins",
      country: "Northern Ireland",
      image: "/image/55.jpg",
      slug: "alex-higgins",
      era: "1970s-1980s",
      worldTitles: "2",
      nickname: "Hurricane Higgins"
    },
    {
      id: 17,
      name: "Ray Reardon",
      country: "Wales",
      image: "/image/56.jpg",
      slug: "ray-reardon",
      era: "1970s",
      worldTitles: "6",
      nickname: "Dracula"
    },
    {
      id: 18,
      name: "Terry Griffiths",
      country: "Wales",
      image: "/image/71.jpg",
      slug: "terry-griffiths",
      era: "1970s-1980s",
      worldTitles: "1",
      nickname: "The Welsh Wizard"
    },
  ];

  const getCountryFlag = (country) => {
    const flags = {
      "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      "Canada": "🇨🇦",
      "Ireland": "🇮🇪",
      "Northern Ireland": "🇬🇧",
      "Wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
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
              background: "linear-gradient(135deg, #2d1b00 0%, #4a3400 50%, #1a1a1a 100%)",
              borderRadius: "20px",
              transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(218, 165, 32, 0.15)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(218, 165, 32, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(218, 165, 32, 0.15)";
            }}
          >
            {/* Vintage Badge */}
            <div 
              className="position-absolute top-0 start-0 m-3"
              style={{ zIndex: 10 }}
            >
              <span 
                className="badge fw-bold px-3 py-2 d-flex align-items-center"
                style={{
                  background: "linear-gradient(45deg, #daa520, #b8860b)",
                  color: "#2d1b00",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
                }}
              >
                👑 LEGEND
              </span>
            </div>

            {/* Era Badge */}
            <div 
              className="position-absolute top-0 end-0 m-3"
              style={{ zIndex: 10 }}
            >
              <span 
                className="badge fw-bold px-2 py-1"
                style={{
                  background: "rgba(218, 165, 32, 0.2)",
                  color: "#daa520",
                  border: "1px solid rgba(218, 165, 32, 0.4)",
                  borderRadius: "10px",
                  fontSize: "0.7rem",
                  backdropFilter: "blur(5px)"
                }}
              >
                {racer.era}
              </span>
            </div>

            {/* Image Container with Sepia Overlay */}
            <div className="position-relative">
              <img
                src={racer.image}
                className="card-img-top"
                alt={racer.name}
                style={{ 
                  height: "300px", 
                  objectFit: "cover",
                  filter: "sepia(20%) contrast(1.1) brightness(0.9)"
                }}
              />
              <div 
                className="position-absolute bottom-0 w-100"
                style={{
                  background: "linear-gradient(transparent, rgba(45, 27, 0, 0.8))",
                  height: "80px"
                }}
              ></div>
              
              {/* Vintage Film Effect */}
              <div 
                className="position-absolute top-0 w-100 h-100"
                style={{
                  background: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(218, 165, 32, 0.02) 2px,
                    rgba(218, 165, 32, 0.02) 4px
                  )`,
                  pointerEvents: "none"
                }}
              ></div>
            </div>

            <div className="card-body text-center p-4">
              <h5 
                className="card-title fw-bold mb-2"
                style={{ 
                  color: "#daa520",
                  fontSize: "1.3rem",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                }}
              >
                {racer.name}
              </h5>

              {/* Nickname */}
              <p 
                className="mb-3"
                style={{ 
                  color: "#b8860b",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  opacity: 0.9
                }}
              >
                "{racer.nickname}"
              </p>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <span style={{ fontSize: "1.1rem", marginRight: "6px" }}>
                    {getCountryFlag(racer.country)}
                  </span>
                  <span 
                    className="text-light"
                    style={{ fontSize: "0.9rem", letterSpacing: "0.3px" }}
                  >
                    {racer.country}
                  </span>
                </div>
              </div>

              {/* World Titles */}
              <div 
                className="mb-3 p-2"
                style={{
                  background: "rgba(218, 165, 32, 0.1)",
                  border: "1px solid rgba(218, 165, 32, 0.2)",
                  borderRadius: "12px"
                }}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <span className="me-2" style={{ fontSize: "1.2rem" }}>🏆</span>
                  <span 
                    className="fw-bold"
                    style={{ color: "#daa520", fontSize: "1rem" }}
                  >
                    {racer.worldTitles} World {racer.worldTitles === "1" ? "Title" : "Titles"}
                  </span>
                </div>
                {racer.worldTitles === "0*" && (
                  <small 
                    className="text-muted d-block mt-1"
                    style={{ fontSize: "0.75rem" }}
                  >
                    *6 times finalist
                  </small>
                )}
              </div>

              {/* Decorative Vintage Line */}
              <div 
                className="mx-auto mb-3 position-relative"
                style={{
                  height: "2px",
                  width: "80px",
                  background: "linear-gradient(90deg, transparent, #daa520, transparent)",
                  borderRadius: "1px"
                }}
              >
                <div 
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "#daa520",
                    borderRadius: "50%"
                  }}
                ></div>
              </div>

              <p 
                className="card-text text-muted mb-0"
                style={{ 
                  fontSize: "0.8rem",
                  fontStyle: "italic",
                  letterSpacing: "0.5px"
                }}
              >
                Hall of Fame Legend
              </p>
            </div>

            {/* Hover Effect Overlay */}
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
              style={{
                background: "rgba(218, 165, 32, 0.1)",
                opacity: 0,
                transition: "opacity 0.3s ease",
                borderRadius: "20px"
              }}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0}
            >
              <div 
                className="text-center"
                style={{
                  color: "#daa520",
                  textShadow: "0 2px 4px rgba(0,0,0,0.8)"
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>👑</div>
                <div className="fw-bold" style={{ fontSize: "1.1rem" }}>
                  View Legend →
                </div>
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
        background: "linear-gradient(135deg, #1a0f00 0%, #2d1b00 30%, #1a1a1a 70%, #0d1117 100%)",
        position: "relative"
      }}
    >
      {/* Vintage Background Pattern */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(184, 134, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(218, 165, 32, 0.05) 0%, transparent 50%)
          `,
          animation: "vintageFloat 25s ease-in-out infinite",
          zIndex: 0
        }}
      ></div>

      {/* Vintage Film Grain Effect */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          background: `
            repeating-conic-gradient(from 0deg, transparent 0deg, rgba(218, 165, 32, 0.01) 1deg, transparent 2deg),
            radial-gradient(circle at 20% 80%, rgba(218, 165, 32, 0.03) 0%, transparent 50%)
          `,
          opacity: 0.3,
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
                background: "linear-gradient(45deg, #daa520, #b8860b)",
                color: "#2d1b00",
                borderRadius: "25px",
                border: "none",
                boxShadow: "0 4px 15px rgba(218, 165, 32, 0.3)",
                transition: "all 0.3s ease",
                fontSize: "1rem"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(218, 165, 32, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(218, 165, 32, 0.3)";
              }}
            >
              ← กลับหน้าหลัก
            </Link>
          </div>

          <div className="mb-4">
            <div 
              className="d-inline-block px-4 py-2 mb-3"
              style={{
                background: "rgba(218, 165, 32, 0.1)",
                border: "1px solid rgba(218, 165, 32, 0.3)",
                borderRadius: "30px",
                backdropFilter: "blur(10px)"
              }}
            >
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>👑</span>
              <span 
                className="text-warning fw-semibold"
                style={{ fontSize: "1.1rem", letterSpacing: "1px" }}
              >
                HALL OF FAME
              </span>
            </div>
          </div>

          <h1 
            className="mb-4 fw-bold position-relative d-inline-block"
            style={{ 
              color: "#daa520",
              fontSize: "3.5rem",
              textShadow: "0 4px 8px rgba(0,0,0,0.6)",
              letterSpacing: "2px"
            }}
          >
            นักสนุกเกอร์ในตำนาน
            {/* Vintage decorative underline */}
            <div 
              className="position-absolute bottom-0 start-50 translate-middle-x d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <div 
                style={{
                  width: "40px",
                  height: "3px",
                  background: "#daa520",
                  borderRadius: "2px",
                  margin: "0 5px"
                }}
              ></div>
              <div 
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#daa520",
                  borderRadius: "50%",
                  margin: "0 5px",
                  transform: "translateY(-1.5px)"
                }}
              ></div>
              <div 
                style={{
                  width: "40px",
                  height: "3px",
                  background: "#daa520",
                  borderRadius: "2px",
                  margin: "0 5px"
                }}
              ></div>
            </div>
          </h1>
          
          <p 
            className="text-light mb-5"
            style={{ 
              fontSize: "1.2rem",
              opacity: 0.8,
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}
          >
            รำลึกถึงตำนานแห่งวงการสนุกเกอร์ที่สร้างประวัติศาสตร์และเป็นแรงบันดาลใจให้คนรุ่นหลัง
          </p>
        </div>

        {/* Stats Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-auto">
            <div 
              className="d-flex align-items-center px-4 py-3"
              style={{
                background: "rgba(218, 165, 32, 0.1)",
                border: "1px solid rgba(218, 165, 32, 0.3)",
                borderRadius: "50px",
                backdropFilter: "blur(10px)"
              }}
            >
              <span className="me-2" style={{ fontSize: "1.2rem" }}>🏆</span>
              <span className="text-light me-3">ตำนาน {legendaryRacers.length} คน</span>
              <span className="text-muted">|</span>
              <span className="text-light ms-3">ยุคทอง 1970-2000s</span>
            </div>
          </div>
        </div>

        {/* Racers Grid */}
        <div className="row justify-content-center g-4">
          {renderRacerCards(legendaryRacers)}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-5">
          <p 
            className="text-muted"
            style={{ 
              fontSize: "0.9rem",
              fontStyle: "italic",
              opacity: 0.7
            }}
          >
            "ตำนานไม่เคยตาย พวกเขาเพียงแค่สร้างแรงบันดาลใจให้คนรุ่นต่อไป"
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes vintageFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          25% { transform: translateY(-10px) rotate(0.5deg); opacity: 0.8; }
          50% { transform: translateY(-5px) rotate(-0.5deg); opacity: 0.9; }
          75% { transform: translateY(-15px) rotate(0.3deg); opacity: 0.7; }
        }
        
        .card:hover .position-absolute:last-child {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}