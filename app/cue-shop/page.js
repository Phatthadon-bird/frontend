'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'  // เพิ่มตรงนี้
import { QRCode } from 'react-qrcode-logo'
import Swal from 'sweetalert2'

const products = [
  {
    id: 1,
    name: 'ไม้คิว Pro Master',
    price: 3500,
    image: '/image/78.jpg',
    description: 'ไม้คิวคุณภาพสูง เหมาะสำหรับมืออาชีพ น้ำหนักสมดุล จับถนัดมือ',
  },
  {
    id: 2,
    name: 'ไม้คิว Classic Series',
    price: 2500,
    image: '/image/79.jpg',
    description: 'ไม้คิวดีไซน์คลาสสิก วัสดุทนทาน เหมาะสำหรับผู้เริ่มต้นและระดับกลาง',
  },
  {
    id: 3,
    name: 'ไม้คิว Mini Cue',
    price: 1500,
    image: '/image/80.jpg',
    description: 'ไม้คิวขนาดเล็กสำหรับเด็กหรือผู้เริ่มต้น ฝึกทักษะพื้นฐานได้ดี',
  },
]

export default function CueShopPage() {
  const router = useRouter()  // สร้าง router instance
  const [cart, setCart] = useState([])
  const [isCheckout, setIsCheckout] = useState(false)

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
    Swal.fire({
      icon: 'success',
      title: 'เพิ่มสินค้าลงตะกร้าแล้ว!',
      text: product.name,
      timer: 1500,
      showConfirmButton: false,
    })
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'ยังไม่มีสินค้าในตะกร้า',
        text: 'กรุณาเพิ่มสินค้าก่อนชำระเงิน',
      })
      return
    }
    setIsCheckout(true)
  }

  const fakePaymentUrl = `https://example.com/payment?amount=${totalPrice}`

  const handleConfirmPayment = () => {
    Swal.fire({
      icon: 'success',
      title: 'ชำระเงินเรียบร้อยแล้ว!',
      html: `<p>ยอด: <strong>${totalPrice.toLocaleString()} บาท</strong></p>`,
      confirmButtonText: 'ตกลง',
    }).then(() => {
      setCart([])
      setIsCheckout(false)
    })
  }

  const handleBackToShop = () => {
    setIsCheckout(false)
  }

  const handleBackToHome = () => {
    router.push('/')  // เปลี่ยนหน้าเป็นหน้าหลัก
  }

  return (
    <>
      <main className="container">
        <h1 className="title">🛒 ร้านขายไม้คิวสนุกเกอร์</h1>

        {!isCheckout ? (
          <>
            <section className="productList">
              {products.map((prod) => (
                <div key={prod.id} className="productCard" tabIndex={0}>
                  <img src={prod.image} alt={prod.name} className="productImage" />
                  <h2 className="productName">{prod.name}</h2>
                  <p className="productDescription">{prod.description}</p>
                  <p className="productPrice">💰 ราคา: {prod.price.toLocaleString()} บาท</p>
                  <button className="buyButton" onClick={() => addToCart(prod)}>
                    🛒 สั่งซื้อ
                  </button>
                </div>
              ))}
            </section>

            <section className="cart">
              <h2>🧺 ตะกร้าสินค้า ({cart.length} ชิ้น)</h2>
              <ul>
                {cart.map((item, i) => (
                  <li key={i}>
                    ✅ {item.name} - {item.price.toLocaleString()} บาท
                  </li>
                ))}
              </ul>
              <p>รวมทั้งหมด: {totalPrice.toLocaleString()} บาท</p>
              <button className="checkoutButton" onClick={handleCheckout}>
                💳 ชำระเงิน
              </button>
              <button className="backHomeButton" onClick={handleBackToHome}>
                🏠 กลับไปหน้าหลัก
              </button>
            </section>
          </>
        ) : (
          <section className="checkoutSection">
            <h2>📲 สแกน QR เพื่อชำระเงิน (จำลอง)</h2>
            <QRCode value={fakePaymentUrl} size={220} />
            <p>
              💵 ยอดรวมทั้งหมด: <strong>{totalPrice.toLocaleString()} บาท</strong>
            </p>

            <div className="checkoutButtons">
              <button className="confirmButton" onClick={handleConfirmPayment}>
                ✅ ฉันชำระเงินแล้ว
              </button>
              <button className="backButton" onClick={handleBackToShop}>
                🔙 กลับไปเลือกสินค้า
              </button>
              <button className="backHomeButton" onClick={handleBackToHome}>
                🏠 กลับไปหน้าหลัก
              </button>
            </div>
          </section>
        )}
      </main>

      <style jsx>{`
        /* CSS เดิม... */
        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fefefe;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          color: #222;
        }

        .title {
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 40px;
          color: #004080;
          text-shadow: 0 0 6px #5599ff;
        }

        .productList {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .productCard {
          background-color: #e6f0ff;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 10px rgba(0, 122, 204, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .productCard:focus,
        .productCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 122, 204, 0.4);
          outline: none;
        }

        .productImage {
          width: 100%;
          max-width: 240px;
          height: 160px;
          object-fit: cover;
          border-radius: 16px;
          margin-bottom: 20px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .productCard:hover .productImage,
        .productCard:focus .productImage {
          transform: scale(1.05);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.35);
        }

        .productName {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #003366;
          text-align: center;
        }

        .productDescription {
          font-size: 1rem;
          color: #444;
          margin-bottom: 15px;
          text-align: center;
        }

        .productPrice {
          font-weight: 700;
          color: #005a9e;
          margin-bottom: 20px;
        }

        .buyButton {
          background-color: #007acc;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select: none;
        }

        .buyButton:hover {
          background-color: #005a9e;
        }

        .cart {
          margin-top: 50px;
          padding: 20px;
          background: #d0e4ff;
          border-radius: 16px;
          box-shadow: inset 0 0 10px #5599ffaa;
          text-align: center;
        }

        .cart h2 {
          margin-bottom: 15px;
          color: #003366;
          font-weight: 700;
          font-size: 1.5rem;
        }

        .cart ul {
          list-style: none;
          padding-left: 0;
          color: #004080;
          font-weight: 600;
        }

        .cart li {
          padding: 8px 0;
          border-bottom: 1px solid #a0c4ff;
        }

        .cart li:last-child {
          border-bottom: none;
        }

        .checkoutButton,
        .confirmButton,
        .backButton,
        .backHomeButton {
          padding: 12px 24px;
          border-radius: 25px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          margin-top: 15px;
          margin-right: 10px;
          transition: background-color 0.3s ease;
        }

        .checkoutButton {
          background-color: #007acc;
          color: white;
        }

        .checkoutButton:hover {
          background-color: #005a9e;
        }

        .confirmButton {
          background-color: #28a745;
          color: white;
        }

        .confirmButton:hover {
          background-color: #1e7e34;
        }

        .backButton {
          background-color: #6c757d;
          color: white;
        }

        .backButton:hover {
          background-color: #5a6268;
        }

        .backHomeButton {
          background-color: #ff6f61;
          color: white;
        }

        .backHomeButton:hover {
          background-color: #e65b4c;
        }

        .checkoutSection {
          text-align: center;
          background-color: #fff;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          margin: 2rem auto;
        }

        .checkoutButtons {
          margin-top: 1.5rem;
        }
      `}</style>
    </>
  )
}
