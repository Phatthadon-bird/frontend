'use client';

import Link from "next/link";

const players = [
  { rank: 1, name: "รอนนี่ โอซุลลิแวน", country: "อังกฤษ", points: 35000, image: "/image/42.jpg", slug: "ronnie-osullivan-world-champion-2025" },
  { rank: 2, name: "มาร์ค เซลบี้", country: "อังกฤษ", points: 32000, image: "/image/45.jpg", slug: "mark-selby-confirm-competition-2025" },
  { rank: 3, name: "จัดด์ ทรัมป์", country: "อังกฤษ", points: 29000, image: "/image/44.jpeg", slug: "" },
  { rank: 4, name: "โจว ซินถง", country: "จีน", points: 27000, image: "/image/43.jpg", slug: "" },
  { rank: 5, name: "นีล โรเบิร์ตสัน", country: "ออสเตรเลีย", points: 25000, image: "/image/46.jpg", slug: null },
];

export default function SnookerLeaderboard() {
  return (
    <>
      <style>{`
        /* Reset & base */
        body {
          background: #121212;
          color: #eee;
          font-family: 'Sarabun', sans-serif;
          user-select: none;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 900px;
          margin: 3rem auto;
          padding: 0 1rem;
        }

        h1 {
          text-align: center;
          font-size: 3rem;
          font-weight: 900;
          color: #d4af37;
          text-shadow: 0 0 10px #d4af37;
          margin-bottom: 2.5rem;
          user-select: none;
        }

        a.back-link {
          display: inline-block;
          margin-bottom: 2rem;
          padding: 0.6rem 1.5rem;
          background-color: #1f1f1f;
          border: 2px solid #d4af37;
          color: #d4af37;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 0.3s ease;
          user-select: none;
        }
        a.back-link:hover {
          background-color: #d4af37;
          color: #121212;
        }

        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 0.75rem;
          font-size: 1.1rem;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
          border-radius: 15px;
          overflow: hidden;
          background-color: #1f1f1f;
        }

        thead tr {
          background: linear-gradient(90deg, #d4af37 0%, #ffd700 100%);
          color: #121212;
          font-weight: 900;
          font-size: 1.2rem;
          user-select: none;
        }

        thead th {
          padding: 1rem 1.5rem;
          text-align: left;
        }

        tbody tr {
          background-color: #2a2a2a;
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
          border-radius: 12px;
          box-shadow: 0 3px 7px rgba(0,0,0,0.3);
        }
        tbody tr:hover {
          background-color: #3d3d3d;
          transform: scale(1.03);
          box-shadow: 0 10px 20px rgba(212,175,55,0.7);
        }

        tbody tr:nth-child(1) {
          background: linear-gradient(90deg, #ffd700cc 0%, #d4af37cc 100%);
          color: #121212;
          font-weight: 900;
          box-shadow: 0 0 25px #ffd700;
        }
        tbody tr:nth-child(2) {
          background: linear-gradient(90deg, #c0c0c0cc 0%, #a9a9a9cc 100%);
          color: #121212;
          font-weight: 700;
          box-shadow: 0 0 18px #c0c0c0;
        }
        tbody tr:nth-child(3) {
          background: linear-gradient(90deg, #cd7f32cc 0%, #a0522dcc 100%);
          color: #121212;
          font-weight: 700;
          box-shadow: 0 0 18px #cd7f32;
        }

        td, th {
          padding: 1rem 1.2rem;
          vertical-align: middle;
        }

        td.rank {
          font-size: 1.6rem;
          font-weight: 900;
          color: #d4af37;
          width: 70px;
          text-align: center;
          user-select: none;
        }

        td.player {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .player img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 10px #d4af37;
          flex-shrink: 0;
          user-select: none;
        }

        .player-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          user-select: text;
        }

        .player-name {
          font-weight: 700;
          font-size: 1.3rem;
          color: #ffd700;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .player-name:hover {
          color: #fff;
        }

        .player-country {
          font-style: italic;
          font-size: 0.9rem;
          color: #ccc;
          user-select: none;
        }

        td.points {
          font-weight: 900;
          font-size: 1.2rem;
          color: #ffd700;
          text-align: right;
          user-select: text;
          min-width: 120px;
        }
      `}</style>

      <div className="container">
        <Link href="/" className="back-link">← กลับหน้าหลัก</Link>
        <h1>🏆 5 อันดับนักสนุ๊กเกอร์โลก</h1>

        <table>
          <thead>
            <tr>
              <th>อันดับ</th>
              <th>นักแข่ง</th>
              <th>คะแนน (Points)</th>
            </tr>
          </thead>
          <tbody>
            {players.map(({ rank, name, country, points, image, slug }) => (
              <tr key={rank} onClick={() => slug && window.open(`/news/${slug}`, "_self")}>
                <td className="rank">#{rank}</td>
                <td className="player">
                  <img src={image} alt={name} loading="lazy" />
                  <div className="player-info">
                    {slug ? (
                      <Link href={`/news/${slug}`} className="player-name">{name}</Link>
                    ) : (
                      <span className="player-name">{name}</span>
                    )}
                    <span className="player-country">{country}</span>
                  </div>
                </td>
                <td className="points">{points.toLocaleString()} คะแนน</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
