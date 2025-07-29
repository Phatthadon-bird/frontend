'use client';

import Link from "next/link";

export default function Racers() {
  const racers = [
    {
      id: 1,
      name: "Ronnie O'Sullivan",
      country: "England",
      image: "/image/12.jpg",
      slug: "ronnie",
    },
    {
      id: 2,
      name: "Mark Selby",
      country: "England",
      image: "/image/15.jpg",
      slug: "mark-selby",
    },
    {
      id: 3,
      name: "Judd Trump",
      country: "England",
      image: "/image/16.jpg",
      slug: "judd-trump",
    },
    {
      id: 4,
      name: "Neil Robertson",
      country: "Australia",
      image: "/image/17.jpg",
      slug: "neil-robertson",
    },
    {
      id: 5,
      name: "John Higgins",
      country: "Scotland",
      image: "/image/18.jpg",
      slug: "john-higgins",
    },
    {
      id: 6,
      name: "Shaun Murphy",
      country: "England",
      image: "/image/19.jpg",
      slug: "shaun-murphy",
    },
    {
      id: 7,
      name: "Ding Junhui",
      country: "China",
      image: "/image/20.jpg",
      slug: "ding-junhui",
    },
    {
      id: 8,
      name: "zhao xintong",
      country: "china",
      image: "/image/28.jpg",
      slug: "zhao-xintong",
    },
    {
  id: 9,
  name: "Mink Saraburi",
  country: "Thailand",
  image: "/image/29.jpg",
  slug: "mingsaraburi",
},
{
  id: 10,
  name: "Thepchaiya Un-Nooh",
  country: "Thailand",
  image: "/image/30.jpg",
  slug: "tepsachaiya",
},
  ];

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link href="/" className="btn btn-outline-warning px-4 py-2 fw-semibold">
          ← กลับหน้าหลัก
        </Link>
      </div>

      <h1 className="mb-5 text-center text-warning fw-bold" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
        นักแข่งสนุ๊กเกอร์คนเก่งๆ
      </h1>

      <div className="row g-4">
        {racers.map((racer) => (
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
        ))}
      </div>
    </div>
  );
}
