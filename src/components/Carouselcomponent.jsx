import React from 'react'

const Carouselcomponent = () => {
  return (
    <section className="row">
      <div className="col-md-12">
        {/* <!-- Below div will carry the 3 sections of a carousel --> */}
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
          {/* <!-- Wrapper Starts here --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="static/images/slide1.png"
                className="d-block w-100"
                alt="Slide 3 description"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../static/images/slide4.jpg"
                className="d-block w-100"
                alt="Slide 4 description"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../static/images/slide1.jpg"
                className="d-block w-100"
                alt="Slide 1 description"
              />
            </div>
          </div>
    
          {/* <!-- Wrapper ends here -->
    
          <!-- Controller starts here --> */}
          <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev">
            <span className="carousel-control-prev-icon bg-danger"></span>
          </a>
          <a href="#mycarousel" data-bs-slide="next" className="carousel-control-next">
            <span className="carousel-control-next-icon bg-danger"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Carouselcomponent