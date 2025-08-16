'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QRCode } from 'react-qrcode-logo'
import Swal from 'sweetalert2'

const products = [
  {
    id: 1,
    name: 'ไม้คิว Pro Master',
    price: 3500,
    image: '/image/78.jpg',
    description: 'ไม้คิวคุณภาพสูง เหมาะสำหรับมืออาชีพ น้ำหนักสมดุล จับถนัดมือ',
    badge: 'Premium',
    rating: 5,
  },
  {
    id: 2,
    name: 'ไม้คิว Classic Series',
    price: 2500,
    image: '/image/79.jpg',
    description: 'ไม้คิวดีไซน์คลาสสิก วัสดุทนทาน เหมาะสำหรับผู้เริ่มต้นและระดับกลาง',
    badge: 'Bestseller',
    rating: 4,
  },
  {
    id: 3,
    name: 'ไม้คิว Mini Cue',
    price: 1500,
    image: '/image/80.jpg',
    description: 'ไม้คิวขนาดเล็กสำหรับเด็กหรือผู้เริ่มต้น ฝึกทักษะพื้นฐานได้ดี',
    badge: 'Starter',
    rating: 4,
  },
]

export default function CueShopPage() {
  const router = useRouter()
  const [cart, setCart] = useState([])
  const [isCheckout, setIsCheckout] = useState(false)
  const [cartAnimation, setCartAnimation] = useState(false)

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
    setCartAnimation(true)
    setTimeout(() => setCartAnimation(false), 600)
    
    Swal.fire({
      icon: 'success',
      title: 'เพิ่มสินค้าลงตะกร้าแล้ว! 🎉',
      text: product.name,
      timer: 1500,
      showConfirmButton: false,
      background: '#1e1e2e',
      color: '#cdd6f4',
      toast: true,
      position: 'top-end',
      showClass: {
        popup: 'animate__animated animate__fadeInRight'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutRight'
      }
    })
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'ยังไม่มีสินค้าในตะกร้า',
        text: 'กรุณาเพิ่มสินค้าก่อนชำระเงิน',
        background: '#1e1e2e',
        color: '#cdd6f4'
      })
      return
    }
    setIsCheckout(true)
  }

  const fakePaymentUrl = `https://example.com/payment?amount=${totalPrice}`

  const handleConfirmPayment = () => {
    Swal.fire({
      icon: 'success',
      title: '🎊 ชำระเงินเรียบร้อยแล้ว!',
      html: `<div style="font-size: 18px; margin: 20px 0;">
        <p>💰 ยอดชำระ: <strong style="color: #10b981;">${totalPrice.toLocaleString()} บาท</strong></p>
        <p>🎯 จำนวนสินค้า: <strong>${cart.length}</strong> ชิ้น</p>
        <p style="color: #6b7280; font-size: 14px; margin-top: 15px;">ขอบคุณที่ใช้บริการ!</p>
      </div>`,
      confirmButtonText: '🏠 กลับหน้าหลัก',
      confirmButtonColor: '#10b981',
      background: '#1e1e2e',
      color: '#cdd6f4'
    }).then(() => {
      setCart([])
      setIsCheckout(false)
      router.push('/')
    })
  }

  const handleBackToShop = () => {
    setIsCheckout(false)
  }

  const handleBackToHome = () => {
    router.push('/')
  }

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Premium': return '#8b5cf6'
      case 'Bestseller': return '#f59e0b'
      case 'Starter': return '#10b981'
      default: return '#6b7280'
    }
  }

  return (
    <>
      <div className="page-background">
        {/* Animated background elements */}
        <div className="bg-shapes">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`shape shape-${i % 3}`}></div>
          ))}
        </div>
        
        {/* Floating particles */}
        <div className="particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>

        <main className="container">
          <div className="header-section">
            <h1 className="title">
              <span className="title-emoji">🎱</span>
              ร้านขายไม้คิวสนุกเกอร์
              <span className="title-subtitle">Premium Cue Collection</span>
            </h1>
            <div className="header-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-circle"></div>
              <div className="decoration-line"></div>
            </div>
          </div>

          {!isCheckout ? (
            <>
              <section className="productList">
                {products.map((prod, index) => (
                  <div 
                    key={prod.id} 
                    className="productCard" 
                    tabIndex={0}
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    <div className="card-badge" style={{ background: getBadgeColor(prod.badge) }}>
                      {prod.badge}
                    </div>
                    
                    <div className="image-container">
                      <img src={prod.image} alt={prod.name} className="productImage" />
                      <div className="image-overlay">
                        <div className="overlay-content">
                          <div className="rating">{renderStars(prod.rating)}</div>
                          <div className="quick-view">👁️ ดูรายละเอียด</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-content">
                      <h2 className="productName">{prod.name}</h2>
                      <p className="productDescription">{prod.description}</p>
                      <div className="price-section">
                        <span className="price-label">ราคา</span>
                        <span className="productPrice">{prod.price.toLocaleString()} ฿</span>
                      </div>
                      <button className="buyButton" onClick={() => addToCart(prod)}>
                        <span className="btn-icon">🛒</span>
                        <span className="btn-text">เพิ่มลงตะกร้า</span>
                        <div className="btn-ripple"></div>
                      </button>
                    </div>
                  </div>
                ))}
              </section>

              <section className={`cart ${cartAnimation ? 'cart-shake' : ''}`}>
                <div className="cart-header">
                  <h2>
                    <span className="cart-icon">🛒</span>
                    ตะกร้าสินค้า
                    <span className="cart-count">({cart.length})</span>
                  </h2>
                  {cart.length > 0 && (
                    <div className="cart-total-preview">
                      ยอดรวม: <span className="total-amount">{totalPrice.toLocaleString()} ฿</span>
                    </div>
                  )}
                </div>

                <div className="cart-content">
                  {cart.length === 0 ? (
                    <div className="empty-cart">
                      <div className="empty-cart-icon">🛒</div>
                      <p>ไม่มีสินค้าในตะกร้า</p>
                      <p className="empty-cart-subtitle">เลือกสินค้าที่ต้องการเพื่อเริ่มช้อปปิ้ง</p>
                    </div>
                  ) : (
                    <ul className="cart-items">
                      {cart.map((item, i) => (
                        <li key={i} className="cart-item">
                          <div className="item-info">
                            <span className="item-icon">✨</span>
                            <span className="item-name">{item.name}</span>
                          </div>
                          <div className="item-actions">
                            <span className="item-price">{item.price.toLocaleString()} ฿</span>
                            <button 
                              className="remove-btn" 
                              onClick={() => removeFromCart(i)}
                              title="ลบสินค้า"
                            >
                              ❌
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="cart-actions">
                  <button className="checkoutButton" onClick={handleCheckout}>
                    <span className="btn-icon">💳</span>
                    <span className="btn-text">ชำระเงิน</span>
                    {cart.length > 0 && <span className="btn-amount">{totalPrice.toLocaleString()} ฿</span>}
                  </button>
                  <button className="backHomeButton" onClick={handleBackToHome}>
                    <span className="btn-icon">🏠</span>
                    <span className="btn-text">กลับหน้าหลัก</span>
                  </button>
                </div>
              </section>
            </>
          ) : (
            <section className="checkoutSection">
              <div className="checkout-header">
                <h2>📱 ชำระเงินด้วย QR Code</h2>
                <p className="checkout-subtitle">สแกนเพื่อชำระเงินผ่าน Mobile Banking</p>
              </div>
              
              <div className="qr-container">
                <div className="qr-wrapper">
                  <QRCode 
                    value={fakePaymentUrl} 
                    size={200}
                    logoImage="/api/placeholder/40/40"
                    logoWidth={40}
                    logoHeight={40}
                    qrStyle="dots"
                    eyeRadius={8}
                  />
                  <div className="qr-overlay">
                    <div className="scanning-line"></div>
                  </div>
                </div>
              </div>

              <div className="payment-details">
                <div className="payment-summary">
                  <h3>📋 สรุปการสั่งซื้อ</h3>
                  <div className="summary-items">
                    {cart.map((item, i) => (
                      <div key={i} className="summary-item">
                        <span>{item.name}</span>
                        <span>{item.price.toLocaleString()} ฿</span>
                      </div>
                    ))}
                  </div>
                  <div className="summary-total">
                    <span>💰 ยอดรวมทั้งหมด:</span>
                    <span className="total-price">{totalPrice.toLocaleString()} ฿</span>
                  </div>
                </div>
              </div>

              <div className="checkoutButtons">
                <button className="confirmButton" onClick={handleConfirmPayment}>
                  <span className="btn-icon">✅</span>
                  <span className="btn-text">ฉันชำระเงินแล้ว</span>
                </button>
                <button className="backButton" onClick={handleBackToShop}>
                  <span className="btn-icon">🔙</span>
                  <span className="btn-text">กลับไปเลือกสินค้า</span>
                </button>
                <button className="backHomeButton" onClick={handleBackToHome}>
                  <span className="btn-icon">🏠</span>
                  <span className="btn-text">กลับหน้าหลัก</span>
                </button>
              </div>
            </section>
          )}
        </main>
      </div>

      <style jsx>{`
        .page-background {
          min-height: 100vh;
          background: linear-gradient(135deg, 
            #667eea 0%, 
            #764ba2 25%, 
            #f093fb 50%, 
            #f5576c 75%, 
            #4facfe 100%);
          background-size: 400% 400%;
          animation: gradientShift 12s ease-in-out infinite;
          padding: 40px 20px;
          position: relative;
          overflow-x: hidden;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .bg-shapes {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          animation: floatShapes 15s ease-in-out infinite;
        }

        .shape-0 { 
          width: 120px; height: 120px; 
          top: 10%; left: 10%; 
          animation-delay: 0s; 
        }
        .shape-1 { 
          width: 80px; height: 80px; 
          top: 70%; right: 15%; 
          animation-delay: 5s;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        .shape-2 { 
          width: 100px; height: 100px; 
          bottom: 20%; left: 80%; 
          animation-delay: 10s; 
        }

        @keyframes floatShapes {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(20px, -30px) rotate(90deg) scale(1.1); }
          50% { transform: translate(-15px, 25px) rotate(180deg) scale(0.9); }
          75% { transform: translate(25px, -10px) rotate(270deg) scale(1.05); }
        }

        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: floatParticles 8s ease-in-out infinite;
        }

        .particle-0 { width: 3px; height: 3px; top: 15%; left: 20%; animation-delay: 0s; }
        .particle-1 { width: 4px; height: 4px; top: 25%; left: 70%; animation-delay: 1s; }
        .particle-2 { width: 2px; height: 2px; top: 60%; left: 30%; animation-delay: 2s; }
        .particle-3 { width: 5px; height: 5px; top: 80%; left: 80%; animation-delay: 3s; }

        @keyframes floatParticles {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.8; }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .header-section {
          text-align: center;
          margin-bottom: 60px;
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 40px;
          margin: 0 0 30px 0;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }

        .title::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 3s infinite;
          transform: rotate(45deg);
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .title-emoji {
          font-size: 4rem;
          display: block;
          margin-bottom: 15px;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .title {
          font-size: 3rem;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          font-weight: 700;
          line-height: 1.2;
        }

        .title-subtitle {
          display: block;
          font-size: 1.2rem;
          font-weight: 400;
          margin-top: 10px;
          opacity: 0.9;
        }

        .header-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .decoration-line {
          height: 2px;
          width: 60px;
          background: linear-gradient(90deg, transparent, white, transparent);
        }

        .decoration-circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        .productList {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .productCard {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border-radius: 25px;
          padding: 0;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: slideUp 0.8s ease-out both;
          animation-delay: var(--delay);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .productCard:hover,
        .productCard:focus {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.4);
          outline: none;
        }

        .card-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 8px 16px;
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 700;
          z-index: 3;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 25px 25px 0 0;
        }

        .productImage {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .productCard:hover .productImage {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 15px;
        }

        .productCard:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: white;
        }

        .rating {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .quick-view {
          background: rgba(255,255,255,0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .card-content {
          padding: 30px;
          color: white;
        }

        .productName {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .productDescription {
          font-size: 1rem;
          margin-bottom: 25px;
          opacity: 0.9;
          line-height: 1.5;
        }

        .price-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
          padding: 15px;
          background: rgba(255,255,255,0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .price-label {
          font-size: 14px;
          opacity: 0.8;
        }

        .productPrice {
          font-size: 1.8rem;
          font-weight: 700;
          color: #10b981;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .buyButton {
          width: 100%;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          padding: 16px;
          border-radius: 15px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .buyButton:hover {
          background: linear-gradient(135deg, #059669, #047857);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        }

        .btn-icon {
          font-size: 18px;
        }

        .btn-text {
          font-weight: 700;
        }

        .cart {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 40px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          margin-bottom: 40px;
          animation: slideUp 0.8s ease-out 0.3s both;
        }

        .cart-shake {
          animation: shake 0.6s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .cart-header h2 {
          color: white;
          font-size: 1.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .cart-icon {
          font-size: 24px;
        }

        .cart-count {
          background: #10b981;
          color: white;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 14px;
          font-weight: 700;
        }

        .cart-total-preview {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          padding: 12px 20px;
          border-radius: 20px;
          color: white;
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }

        .total-amount {
          font-size: 1.2rem;
          color: #fbbf24;
        }

        .cart-content {
          margin-bottom: 30px;
        }

        .empty-cart {
          text-align: center;
          padding: 60px 20px;
          color: rgba(255, 255, 255, 0.8);
        }

        .empty-cart-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          opacity: 0.6;
        }

        .empty-cart p {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .empty-cart-subtitle {
          font-size: 1rem !important;
          opacity: 0.7;
        }

        .cart-items {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          margin-bottom: 15px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .cart-item:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(5px);
        }

        .item-info {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .item-icon {
          font-size: 16px;
        }

        .item-name {
          color: white;
          font-weight: 600;
        }

        .item-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .item-price {
          color: #10b981;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .remove-btn {
          background: rgba(239, 68, 68, 0.2);
          border: 2px solid rgba(239, 68, 68, 0.4);
          color: #ef4444;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .remove-btn:hover {
          background: rgba(239, 68, 68, 0.3);
          border-color: rgba(239, 68, 68, 0.6);
          transform: scale(1.1);
        }

        .cart-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .checkoutButton,
        .confirmButton,
        .backButton,
        .backHomeButton {
          padding: 16px 24px;
          border-radius: 15px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
          flex: 1;
          justify-content: center;
        }

        .checkoutButton {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
        }

        .checkoutButton:hover {
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
        }

        .confirmButton {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }

        .confirmButton:hover {
          background: linear-gradient(135deg, #059669, #047857);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
        }

        .backButton {
          background: linear-gradient(135deg, #6b7280, #4b5563);
          color: white;
          box-shadow: 0 8px 25px rgba(107, 114, 128, 0.3);
        }

        .backButton:hover {
          background: linear-gradient(135deg, #4b5563, #374151);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(107, 114, 128, 0.4);
        }

        .backHomeButton {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
        }

        .backHomeButton:hover {
          background: linear-gradient(135deg, #d97706, #b45309);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(245, 158, 11, 0.4);
        }

        .btn-amount {
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 14px;
          margin-left: 10px;
        }

        .checkoutSection {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 50px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          text-align: center;
          animation: slideUp 0.8s ease-out;
          max-width: 600px;
          margin: 0 auto;
        }

        .checkout-header {
          margin-bottom: 40px;
        }

        .checkout-header h2 {
          color: white;
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .checkout-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          margin: 0;
        }

        .qr-container {
          display: flex;
          justify-content: center;
          margin: 40px 0;
        }

        .qr-wrapper {
          position: relative;
          background: white;
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          animation: pulse 2s infinite;
        }

        .qr-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          pointer-events: none;
        }

        .scanning-line {
          position: absolute;
          top: 25px;
          left: 25px;
          right: 25px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #10b981, transparent);
          animation: scanning 2s linear infinite;
        }

        @keyframes scanning {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }

        .payment-details {
          margin: 40px 0;
        }

        .payment-summary {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .payment-summary h3 {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 25px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .summary-items {
          margin-bottom: 25px;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.9);
        }

        .summary-item:last-child {
          border-bottom: none;
        }

        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-top: 2px solid rgba(255, 255, 255, 0.3);
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
        }

        .total-price {
          color: #10b981;
          font-size: 1.5rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }

        .checkoutButtons {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 40px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .page-background {
            padding: 20px 10px;
          }

          .container {
            max-width: 100%;
          }

          .title {
            padding: 30px 20px;
          }

          .title-emoji {
            font-size: 3rem;
          }

          .title {
            font-size: 2.2rem;
          }

          .title-subtitle {
            font-size: 1rem;
          }

          .productList {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .productCard {
            margin: 0 10px;
          }

          .card-content {
            padding: 20px;
          }

          .cart {
            padding: 30px 20px;
            margin: 0 10px 40px 10px;
          }

          .cart-header {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .cart-actions {
            flex-direction: column;
          }

          .checkoutSection {
            padding: 30px 20px;
            margin: 0 10px;
          }

          .checkoutButtons {
            gap: 10px;
          }

          .item-actions {
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;
          }

          .qr-wrapper {
            padding: 20px;
          }

          .payment-summary {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.8rem;
            padding: 20px 15px;
          }

          .title-emoji {
            font-size: 2.5rem;
          }

          .cart-header h2 {
            font-size: 1.5rem;
          }

          .productName {
            font-size: 1.3rem;
          }

          .productDescription {
            font-size: 0.9rem;
          }

          .price-section {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .productPrice {
            font-size: 1.5rem;
          }

          .checkoutButton,
          .confirmButton,
          .backButton,
          .backHomeButton {
            padding: 14px 20px;
            font-size: 15px;
          }
        }

        /* Animation for button ripple effect */
        .buyButton::before,
        .checkoutButton::before,
        .confirmButton::before,
        .backButton::before,
        .backHomeButton::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }

        .buyButton:active::before,
        .checkoutButton:active::before,
        .confirmButton:active::before,
        .backButton:active::before,
        .backHomeButton:active::before {
          width: 200px;
          height: 200px;
        }

        /* Loading animation for buttons */
        @keyframes buttonGlow {
          0%, 100% { box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 8px 35px rgba(139, 92, 246, 0.5); }
        }

        .checkoutButton:hover {
          animation: buttonGlow 1s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}