"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Card() {
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
      name: "เทพไชยา อุ่นหนู",
      description: "สุดยอดนักแข่งที่มีฝีมือและประสบการณ์มากมาย",
      link: "/racers/tepsachaiya",
    },
  ];

  return (
    <div className="container-fluid py-5">
      {/* Header */}
      <div className="row mb-4">
        <div className="col text-center">
          <h3 className="text-primary fw-bold display-6">🚗 นักแข่งสุดฮอต</h3>
          <p className="text-secondary fs-5">เลือกชมโปรไฟล์นักซิ่งระดับเทพ</p>
        </div>
      </div>

      {/* Card Section */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {racers.map((racer, idx) => (
          <motion.div
            className="col"
            key={racer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="card animated-card shadow-lg border-0 rounded-4 overflow-hidden position-relative text-reset d-block">
              {/* Badge: อันดับ */}
              <span className="position-absolute top-0 end-0 m-2 badge-rank">
                อันดับ {idx + 1}
              </span>

              {/* รูปภาพ */}
              <div className="card-img-container position-relative overflow-hidden rounded-top">
                <Image
                  src={`/image/${racer.id}.jpg`}
                  alt={racer.name}
                  width={400}
                  height={250}
                  className="card-img"
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
                <div className="card-overlay d-flex justify-content-center align-items-center">
                  <span className="overlay-text text-white fw-semibold fs-4">
                    ดูเพิ่มเติม
                  </span>
                </div>
              </div>

              {/* เนื้อหา */}
              <div className="card-body text-center px-3 py-4">
                <h5 className="card-title fw-bold fs-4">{racer.name}</h5>
                <p className="card-text text-muted fst-italic fs-6">
                  {racer.description}
                </p>
                <Link href={racer.link} className="btn btn-warning mt-3">
                  ดูโปรไฟล์
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* styled-jsx CSS */}
      <style jsx>{`
        .animated-card {
          background: linear-gradient(145deg, #2c2c2c, #1f1f1f);
          box-shadow: 10px 10px 20px #1a1a1a, -10px -10px 20px #333333;
          color: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;
          cursor: default;
        }

        .animated-card:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 10px 25px rgba(255, 94, 0, 0.4),
            0 0 20px rgba(255, 130, 0, 0.6);
          background: linear-gradient(145deg, #ff7f00, #ffae42);
          z-index: 2;
        }

        .card-img {
          transition: transform 0.5s ease, filter 0.5s ease;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }

        .animated-card:hover .card-img {
          transform: scale(1.1) rotate(1deg);
          filter: brightness(0.8);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(6px);
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          pointer-events: none;
        }

        .animated-card:hover .card-overlay {
          opacity: 1;
          pointer-events: auto;
        }

        .overlay-text {
          transform: translateY(0);
          transition: transform 0.3s ease;
        }

        .animated-card:hover .overlay-text {
          transform: translateY(-8px);
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
        }

        .card-body {
          background-color: #222;
          color: #f1f1f1;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }

        .animated-card:hover .card-body {
          color: #fff3e0;
        }

        .badge-rank {
          background: #ff5722;
          color: white;
          font-size: 0.85rem;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-weight: 600;
          box-shadow: 0 0 10px rgba(255, 87, 34, 0.6);
        }
      `}</style>
    </div>
  );
}
