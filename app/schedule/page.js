'use client'
import { useState } from "react"

export default function FixturesPage() {
  const [filter, setFilter] = useState("All")
  const fixtures = [
    { date: "2025-08-25", tournament: "World Open", location: "Yushan, China", status: "Upcoming", type: "Ranking" },
    { date: "2025-09-10", tournament: "UK Championship", location: "York, England", status: "Upcoming", type: "Ranking" },
    { date: "2025-10-01", tournament: "Masters", location: "London, England", status: "Upcoming", type: "Invitational" },
    { date: "2025-07-20", tournament: "European Masters", location: "Nuremberg, Germany", status: "Finished", type: "Ranking" },
  ]
  
  const filteredFixtures = filter === "All" ? fixtures : fixtures.filter(f => f.type === filter)
  
  const getStatusIcon = (status) => {
    switch(status) {
      case "Upcoming": return "🔜"
      case "Finished": return "✅"
      case "Live": return "🔴"
      default: return "📅"
    }
  }
  
  const getTypeIcon = (type) => {
    switch(type) {
      case "Ranking": return "🏅"
      case "Invitational": return "⭐"
      case "Qualifier": return "🎯"
      default: return "🏆"
    }
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          
          {/* Header Section */}
          <div className="header">
            <div className="header-card">
              <h1 className="title">
                🎱 ตารางแข่งสนุ๊กเกอร์ระดับโลก 2025
              </h1>
              <div className="title-underline"></div>
              <p className="subtitle">ปฏิทินการแข่งขันและตารางการแข่งขัน</p>
            </div>
          </div>

          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-card">
              <select
                className="filter-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">🏆 All Tournaments</option>
                <option value="Ranking">🏅 Ranking Events</option>
                <option value="Invitational">⭐ Invitational</option>
                <option value="Qualifier">🎯 Qualifiers</option>
              </select>
            </div>
          </div>

          {/* Fixtures Table */}
          <div className="table-container">
            
            {/* Table Header */}
            <div className="table-header">
              <div className="header-grid">
                <div className="header-cell">
                  📅 <span>Date</span>
                </div>
                <div className="header-cell">
                  🏆 <span>Tournament</span>
                </div>
                <div className="header-cell">
                  📍 <span>Location</span>
                </div>
                <div className="header-cell">
                  📊 <span>Status</span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="table-body">
              {filteredFixtures.map((fixture, index) => (
                <div 
                  key={index} 
                  className="fixture-row"
                >
                  
                  {/* Date */}
                  <div className="date-section">
                    <div className="date-card">
                      <div className="date-day">
                        {new Date(fixture.date).getDate()}
                      </div>
                      <div className="date-month">
                        {new Date(fixture.date).toLocaleDateString('en', {month: 'short'})}
                      </div>
                    </div>
                    <div className="date-year">
                      {new Date(fixture.date).getFullYear()}
                    </div>
                  </div>

                  {/* Tournament */}
                  <div className="tournament-section">
                    <span className="tournament-icon">{getTypeIcon(fixture.type)}</span>
                    <div>
                      <div className="tournament-name">
                        {fixture.tournament}
                      </div>
                      <div className="tournament-type">
                        {fixture.type}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="location-section">
                    <span className="location-icon">🌍</span>
                    <div className="location-name">
                      {fixture.location}
                    </div>
                  </div>

                  {/* Status */}
                  <div className="status-section">
                    <span className="status-icon">{getStatusIcon(fixture.status)}</span>
                    <div className={`status-badge ${fixture.status.toLowerCase()}`}>
                      {fixture.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🏅</div>
              <div className="stat-number">
                {fixtures.filter(f => f.type === "Ranking").length}
              </div>
              <div className="stat-label">Ranking Events</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">
                {fixtures.filter(f => f.type === "Invitational").length}
              </div>
              <div className="stat-label">Invitational</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">🔜</div>
              <div className="stat-number">
                {fixtures.filter(f => f.status === "Upcoming").length}
              </div>
              <div className="stat-label">Upcoming</div>
            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <div className="footer-card">
              <p className="footer-text">
                🎯 Stay updated with the latest snooker tournaments
              </p>
              <p className="footer-subtext">
                ⏰ Times and venues subject to change
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1e293b 0%, #064e3b 50%, #1e293b 100%);
          padding: 2rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .wrapper {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Header Styles */
        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .header-card {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .title {
          font-size: 3rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #10b981, #34d399, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-underline {
          width: 8rem;
          height: 4px;
          background: linear-gradient(45deg, #10b981, #34d399);
          margin: 0 auto;
          border-radius: 2px;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.8);
          margin-top: 1rem;
          font-size: 1.1rem;
        }

        /* Filter Styles */
        .filter-section {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .filter-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .filter-select {
          background: rgba(30, 41, 59, 0.8);
          color: white;
          padding: 0.75rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          backdrop-filter: blur(10px);
          font-weight: 500;
          font-size: 1rem;
          min-width: 200px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-select:hover {
          background: rgba(30, 41, 59, 0.9);
        }

        .filter-select:focus {
          outline: none;
          box-shadow: 0 0 0 2px #10b981;
        }

        /* Table Styles */
        .table-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .table-header {
          background: linear-gradient(135deg, #059669, #10b981, #059669);
          color: white;
        }

        .header-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 1rem;
          font-weight: bold;
          font-size: 1.1rem;
        }

        @media (max-width: 767px) {
          .header-grid {
            grid-template-columns: 1fr;
          }
        }

        .header-cell {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .table-body {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .fixture-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          border-left: 4px solid transparent;
        }

        @media (max-width: 767px) {
          .fixture-row {
            grid-template-columns: 1fr;
          }
        }

        .fixture-row:hover {
          background: rgba(255, 255, 255, 0.2);
          border-left-color: #10b981;
          transform: translateX(5px);
        }

        /* Date Styles */
        .date-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .date-card {
          background: rgba(30, 41, 59, 0.6);
          border-radius: 8px;
          padding: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }

        .fixture-row:hover .date-card {
          background: rgba(30, 41, 59, 0.8);
        }

        .date-day {
          color: white;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .date-month {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .date-year {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
        }

        @media (max-width: 767px) {
          .date-year {
            display: none;
          }
        }

        /* Tournament Styles */
        .tournament-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tournament-icon {
          font-size: 1.5rem;
        }

        .tournament-name {
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          transition: color 0.2s ease;
        }

        .fixture-row:hover .tournament-name {
          color: #34d399;
        }

        .tournament-type {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
          background: rgba(30, 41, 59, 0.4);
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          display: inline-block;
          margin-top: 0.25rem;
        }

        /* Location Styles */
        .location-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .location-icon {
          font-size: 1.2rem;
        }

        .location-name {
          color: white;
          font-weight: 500;
          background: rgba(30, 41, 59, 0.4);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }

        .fixture-row:hover .location-name {
          background: rgba(30, 41, 59, 0.6);
        }

        /* Status Styles */
        .status-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-icon {
          font-size: 1.2rem;
        }

        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.8rem;
          border: 2px solid;
          transition: all 0.2s ease;
        }

        .status-badge.upcoming {
          background: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
          border-color: #3b82f6;
        }

        .fixture-row:hover .status-badge.upcoming {
          background: rgba(59, 130, 246, 0.3);
        }

        .status-badge.finished {
          background: rgba(107, 114, 128, 0.2);
          color: #d1d5db;
          border-color: #6b7280;
        }

        .fixture-row:hover .status-badge.finished {
          background: rgba(107, 114, 128, 0.3);
        }

        .status-badge.live {
          background: rgba(34, 197, 94, 0.2);
          color: #86efac;
          border-color: #22c55e;
        }

        .fixture-row:hover .status-badge.live {
          background: rgba(34, 197, 94, 0.3);
        }

        /* Stats Styles */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        @media (max-width: 767px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px) scale(1.05);
        }

        .stat-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.7);
        }

        /* Footer Styles */
        .footer {
          text-align: center;
          margin-top: 3rem;
        }

        .footer-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: inline-block;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .footer-subtext {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
        }

        /* Animation */
        .header-card {
          animation: slideUp 0.6s ease-out;
        }

        .table-container {
          animation: slideUp 0.8s ease-out;
        }

        .stat-card {
          animation: slideUp 1s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 640px) {
          .container {
            padding: 1rem 0.5rem;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .header-card {
            padding: 1.5rem;
          }
          
          .fixture-row {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  )
}