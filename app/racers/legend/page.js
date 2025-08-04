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
    },
    {
      id: 12,
      name: "Stephen Hendry",
      country: "Scotland",
      image: "/image/51.jpg",
      slug: "stephen-hendry",
    },
    {
      id: 13,
      name: "Jimmy White",
      country: "England",
      image: "/image/74.jpg",
      slug: "jimmy-white",
    },
    {
      id: 14,
      name: "Cliff Thorburn",
      country: "Canada",
      image: "/image/53.jpg",
      slug: "cliff-thorburn",
    },
    {
      id: 15,
      name: "Ken Doherty",
      country: "Ireland",
      image: "/image/54.jpg",
      slug: "ken-doherty",
    },
    {
      id: 16,
      name: "Alex Higgins",
      country: "Northern Ireland",
      image: "/image/55.jpg",
      slug: "alex-higgins",
    },
    {
      id: 17,
      name: "Ray Reardon",
      country: "Wales",
      image: "/image/56.jpg",
      slug: "ray-reardon",
    },
    {
      id: 18,
      name: "Terry Griffiths",
      country: "Wales",
      image: "/image/71.jpg",
      slug: "terry-griffiths",
    },
  ];

  const renderRacerCards = (racers) =>
    racers.map((racer) => (
      <div key={racer.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Link href={`/racers/${racer.slug}`} className="text-decoration-none">
          <div
            className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden"
            style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 193, 7, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={racer.image}
              className="card-img-top"
              alt={racer.name}
              style={{ height: "280px", objectFit: "cover" }}
            />
            <div className="card-body text-center bg-dark text-warning">
              <h5 className="card-title fw-bold">{racer.name}</h5>
              <p className="card-text mb-0" style={{ letterSpacing: "0.05em" }}>
                ประเทศ: {racer.country}
              </p>
            </div>
          </div>
        </Link>
      </div>
    ));

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link href="/" className="btn btn-outline-warning px-4 py-2 fw-semibold">
          ← กลับหน้าหลัก
        </Link>
      </div>

      <h1
        className="mb-5 text-center text-warning fw-bold"
        style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
      >
        นักสนุกเกอร์ในตำนาน
      </h1>

      <div className="row g-4">{renderRacerCards(legendaryRacers)}</div>
    </div>
  );
}
