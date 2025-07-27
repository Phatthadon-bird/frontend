"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  useEffect(() => {
    const elements = document.querySelectorAll(".card");
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
    });
  }, []);

  // ข้อมูลนักแข่ง
  const racers = [
    {
      id: 4,
      name: "รอนนี่",
      description: "นักแข่งสายโหด พร้อมความเร็วเหนือระดับ",
      link: "/racers/ronnie",
    },
    {
      id: 5,
      name: "มิ้งสระบุรี",
      description: "ดาวรุ่งจากสระบุรี พร้อมสไตล์การขับขี่เฉียบคม",
      link: "/racers/mingsaraburi",
    },
    {
      id: 6,
      name: "",
      description: "สุดยอดนักแข่งที่มีฝีมือและประสบการณ์มากมาย",
      link: "/racers/tepsachaiya",
    },
  ];

  return (
    <div className="container-fluid py-5">
      {/* Header */}
      <div className="row mb-4">
        <div className="col text-center">
          <h3 className="text-primary fw-bold">นักแข่ง</h3>
          <p className="text-secondary">พบกับนักแข่งสุดฮอตของเรา</p>
        </div>
      </div>

      {/* Card Section */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {racers.map((racer, idx) => (
          <div className="col" key={racer.id}>
            <Link
              href={racer.link}
              className="card animated-card shadow-lg border-0 rounded-4 overflow-hidden position-relative text-decoration-none text-reset d-block"
            >
              <div className="card-img-container position-relative overflow-hidden rounded-top">
                <Image
                  src={`/image/${racer.id}.jpg`}
                  alt={racer.name}
                  width={400}
                  height={250}
                  className="card-img"
                  style={{ objectFit: "cover" }}
                  priority={idx === 0} // preload รูปแรก
                />
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <span className="overlay-text text-white fw-semibold fs-5">
                    ดูเพิ่มเติม
                  </span>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{racer.name}</h5>
                <p className="card-text text-muted fst-italic">{racer.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* styled-jsx CSS */}
      <style jsx>{`
        .animated-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          transition: 
            transform 0.3s ease, 
            box-shadow 0.3s ease, 
            background 0.4s ease;
          cursor: pointer;
          display: block;
          background: linear-gradient(145deg, #ffffff, #e6e6e6);
          box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
        }

        .animated-card:hover {
          transform: translateY(-10px) scale(1.06);
          box-shadow:
            0 8px 16px rgba(0,0,0,0.25),
            0 0 20px 3px rgba(255, 120, 0, 0.7);
          background: linear-gradient(145deg, #ff9900, #ffb347);
          z-index: 2;
          text-decoration: none;
        }

        .card-img-container {
          cursor: pointer;
          position: relative;
        }

        .card-img {
          transition: transform 0.6s ease, filter 0.6s ease;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          will-change: transform;
        }

        .animated-card:hover .card-img {
          transform: scale(1.12) rotate(1deg);
          filter: brightness(0.75);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.45);
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(6px);
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          pointer-events: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .animated-card:hover .card-overlay {
          opacity: 1;
          pointer-events: auto;
        }

        .overlay-text {
          user-select: none;
          transform: translateY(0);
          transition: transform 0.3s ease;
          will-change: transform;
        }

        .animated-card:hover .overlay-text {
          transform: translateY(-10px);
          text-shadow: 0 0 8px rgba(255, 165, 0, 0.9);
        }

        .card-body {
          transition: color 0.3s ease;
        }

        .animated-card:hover .card-body {
          color: #d35400;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
