'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

const snookerPlayers = [
  'รอนนี่ โอซัลลิแวน',
  'จัดด์ ทรัมป์',
  'มาร์ค เซลบี้',
  'นีล โรเบิร์ตสัน',
  'จอห์น ฮิกกินส์',
  'เดอะพัชญา อูนูห์',
  'มิ้งค์ สระบุรี',
]

export default function SnookerVoteReviewPage() {
  const router = useRouter()

  const [votes, setVotes] = useState({})
  const [selectedPlayer, setSelectedPlayer] = useState('')
  const [hasVoted, setHasVoted] = useState(false)
  const [reviewText, setReviewText] = useState('')
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem('snookerVotes') || '{}')
    const storedReviews = JSON.parse(localStorage.getItem('snookerReviews') || '[]')
    const voted = localStorage.getItem('hasVoted') === 'true'
    setVotes(storedVotes)
    setReviews(storedReviews)
    setHasVoted(voted)
  }, [])

const handleVote = () => {
  if (!selectedPlayer) {
    Swal.fire({
      icon: 'warning',
      title: 'กรุณาเลือกนักสนุกเกอร์ก่อนโหวต',
    })
    return
  }

  // อนุญาตโหวตได้เรื่อยๆ ไม่บล็อก
  const updatedVotes = {
    ...votes,
    [selectedPlayer]: (votes[selectedPlayer] || 0) + 1,
  }

  setVotes(updatedVotes)
  localStorage.setItem('snookerVotes', JSON.stringify(updatedVotes))

  Swal.fire({
    icon: 'success',
    title: `โหวตให้ ${selectedPlayer} เรียบร้อยแล้ว!`,
  })
}

  const handleReviewSubmit = () => {
    const trimmedText = reviewText.trim()
    if (!trimmedText) return alert('กรุณาเขียนรีวิวก่อนส่ง')

    const newReview = {
      text: trimmedText,
      date: new Date().toLocaleString(),
    }

    const updatedReviews = [...reviews, newReview]
    setReviews(updatedReviews)
    setReviewText('')
    localStorage.setItem('snookerReviews', JSON.stringify(updatedReviews))
    alert('ส่งรีวิวเรียบร้อยแล้ว')
  }

  const handleClearStorage = () => {
    localStorage.removeItem('snookerVotes')
    localStorage.removeItem('snookerReviews')
    localStorage.removeItem('hasVoted')
    setVotes({})
    setReviews([])
    setHasVoted(false)
    alert('ล้างข้อมูลทั้งหมดแล้ว')
  }

  const handleBackHome = () => {
    Swal.fire({
      title: 'ต้องการกลับหน้าหลักใช่ไหม?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'ใช่, กลับหน้าหลัก',
      cancelButtonText: 'ไม่ใช่',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/')
      }
    })
  }

  return (
    <main
      style={{
        padding: '40px 20px',
        fontFamily: 'Prompt, sans-serif',
        backgroundColor: '#121212',
        color: '#f5f5f5',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#ffd700',
            textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
          }}
        >
          🏆 โหวตนักสนุกเกอร์แห่งปี
        </h1>

        {/* โหวต */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            เลือกนักสนุกเกอร์ที่คุณชื่นชอบ:
          </h2>
          <select
            value={selectedPlayer}
            onChange={(e) => setSelectedPlayer(e.target.value)}
            style={{
              padding: '12px',
              fontSize: '16px',
              width: '100%',
              maxWidth: '400px',
              borderRadius: '8px',
              border: '1px solid #555',
              backgroundColor: '#1e1e1e',
              color: '#fff',
            }}
          >
            <option value="">-- เลือกนักสนุกเกอร์ --</option>
            {snookerPlayers.map((player) => (
              <option key={player} value={player}>
                {player}
              </option>
            ))}
          </select>
          <button
            onClick={handleVote}
            disabled={hasVoted}
            style={{
              marginTop: '20px',
              padding: '12px 24px',
              backgroundColor: hasVoted ? '#555' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: hasVoted ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              marginLeft: '12px',
              transition: '0.3s',
              boxShadow: hasVoted
                ? 'none'
                : '0 4px 12px rgba(0, 128, 0, 0.4)',
            }}
          >
            {hasVoted ? 'คุณโหวตแล้ว' : 'โหวตเลย'}
          </button>
        </section>

        {/* คะแนน */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>📊 ผลโหวต:</h2>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: '#1e1e1e',
                borderRadius: '10px',
                overflow: 'hidden',
                minWidth: '400px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#2c2c2c' }}>
                  <th style={{ padding: '12px', borderBottom: '1px solid #444' }}>
                    #
                  </th>
                  <th style={{ padding: '12px', borderBottom: '1px solid #444' }}>
                    นักสนุกเกอร์
                  </th>
                  <th style={{ padding: '12px', borderBottom: '1px solid #444' }}>
                    คะแนนโหวต
                  </th>
                </tr>
              </thead>
              <tbody>
                {snookerPlayers.map((player, index) => (
                  <tr key={player} style={{ textAlign: 'center' }}>
                    <td
                      style={{ padding: '10px', borderBottom: '1px solid #444' }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        padding: '10px',
                        borderBottom: '1px solid #444',
                        textAlign: 'left',
                      }}
                    >
                      {player}
                    </td>
                    <td
                      style={{ padding: '10px', borderBottom: '1px solid #444' }}
                    >
                      {votes[player] || 0}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* รีวิว */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            💬 รีวิวความเห็น:
          </h2>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={4}
            placeholder="พิมพ์รีวิวของคุณที่นี่..."
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #555',
              backgroundColor: '#1e1e1e',
              color: '#fff',
              resize: 'vertical',
            }}
          />
          <br />
          <button
            onClick={handleReviewSubmit}
            style={{
              marginTop: '12px',
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
              transition: '0.3s',
            }}
          >
            ส่งรีวิว
          </button>
        </section>

        {/* รีวิวทั้งหมด */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🗒 รีวิวทั้งหมด:</h2>
          {reviews.length === 0 ? (
            <p>ยังไม่มีรีวิว</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {reviews.map((review, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: '16px',
                    padding: '16px',
                    backgroundColor: '#1e1e1e',
                    borderLeft: '5px solid #007bff',
                    borderRadius: '8px',
                  }}
                >
                  <strong>📅 {review.date}</strong>
                  <p style={{ marginTop: '6px' }}>{review.text}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ล้างข้อมูล */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <button
            onClick={handleClearStorage}
            style={{
              padding: '14px 28px',
              backgroundColor: '#d32f2f',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: '0 4px 12px rgba(211,47,47,0.3)',
              transition: '0.3s',
            }}
          >
            🔄 ล้างข้อมูลทั้งหมด
          </button>
        </div>

        {/* ปุ่มกลับหน้าหลัก */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <button
            onClick={handleBackHome}
            style={{
              padding: '12px 30px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
          >
            🏠 กลับหน้าหลัก
          </button>
        </div>
      </div>
    </main>
  )
}
