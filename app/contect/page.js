"use client";

export default function Contact() {
  return (
    <div className="contact-page">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ติดต่อเรา</title>

      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="logo">กลับสู่หน้าหลัก</a>
      </nav>

      {/* Contact Form */}
      <div className="contact-container">
        <h2>ติดต่อเรา</h2>
        <p className="description">
          หากคุณมีคำถามหรือต้องการติดต่อสอบถามเพิ่มเติม โปรดกรอกแบบฟอร์มด้านล่าง หรือใช้ข้อมูลติดต่อที่ให้ไว้
        </p>
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">ชื่อ</label>
            <input
              id="name"
              type="text"
              placeholder="กรอกชื่อของคุณ"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">อีเมล</label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">ข้อความ</label>
            <textarea
              id="message"
              rows={5}
              placeholder="พิมพ์ข้อความของคุณที่นี่..."
              required
            />
          </div>

          <button type="submit">ส่งข้อความ</button>
        </form>

        <div className="footer-contacts">
          <p><strong>📞 โทร:</strong> <a href="tel:+66912345678">+66 912 345 678</a></p>
          <p><strong>✉️ อีเมล:</strong> <a href="mailto:info@snookerservice.com">info@snookerservice.com</a></p>
          <p><strong>📍 ที่อยู่:</strong> 123 ถนนสนุกเกอร์, กรุงเทพฯ, ประเทศไทย</p>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f0f2f5;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: #333;
          color: white;
          padding: 15px 0;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }

        .contact-page {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 80px;
          padding-bottom: 40px;
          background-color: #f4f7fa;
          min-height: 100vh;
        }

        .contact-container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
        }

        .contact-container h2 {
          text-align: center;
          margin-bottom: 10px;
          color: #333;
        }

        .description {
          text-align: center;
          font-size: 14px;
          color: #666;
          margin-bottom: 25px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          font-size: 14px;
          color: #555;
          display: block;
          margin-bottom: 8px;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          border-color: #007bff;
          outline: none;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }

        .footer-contacts {
          margin-top: 30px;
          font-size: 14px;
          color: #444;
        }

        .footer-contacts p {
          margin: 10px 0;
        }

        .footer-contacts a {
          color: #007bff;
          text-decoration: none;
        }

        .footer-contacts a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
