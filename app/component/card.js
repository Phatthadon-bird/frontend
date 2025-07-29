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
      name: "F1",
      description: "สุดยอดนักแข่งที่มีฝีมือและประสบการณ์มากมาย",
      link: "/racers/tepsachaiya",
    },
  ];

  return (
    <div className="container-fluid py-5">
      {/* Header */}
      <div className="row mb-5">
        <div className="col text-center">
          <h3 className="text-warning fw-bold display-5 drop-shadow-lg">🏆 นักสนุกเกอร์ระดับเทพ</h3>
          <p className="text-secondary fs-5">โปรไฟล์นักแม่นรูจากทั่วไทย</p>
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
            <div className="card racer-card shadow-lg border-0 rounded-4 overflow-hidden position-relative">
              {/* Badge: อันดับ */}
              <span className="position-absolute top-0 end-0 m-2 badge-rank">
                อันดับ {idx + 1}
              </span>

              {/* รูปภาพ */}
              <div className="card-img-container position-relative">
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
                  <span className="overlay-text text-white fw-semibold fs-5">
                    ดูเพิ่มเติม
                  </span>
                </div>
              </div>

              {/* เนื้อหา */}
              <div className="card-body text-center px-4 py-4">
                <h5 className="card-title fw-bold fs-4">{racer.name}</h5>

                {/* 🔧 ปรับให้มองเห็นชัดขึ้น */}
                <p className="card-text custom-desc fst-italic">{racer.description}</p>

                <Link href={racer.link} className="btn btn-outline-warning mt-3 px-4">
                  ดูโปรไฟล์
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Styled JSX */}
      <style jsx>{`
        .racer-card {
          background: linear-gradient(135deg, #1a1a1a, #2c2c2c);
          color: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .racer-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 12px 24px rgba(255, 165, 0, 0.5),
            0 0 12px rgba(255, 165, 0, 0.7);
          z-index: 5;
        }

        .card-img {
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          transition: transform 0.5s ease;
        }

        .racer-card:hover .card-img {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }

        .racer-card:hover .card-overlay {
          opacity: 1;
        }

        .overlay-text {
          transition: transform 0.3s ease;
        }

        .racer-card:hover .overlay-text {
          transform: scale(1.1);
        }

        .card-body {
          background-color: #222;
          color: #f8f8f8;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }

        .badge-rank {
          background: linear-gradient(to right, #ff512f, #dd2476);
          color: white;
          font-size: 0.8rem;
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          font-weight: 600;
          box-shadow: 0 0 8px rgba(255, 87, 34, 0.6);
        }

        /* ✅ สไตล์ใหม่ให้ description มองเห็นชัด */
        .custom-desc {
          color: rgba(255, 255, 255, 0.88);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
          font-size: 1rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
