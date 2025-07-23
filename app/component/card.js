export default function Card() {
  return (
    <div className="container-fluid">
      {/* Header Section */}
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h3 className="text-primary">นักแข่ง</h3>
        </div>
      </div>

      {/* Card Section */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* First Card */}
        <div className="col">
          <div className="card shadow-sm border-light">
          <img
  src="/image/4.jpg"
  className="card-img-top img-fluid rounded"
  alt="นักแข่ง 1"
  style={{ height: '250px', objectFit: 'cover' }}
/>
            <div className="card-body text-center">
              <p className="card-text text-muted">ยังไม่มีข้อมูล</p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col">
          <div className="card shadow-sm border-light">
            <img
  src="/image/5.jpg"
  className="card-img-top img-fluid rounded"
  alt="นักแข่ง 2"
  style={{ height: '250px', objectFit: 'cover' }}
/>
            <div className="card-body text-center">
              <p className="card-text text-muted">ยังไม่มีข้อมูล</p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col">
          <div className="card shadow-sm border-light">
           <img
  src="/image/6.jpg"
  className="card-img-top img-fluid rounded"
  alt="นักแข่ง 1"
  style={{ height: '250px', objectFit: 'cover' }}
/>
            <div className="card-body text-center">
              <p className="card-text text-muted">ยังไม่มีข้อมูล</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
