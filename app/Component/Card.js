export default function Card() {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        
        <div className="col">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/300x180"
              className="card-img-top"
              alt="Sample"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/300x180"
              className="card-img-top"
              alt="Sample"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/300x180"
              className="card-img-top"
              alt="Sample"
            />
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
