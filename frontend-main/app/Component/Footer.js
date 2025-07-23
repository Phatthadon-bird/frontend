'use client';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            {/* ช่องว่างสำหรับข้อความหรือเนื้อหา */}
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
      </footer>
    </>
  );
}
