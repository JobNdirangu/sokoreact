import React from "react";

const Footercomp = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">About SokoGarden</h5>
            <p>
              SokoGarden is your go-to online platform for buying and selling quality products. 
              We connect buyers and sellers for a seamless shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/shop" className="text-white text-decoration-none">Shop</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <p><i className="bi bi-geo-alt-fill"></i> Nairobi, Kenya</p>
            <p><i className="bi bi-telephone-fill"></i> +254 712 345 678</p>
            <p><i className="bi bi-envelope-fill"></i> support@sokogarden.com</p>
          </div>
        </div>

        <hr className="bg-white" />

        <div className="row text-center">
          <div className="col">
            <p className="mb-0">© 2025 SokoGarden. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footercomp;
