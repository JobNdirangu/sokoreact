import React from "react";

const Aboutus = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="text-muted">
          Welcome to SokoGarden, your go-to online marketplace for buying and
          selling products conveniently and securely.
        </p>
      </div>

      <div className="row align-items-center">
        {/* Left Section - Text */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p className="text-muted">
            SokoGarden is an innovative platform that connects buyers and
            sellers, offering a seamless shopping experience. Whether you're
            looking for the latest products or unique handmade items, we’ve got
            you covered.
          </p>
          <p className="text-muted">
            Our mission is to empower communities by making online transactions
            fast, easy, and reliable. Join us and become part of our growing
            family!
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="col-md-6 text-center">
          <img
            src="static/images/about1.jpeg"
            alt="SokoGarden Marketplace"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="row my-5">
        <div className="col-md-4 text-center mb-4">
          <div className="p-4 bg-warning text-light rounded shadow h-100">
            <i className="bi bi-shop-window fs-1 text-success mb-3"></i>
            <h5 className="fw-bold">Wide Range of Products</h5>
            <p className="text-muted">
              From electronics to fashion, discover thousands of items to meet
              your needs.
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4 ">
          <div className="p-4 bg-info text-light rounded shadow h-100">
            <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
            <h5 className="fw-bold">Safe and Secure</h5>
            <p className="text-muted">
              Our platform ensures secure payments and trusted transactions for
              peace of mind.
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="p-4 bg-warning text-light rounded shadow h-100">
            <i className="bi bi-people fs-1 text-warning mb-3"></i>
            <h5 className="fw-bold">Community-Focused</h5>
            <p className="text-muted">
              Supporting small businesses and creating opportunities for growth.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="row my-5">
        <div className="col-md-6 text-center order-md-2 mb-4">
          <img
            src="static/images/about2.jpg"
            alt="Vision and Mission"
            className="img-fluid rounded shadow about_img"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h2 className="fw-bold mb-3">Our Vision & Mission</h2>
          <p className="text-muted">
            At SokoGarden, our vision is to create a thriving online marketplace
            that fosters connections between buyers and sellers. Our mission is
            to make online shopping an enjoyable and convenient experience for
            everyone.
          </p>
          <p className="text-muted">
            We strive to deliver exceptional customer service, innovative
            solutions, and a platform that inspires trust and loyalty.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-5 bg-success text-white rounded shadow">
        <h3 className="fw-bold">Join SokoGarden Today!</h3>
        <p>
          Experience the best online marketplace for buying and selling
          products.
        </p>
        <a href="/signup" className="btn btn-light btn-lg mt-3">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Aboutus;
