'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide rounded-4 shadow-lg overflow-hidden"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
      style={{ maxWidth: '100%', margin: '0 auto' }}
    >
      <div className="carousel-inner" style={{ height: '450px' }}>
        <div className="carousel-item active">
          <Image
            src="/image/1.png"
            alt="ภาพที่ 1"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="carousel-overlay" />
        </div>
        <div className="carousel-item">
          <Image
            src="/image/2.jpg"
            alt="ภาพที่ 2"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="carousel-overlay" />
        </div>
        <div className="carousel-item">
          <Image
            src="/image/3.jpg"
            alt="ภาพที่ 3"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="carousel-overlay" />
        </div>
      </div>

      {/* ปุ่มเลื่อน */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx>{`
        .carousel-inner {
          position: relative;
          width: 100%;
        }

        .carousel-item {
          position: relative;
          width: 100%;
          height: 450px; /* กำหนดความสูงคงที่ */
        }

        .carousel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.15) 0%,
            rgba(0, 0, 0, 0.4) 75%,
            rgba(0, 0, 0, 0.6) 100%
          );
          pointer-events: none;
          border-radius: 0 0 1rem 1rem;
        }

        /* ปุ่มเลื่อนสีสว่างขึ้นและขยาย */
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
          width: 40px;
          height: 40px;
          background-size: 40px 40px;
          transition: transform 0.3s ease;
        }

        .carousel-control-prev:hover .carousel-control-prev-icon,
        .carousel-control-next:hover .carousel-control-next-icon {
          transform: scale(1.3);
          filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.7));
        }
      `}</style>
    </div>
  );
}
